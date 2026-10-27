"""A fresh lesson design derived from the current Part B inventory."""
from pathlib import Path
import json
R=Path(__file__).resolve().parents[1]
inv=json.loads((R/'resources/source-inventory.json').read_text())
byid={i['id']:i for i in inv['items']}
def b(*ids):return [f'B{i:03d}' for i in ids]
def term(s):return f'<strong>{s}</strong>'
def fn(s):return f'<span class="function">{s}</span>'
def p(text,*ids):return {'type':'text','html':text,'source':b(*ids)}
def image(view,*ids):return {'type':'picture','view':view,'source':b(*ids)}
def flow(nodes,links,*ids):return {'type':'flow','nodes':nodes,'links':links,'source':b(*ids)}
units=[];questions=[]
sections=['Cells & cytoplasm','Cell membrane','Nucleus & DNA','Mitochondria','ER & ribosomes','Diagram practice','Final check']
def teach(section,title,subtitle,blocks):
 id=f'T{sum(u["type"]=="teach" for u in units)+1:03d}'
 units.append({'id':id,'type':'teach','section':section,'title':title,'subtitle':subtitle,'blocks':blocks});return id
spec=byid['B001']['exact'];rec,func=spec.split('1.2 ',1)
opening=teach(0,'Cell structure','RECOGNITION AND FUNCTION',[
 p('Cells contain structures with different functions. The nucleus, chromosomes, cell membrane, mitochondria, endoplasmic reticulum and ribosomes are the focus of this lesson.',1),
 p('We’ll see how these structures relate to movement into and out of cells, protein production, cell activities and energy transfer into ATP.',9,20,28,34,47),image('overview',4,50,51,52,53,54)])
teach(0,'Learning outcome 1.1','STRUCTURE RECOGNITION',[p(line,1) for line in rec.rstrip().split('\n')])
teach(0,'Learning outcome 1.2','STRUCTURE FUNCTIONS',[p(line,1) for line in ('1.2 '+func).split('\n')])
cell=teach(0,'Cells','THE BASIC UNITS OF LIVING ORGANISMS',[p(f'{term("Cells")} are the basic units of living organisms.',2),image('overview',4)])
teach(0,'Organelles','STRUCTURES WITH SPECIFIC FUNCTIONS',[p(f'{term("Organelles")} are structures inside cells with specific functions.',3),p('The structures inside a cell have different roles. Their functions form the relationships in the learning map.',3,9,13,20,27,28,34,47)])
teach(0,'Cell structure','A CONNECTED LEARNING MAP',[{'type':'map','source':b(9,13,15,20,27,28,34,47)}])
cyto=teach(0,'Cytoplasm','STRUCTURE AND LOCATION',[p(f'The {term("cytoplasm")} is jelly-like material outside the nucleus.',5),p(f'It {fn("contains organelles")}.',6),image('cytoplasm',4,51)])
teach(0,'Cytoplasm','FUNCTION',[p(f'The cytoplasm is the {fn("site of many chemical reactions")}, including {term("anaerobic respiration")}.',7),flow(['Cytoplasm','Many chemical reactions','Anaerobic respiration'],['is the site of','including'],7)])
teach(1,'Cell membrane','MOVEMENT INTO AND OUT OF THE CELL',[p('The cell surface membrane controls movement into and out of the cell. This brings its boundary and its function together.',8,9)])
mem=teach(1,'Cell surface membrane','STRUCTURE',[p(f'The cell surface membrane is a {term("partially permeable boundary")}.',8),image('membrane',54)])
memfn=teach(1,'Cell surface membrane','FUNCTION',[p(f'The cell surface membrane {fn("controls movement into and out of the cell")}.',9),flow(['Movement into and out of the cell','Cell surface membrane'],['is controlled by the'],9)])
teach(1,'Cell membrane','WAYS SUBSTANCES CROSS',[p(f'Substances cross by {term("diffusion")} or through {term("transport proteins")}.',10),flow(['Substances','The cell surface membrane'],['cross by diffusion or through transport proteins'],10)])
teach(1,'Active transport','ENERGY REQUIREMENT',[p(f'{term("Active transport")} {fn("requires energy")}.',11)])
teach(1,'Movement of substances','FURTHER CONTEXT',[p('More of the movement of substances into and out of cells is covered in Unit 2 — Movement of substances into and out of cells.',12)])
def mc(id,section,title,prompt,options,correct,feedback,review,ids,mode='practice',skill='function',picture=None):
 q={'id':id,'kind':'mcq','section':section,'title':title,'prompt':prompt,'options':options,'correct':correct,'feedback':feedback,'review':review,'source':b(*ids),'outcome':'1.1' if skill=='diagram' or skill=='structure' else '1.2','skill':skill,'mode':mode}
 if picture:q['picture']=picture
 q['term_source']='B001';questions.append(q);units.append({'id':id,'type':'question','section':section,'title':title,'question':id})
mc('P01',1,'Cell membrane','Which function belongs to the cell surface membrane?',['Controlling movement into and out of the cell','Joining amino acids into polypeptides','Transferring energy into ATP','Controlling which proteins are made'],0,'The cell surface membrane controls movement into and out of the cell.',memfn,[9,20,28,34])
nuc=teach(2,'Nucleus','CHROMOSOMES AND DNA',[p(f'The {term("nucleus")} contains chromosomes. Chromosomes contain {term("DNA")}.',13,14),image('nucleus',50,56),flow(['Nucleus','Chromosomes','DNA'],['contains','contain'],13,14)])
genes=teach(2,'Genes','DNA AND PROTEINS',[p(f'{term("Genes")} are sections of DNA that {fn("code for proteins")}.',15),flow(['DNA','Genes','Proteins'],['contains','code for'],15)])
switch=teach(2,'Genes','WHICH PROTEINS ARE PRODUCED',[p(f'Which genes are {term("“switched on”")} determines which proteins are produced.',16),p('The proteins produced are therefore linked to which genes are switched on.',16),flow(['Which genes are switched on','Which proteins are produced'],['determines'],16)])
teach(2,'Proteins and enzymes','A LINK IN CELL ACTIVITY',[p(f'{term("Some proteins are enzymes")}.',17),flow(['Proteins','Enzymes'],['some are'],17)])
enzymes=teach(2,'Enzymes','CHEMICAL REACTIONS',[p(f'Which {term("enzymes")} are produced determines which chemical reactions can occur.',18),flow(['Which enzymes are produced','Which chemical reactions can occur'],['determines'],18)])
activity=teach(2,'Nucleus','CONTROL OF CELL ACTIVITIES',[p('The chemical reactions determine the activity of the cell.',19),p(f'Thus, the nucleus {fn("controls cell activities by controlling which proteins are made")}.',20)])
teach(2,'Nucleus','THE RELATIONSHIP FROM GENES TO ACTIVITY',[p('Which genes are switched on determines which proteins are produced. Some proteins are enzymes; the enzymes produced determine which reactions can occur. Those reactions determine cell activity.',16,17,18,19),flow(['Genes switched on','Proteins produced','Enzymes produced','Chemical reactions','Cell activity'],['determine','some proteins are enzymes','determine which can occur','determine'],16,17,18,19,20)])
mc('P02',2,'Genes and proteins','Which statement correctly links genes with proteins?',['Genes are sections of DNA that code for proteins.','Genes are proteins that code for DNA.','Genes join amino acids into polypeptides.','Genes control movement across the cell surface membrane.'],0,'Genes are sections of DNA that code for proteins.',genes,[9,15,34])
mc('P03',2,'Nucleus and cell activity','Which relationship explains how protein production affects cell activity?',['The enzymes produced determine which chemical reactions can occur.','The cell membrane produces the genes that code for proteins.','Ribosomes contain the chromosomes that control cell activities.','Mitochondria control which genes are switched on.'],0,'Some proteins are enzymes. Which enzymes are produced determines which chemical reactions can occur, and these reactions determine cell activity.',activity,[13,16,17,18,19,20,28,34])
teach(2,'Nuclear envelope','A BOUNDARY AROUND THE NUCLEUS',[p(f'The {term("nuclear envelope")} {fn("separates the nucleus from the cytoplasm")}.',21),p('It contains nuclear pores.',22),image('envelope',57)])
teach(2,'Nuclear pores','PASSAGE OF SUBSTANCES',[p(f'{term("Nuclear pores")} {fn("regulate passage of substances")}, including {term("mRNA")}.',23),image('pore',58)])
chrom=teach(2,'Chromosomes','DNA AND HISTONES',[p(f'Chromosomes contain DNA wrapped around proteins called {term("histones")}.',24),flow(['Chromosomes','DNA','Histones · proteins'],['contain','is wrapped around'],24)])
chromfn=teach(2,'Chromosomes','GENES CODING FOR PROTEINS',[p(f'The DNA contains {term("genes")} that {fn("code for proteins")}.',25),flow(['DNA','Genes','Proteins'],['contains','code for'],25)])
teach(2,'Chromosome structure','FURTHER CONTEXT',[p('We’ll look at chromosome structure in greater detail in the Genes, Chromosomes & DNA section.',26)])
mito=teach(3,'Mitochondria','DOUBLE MEMBRANE',[p(f'Mitochondria have a {term("double membrane")}.',29),image('mitochondrion',53)])
mitofn=teach(3,'Mitochondria','AEROBIC RESPIRATION',[p(f'Mitochondria are the {fn("site of most stages of aerobic respiration")}.',27)])
teach(3,'Mitochondria','ENERGY TRANSFER INTO ATP',[p(f'Mitochondria {fn("transfer energy into ATP")}.',28),flow(['Mitochondria','Energy transferred into ATP'],['support'],28)])
demand=teach(3,'Mitochondria','HIGH ENERGY DEMAND',[p(f'{term("Muscle cells")} and {term("sperm cells")} contain many mitochondria to {fn("supply ATP for contraction or movement")}.',30,31),flow(['Many mitochondria in muscle and sperm cells','ATP supply','Contraction or movement'],['support','is for'],31)])
teach(3,'Mitochondria','ENERGY TRANSFER',[p('Mitochondria transfer energy into ATP; they do not “make energy”.',49)])
mc('P04',3,'Mitochondria','Why do muscle cells and sperm cells contain many mitochondria?',['To supply ATP for contraction or movement','To join amino acids into polypeptides','To control movement into and out of the cell','To contain genes coding for proteins'],0,'Muscle cells and sperm cells contain many mitochondria to supply ATP for contraction or movement.',demand,[9,25,31,34])
mc('P05',3,'Mitochondria','Which structure has a double membrane and transfers energy into ATP?',['Mitochondrion','Ribosome','Cell surface membrane','Chromosome'],0,'Mitochondria have a double membrane and transfer energy into ATP.',mito,[28,29,34,9,25],skill='structure')
er=teach(4,'Endoplasmic reticulum','MEMBRANE NETWORK',[p(f'The {term("endoplasmic reticulum (ER)")} is a membrane network of channels and flattened sacs.',32),image('rough',45,55,67)])
teach(4,'Endoplasmic reticulum','FLATTENED MEMBRANE SACS',[p(f'The flattened membrane sacs are named {term("cisternae")}.',66),image('sacs',66)])
ribo=teach(4,'Ribosomes','TRANSLATION',[p(f'Ribosomes are the {fn("site of translation")}.',33)])
ribofn=teach(4,'Ribosomes','POLYPEPTIDE PRODUCTION',[p(f'Ribosomes {fn("join amino acids into polypeptides")}.',34),flow(['Amino acids','Polypeptides'],['are joined by ribosomes into'],34)])
teach(4,'Ribosomes','FREE IN THE CYTOPLASM',[p('Ribosomes are found free in the cytoplasm or attached to rough ER.',35),image('freeRibosomes',52)])
teach(4,'Ribosomes','ATTACHED TO ROUGH ER',[p('Ribosomes can be attached to rough ER. This is one of the two locations described for ribosomes.',35),image('attachedRibosomes',70)])
rough=teach(4,'Rough ER','ATTACHED RIBOSOMES',[p(f'Rough ER has {term("ribosomes attached to its surface")}.',37,39,40),image('rough',67)])
roughfn=teach(4,'Rough ER','FOLDING AND PROCESSING',[p(f'Rough ER {fn("folds/processes proteins")} for {term("secretion")} or {term("membranes")}.',43)])
teach(4,'Rough ER','TRANSPORT IN VESICLES',[p(f'Rough ER {fn("transports proteins in vesicles")}.',43),flow(['Proteins','Vesicles'],['are transported by rough ER in'],43)])
teach(4,'Endoplasmic reticulum','CONNECTION WITH THE NUCLEUS',[p('The ER is connected to the nuclear envelope.',64),image('connection',57,64)])
teach(4,'Rough ER','PROTEIN SYNTHESIS, MODIFICATION AND TRANSPORT',[p(f'Rough ER is involved in {fn("protein synthesis, modification and transport")}.',68,69),image('roughFunctions',68,69)])
teach(4,'Smooth ER','NO ATTACHED RIBOSOMES',[p(f'{term("Smooth ER")} has no ribosomes attached. Its lack of ribosomes distinguishes it from rough ER.',38,41,44,59),image('smooth',59)])
teach(4,'Endoplasmic reticulum','COMPARING RIBOSOMES',[{'type':'comparison','heading':'Ribosomes','cells':[['Rough ER','Attached to its surface'],['Smooth ER','None attached']],'source':b(36,37,38,39,40,41,65)}])
teach(4,'Endoplasmic reticulum','COMPARING THE KEY POINTS',[{'type':'comparison','heading':'Key point here','cells':[['Rough ER','Folds/processes proteins for secretion or membranes; transports them in vesicles'],['Smooth ER','No ribosomes attached']],'source':b(37,38,42,43,44)}])
teach(4,'Smooth ER','LIPID SYNTHESIS',[p(f'Smooth ER is involved in {fn("lipid synthesis")}.',60),image('smoothLipid',59,60)])
teach(4,'Smooth ER','DETOXIFICATION',[p(f'Smooth ER is involved in {fn("detoxification")}.',61),image('smoothDetox',59,61)])
teach(4,'Smooth ER','Ca²⁺ STORAGE',[p(f'Smooth ER is involved in {fn("Ca²⁺ storage")}.',62),image('smoothStorage',59,62)])
teach(4,'Endoplasmic reticulum','PROTEIN AND LIPID SYNTHESIS',[p(f'The ER is a site of {fn("protein and lipid synthesis")}.',63)])
teach(4,'Ribosomes and ER','RELATED FUNCTIONS',[p(f'Ribosomes {fn("make polypeptides")}; ER {fn("processes and transports certain proteins")}.',46,47),flow(['Ribosomes','Polypeptides'],['make'],47),flow(['ER','Certain proteins'],['processes and transports'],47)])
teach(4,'Cytoplasm','AMINO ACIDS AND tRNA',[p(f'Amino acids {fn("attach to tRNA in the cytoplasm")}, not specifically in ER.',48)])
mc('P06',4,'Protein production','Which structure joins amino acids into polypeptides?',['Ribosomes','Endoplasmic reticulum','Cell surface membrane','Nucleus'],0,'Ribosomes join amino acids into polypeptides. ER processes and transports certain proteins.',ribofn,[34,47])
def matching(id,section,title,items,choices,feedback,ids,mode='practice'):
 q={'id':id,'kind':'matching','section':section,'title':title,'items':items,'choices':choices,'feedback':feedback,'source':b(*ids),'outcome':'1.2','skill':'function','mode':mode}
 q['term_source']='B001';questions.append(q)
 if len(choices)<=4:
  for index,item in enumerate(items):units.append({'id':f'{id}.{index+1}','type':'question','section':section,'title':title,'question':id,'item':index})
 else:units.append({'id':id,'type':'question','section':section,'title':title,'question':id})
matching('P07',4,'Structures and functions',[{'term':'Ribosomes','answer':0,'review':ribofn},{'term':'Endoplasmic reticulum','answer':1,'review':roughfn},{'term':'Cell surface membrane','answer':2,'review':memfn}],['Join amino acids into polypeptides','Process and transport certain proteins','Control movement into and out of the cell','Transfer energy into ATP'],'Each structure has a distinct function in the cell.',[9,28,34,47])
teach(5,'Cell structures','DIAGRAM PRACTICE',[p('The next questions practise recognition using the diagrams in this lesson. They do not assess identification in real microscope images.',1)])
for id,view,answer,review,ids in [('P08','membrane','Cell surface membrane',mem,[54,9]),('P09','nucleus','Nucleus',nuc,[50,13]),('P10','mitochondrion','Mitochondrion',mito,[53,29]),('P11','attachedRibosomes','Ribosomes',ribofn,[70,34]),('P12','rough','Rough ER',rough,[67,40])]:
 options=['Nucleus','Ribosomes','Mitochondrion','Cell surface membrane'] if answer!='Rough ER' else ['Rough ER','Nucleus','Ribosomes','Cell surface membrane']
 mc(id,5,'Cell structures','Which name belongs to the covered label?',options,options.index(answer),{'Cell surface membrane':'The cell surface membrane controls movement into and out of the cell.','Nucleus':'The nucleus contains chromosomes.','Mitochondrion':'A mitochondrion has a double membrane.','Ribosomes':'Ribosomes join amino acids into polypeptides.','Rough ER':'Rough ER has ribosomes attached to its surface.'}[answer],review,ids,skill='diagram',picture=view)
teach(6,'Cell structure','FINAL CHECK',[p('The final check brings together structure recognition and the functions of the six specified structures.',1),p('First-attempt results and later corrections are recorded separately. Diagram questions remain separate from real-micrograph identification.',1)])
matching('F01',6,'Structure–function matching',[{'term':'Nucleus','answer':0,'review':activity},{'term':'Chromosomes','answer':1,'review':chromfn},{'term':'Mitochondria','answer':2,'review':mitofn},{'term':'Ribosomes','answer':3,'review':ribofn}],['Controls which proteins are made','Contains genes coding for proteins','Transfers energy into ATP','Joins amino acids into polypeptides','Controls movement into and out of the cell'],'The functions belong to different structures: exchange, cell control, polypeptide production and energy transfer.',[9,20,25,28,34],mode='final')
matching('F02',6,'Structure–function matching',[{'term':'Cell surface membrane','answer':0,'review':memfn},{'term':'Endoplasmic reticulum','answer':1,'review':roughfn}],['Control movement into and out of the cell','Process and transport certain proteins','Control which proteins are made','Transfer energy into ATP'],'The cell surface membrane controls movement into and out of the cell. ER processes and transports certain proteins.',[9,25,28,47],mode='final')
for id,view,answer,review,ids in [('F03','membrane','Cell surface membrane',mem,[54,9]),('F04','nucleus','Nucleus',nuc,[50,13]),('F05','rough','Rough ER',rough,[67,40])]:
 options=['Rough ER','Cell surface membrane','Nucleus','Ribosomes'];mc(id,6,'Cell structures','Which name belongs to the covered label?',options,options.index(answer),{'Cell surface membrane':'The cell surface membrane controls movement into and out of the cell.','Nucleus':'The nucleus contains chromosomes.','Rough ER':'Rough ER has ribosomes attached to its surface.'}[answer],review,ids,mode='final',skill='diagram',picture=view)
mc('F06',6,'Nucleus and cell activity','What links the enzymes produced with cell activity?',['The enzymes determine which chemical reactions can occur.','The enzymes form the cell surface membrane.','The enzymes contain the genes that code for proteins.','The enzymes join amino acids at rough ER.'],0,'Which enzymes are produced determines which chemical reactions can occur. Those reactions determine cell activity.',activity,[18,19,20,34],mode='final')
mc('F07',6,'Mitochondria','Which statement describes the role of mitochondria?',['They transfer energy into ATP.','They make energy.','They join amino acids into polypeptides.','They control which genes are switched on.'],0,'Mitochondria transfer energy into ATP; they do not “make energy”.',mitofn,[16,28,34,49],mode='final')
model={'revision':'dea7daf1-fresh','sections':sections,'units':units,'questions':questions,'outcomes':spec,'images':{'cell':{'asset':'CS-01-original.png'},'er':{'asset':'CS-02-original.png'}}}
(R/'src/lesson.json').write_text(json.dumps(model,indent=2,ensure_ascii=False)+'\n')
# Builder-only coverage and eligibility records, never embedded as a reference mode.
coverage=[]
intro={2,3,5,6,7,10,11,12,21,22,23,24,26,38,41,44,48,59,60,61,62,66}
for item in inv['items']:
 mapped=[u['id'] for u in units if u['type']=='teach' and any(item['id'] in block.get('source',[]) for block in u['blocks'])]
 if not mapped:raise ValueError('Untaught original item '+item['id']+' '+item['exact'])
 number=int(item['id'][1:]);coverage.append({'source':item['id'],'exact':item['exact'],'location':item.get('source_element') or item.get('location'),'teaching':mapped,'assessment_policy':'Supporting/introductory only; not a checkpoint target.' if number in intro else 'Only when explicitly mapped to outcome 1.1 or 1.2.','questions':[q['id'] for q in questions if item['id'] in q['source']]})
(R/'resources/coverage-and-eligibility.json').write_text(json.dumps({'input_sha256':inv['input_sha256'],'coverage':coverage,'assessments':[{'id':q['id'],'format':q['kind'],'outcome':q['outcome'],'skill':q['skill'],'source':q['source'],'eligibility':'Recognition of a reliably labelled schematic target under 1.1; not a micrograph.' if q['skill']=='diagram' else 'Structure/function relationship named by the current outcome.','correct_answers':[q['correct']] if q['kind']=='mcq' else [i['answer'] for i in q['items']]} for q in questions],'recognition_limits':{'real_micrographs':'not assessed: neither asset is a verified micrograph','chromosomes_direct_image_identification':'not assessed: no reliably labelled individual chromosome target is supplied'},'conflicts':[]},indent=2,ensure_ascii=False)+'\n')
print(f'Composed {sum(u["type"]=="teach" for u in units)} new teaching units and {len(questions)} new assessment designs; covered all {len(coverage)} inventory items.')
