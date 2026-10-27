"""Build the complete offline module using only Python's standard library."""
from pathlib import Path
import base64, json, re
ROOT = Path(__file__).resolve().parent
def uri(name, mime):
    return f'data:{mime};base64,'+base64.b64encode((ROOT/'assets'/name).read_bytes()).decode()
assets = {key:uri(name,'image/png') for key,name in {
    'cell':'cell-crop.png','mito':'mitochondrion-crop.png','er':'er-crop.png',
    'originalCell':'CS-01-original.png','originalER':'CS-02-original.png'}.items()}
fonts=''
for filename,family,style in [('Newsreader.ttf','Newsreader','normal'),('Newsreader-Italic.ttf','Newsreader','italic'),('HankenGrotesk.ttf','Hanken Grotesk','normal')]:
    fonts+=f"@font-face{{font-family:'{family}';font-style:{style};font-weight:100 900;font-display:swap;src:url('{uri(filename,'font/ttf')}') format('truetype');}}\n"
reference=(ROOT/'src/reference.html').read_text()
for filename,key in [('image.png','originalCell'),('d1617f2e-35ff-463d-86a7-4d5b3301a52d.png','originalER')]:
    reference=reference.replace(f'src="{filename}"',f'src="{assets[key]}"').replace(f'href="{filename}"','href="#"')
reference=reference.replace('<img src=', '<img alt="Original supplied schematic" loading="lazy" src=')
template=(ROOT/'src/index.html').read_text()
values={'STYLES':(ROOT/'src/styles.css').read_text().replace('/*FONTS*/',fonts),'REFERENCE':reference,'ASSETS':json.dumps({k:v for k,v in assets.items() if not k.startswith('original')}),'CONTENT':(ROOT/'src/content.js').read_text(),'APP':(ROOT/'src/app.js').read_text()}
for key,value in values.items(): template=template.replace(f'/*{key}*/',value)
(ROOT/'dist').mkdir(exist_ok=True)
(ROOT/'dist/index.html').write_text(template)
print(f'Built dist/index.html ({len(template.encode()):,} bytes). All images and fonts embedded.')
