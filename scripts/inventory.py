"""Inventory the original Part B directly, without a lesson digest."""
from pathlib import Path
from html.parser import HTMLParser
import json, hashlib
ROOT=Path(__file__).resolve().parents[1]
class Node:
    def __init__(self,tag='',attrs=()): self.tag=tag;self.attrs=dict(attrs);self.children=[];self.parent=None
    def text(self): return ''.join(c.text() if isinstance(c,Node) else c for c in self.children)
class Parser(HTMLParser):
    def __init__(self): super().__init__();self.root=Node('root');self.stack=[self.root]
    def handle_starttag(self,t,a):
        n=Node(t,a);n.parent=self.stack[-1];n.parent.children.append(n)
        if t not in ('br','img','hr','input','meta','link'): self.stack.append(n)
        if t=='br': n.children=['\n']
    def handle_endtag(self,t):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i].tag==t:self.stack=self.stack[:i];break
    def handle_data(self,d):self.stack[-1].children.append(d)
def walk(n):
    yield n
    for c in n.children:
        if isinstance(c,Node):yield from walk(c)
path=ROOT/'resources/current-input/build-and-academic-input.html'
p=Parser();p.feed(path.read_text());nodes=list(walk(p.root))
start=next(i for i,n in enumerate(nodes) if n.tag in ('h1','h2') and n.text().startswith('Part B —'))
items=[];context='';label='';table_row=0
def add(kind,exact,node=None,**extra):
    ancestor=node
    while ancestor and not ancestor.attrs.get('id'):ancestor=ancestor.parent
    item={'id':f'B{len(items)+1:03d}','kind':kind,'context':context,'label':label,'exact':exact,'source_element':ancestor.attrs.get('id') if ancestor else None,**extra};items.append(item)
for n in nodes[start+1:]:
    if n.tag=='h3':context=n.text();label='';continue
    text=n.text().strip()
    if n.tag=='p':
        if text.startswith('1.1 '):add('outcomes',text,n)
        elif text.endswith(':'):label=text
        elif text: add('supporting' if 'Example' in text or 'Hotspot' in text else 'academic',text,n)
    elif n.tag=='li':
        own=''.join(c.text() if isinstance(c,Node) and c.tag not in ('ul','ol') else c if isinstance(c,str) else '' for c in n.children).strip()
        if own.endswith(':'):label=own
        elif own:add('academic',own,n)
    elif n.tag in ('th','td'):add('table-cell',text,n,column=n.attrs.get('id'),tag=n.tag)
    elif n.tag=='img':add('image',n.attrs['src'],n)
image_annotations={
 'CS-01':['nucleus','cytoplasm','ribosomes','mitochondrion','cell surface membrane'],
 'CS-02':['Endoplasmic reticulum','nucleus','nuclear envelope','nuclear pore','smooth ER','lipid synthesis','detoxification','Ca²⁺ storage','site of protein & lipid synthesis','connected to nuclear envelope','rough ER has ribosomes; smooth ER does not','cisternae (flattened membrane sacs)','rough ER','protein synthesis','modification & transport','ribosomes (on rough ER)']}
for asset,annotations in image_annotations.items():
    context='Image text';label=asset
    for quote in annotations:add('image-annotation',quote,asset=asset,location='Visible printed text in supplied image')
out={'input_sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'authority':'Part B of the current input only','items':items,'assets':[
 {'id':'CS-01','file':'assets/CS-01-original.png','type':'schematic','verified_micrograph':False,'original_labels':True},
 {'id':'CS-02','file':'assets/CS-02-original.png','type':'schematic','verified_micrograph':False,'original_labels':True}]}
(ROOT/'resources/source-inventory.json').write_text(json.dumps(out,indent=2,ensure_ascii=False)+'\n')
print(f'Inventoried {len(items)} original content, table, image and annotation items.')
