"""Package the fresh module into one offline HTML file."""
from pathlib import Path
import base64,json
R=Path(__file__).resolve().parent

def embed(path,mime):return 'data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode()
assets={key:embed(R/'assets'/name,'image/png') for key,name in [('cell','CS-01-original.png'),('er','CS-02-original.png')]}
fonts=''
for name,family,style in [('Newsreader.ttf','Newsreader','normal'),('Newsreader-Italic.ttf','Newsreader','italic'),('HankenGrotesk.ttf','Hanken Grotesk','normal')]:
 fonts+=f"@font-face{{font-family:'{family}';font-style:{style};font-weight:100 900;font-display:swap;src:url('{embed(R/'assets'/name,'font/ttf')}') format('truetype')}}\n"
replacements={'STYLE':fonts+(R/'src/styles.css').read_text(),'MODEL':json.dumps(json.loads((R/'src/lesson.json').read_text()),ensure_ascii=False),'MEDIA':json.dumps(json.loads((R/'src/media.json').read_text()),ensure_ascii=False),'ASSETS':json.dumps(assets),'PLAYER':(R/'src/player.js').read_text()}
html=(R/'src/index.html').read_text()
for name,value in replacements.items():html=html.replace('/*'+name+'*/',value)
(R/'dist').mkdir(exist_ok=True);(R/'dist/index.html').write_text(html)
print(f'Built single-file module: {len(html.encode()):,} bytes; no external runtime dependencies.')
