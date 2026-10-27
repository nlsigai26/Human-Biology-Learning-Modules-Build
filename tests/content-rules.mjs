import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';import {execFileSync} from 'node:child_process';
const read=f=>JSON.parse(fs.readFileSync(f,'utf8')),lesson=read('src/lesson.json'),inventory=read('resources/source-inventory.json'),coverage=read('resources/coverage-and-eligibility.json');
const input=fs.readFileSync('resources/current-input/build-and-academic-input.html'),hash=crypto.createHash('sha256').update(input).digest('hex');assert.equal(hash,inventory.input_sha256);assert.equal(hash,coverage.input_sha256);
execFileSync('python3',['-c',`import zipfile,pathlib,hashlib
r=pathlib.Path('.')
with zipfile.ZipFile(r/'resources/current-input/academic-pack.zip') as z:
 names=z.namelist()
 html=next(n for n in names if n.endswith('.html'))
 assert z.read(html)==(r/'resources/current-input/build-and-academic-input.html').read_bytes()
 for tail,asset in [('image.png','CS-01-original.png'),('d1617f2e-35ff-463d-86a7-4d5b3301a52d.png','CS-02-original.png')]:
  n=next(n for n in names if n.endswith('/'+tail))
  assert z.read(n)==(r/'assets'/asset).read_bytes()
`]);
assert.equal(inventory.items.length,70);assert.equal(coverage.coverage.length,70);assert.deepEqual(coverage.conflicts,[]);assert.equal(lesson.outcomes,inventory.items[0].exact);
const teach=lesson.units.filter(u=>u.type==='teach'),ids=new Set(teach.map(u=>u.id));assert.equal(teach.length,53);
for(const item of inventory.items){const mapped=coverage.coverage.find(c=>c.source===item.id);assert.equal(mapped.exact,item.exact);assert(mapped.teaching.length);assert(mapped.teaching.every(id=>ids.has(id)));assert(teach.some(u=>u.blocks.some(b=>b.source?.includes(item.id))))}
for(const q of lesson.questions){assert(['mcq','matching'].includes(q.kind));assert(['1.1','1.2'].includes(q.outcome));if(q.kind==='mcq'){assert(q.options.length>=4);assert.equal(new Set(q.options).size,q.options.length);assert(q.correct>=0&&q.correct<q.options.length);assert(ids.has(q.review))}else{assert(q.choices.length>=4);assert.equal(new Set(q.choices).size,q.choices.length);assert(q.items.every(i=>i.answer>=0&&i.answer<q.choices.length&&ids.has(i.review)));assert.equal(new Set(q.items.map(i=>i.answer)).size,q.items.length)}}
for(const c of coverage.coverage.filter(c=>c.assessment_policy.startsWith('Supporting/'))){assert.deepEqual(c.questions,[],c.source+' must not be assessed')}
const player=fs.readFileSync('src/player.js','utf8'),html=fs.readFileSync('src/index.html','utf8'),model=JSON.stringify(lesson);
assert(!/<textarea|<select|type=["']text/.test(player+html));assert(!/reference|transcript|appendix|self-check/i.test(html+player));assert(!/the source says|according to the material|the notes state/i.test(model));assert(!/cristae|lysosome|Golgi|nucleolus/i.test(model));
const expected={practice:0,final:0};for(const u of lesson.units.filter(u=>u.type==='question')){const q=lesson.questions.find(q=>q.id===u.question);expected[q.mode]+=q.kind==='matching'&&q.choices.length>4?q.items.length:1}assert.deepEqual(expected,{practice:14,final:11});
const dist=fs.readFileSync('dist/index.html','utf8');assert(!/src=["']https?:|href=["']https?:|fetch\(/.test(dist));assert(dist.includes('data:image/png;base64,'));assert(dist.includes('data:font/ttf;base64,'));
fs.writeFileSync('resources/content-validation.json',JSON.stringify({passed:true,source_sha256:hash,unchanged_originals:true,inventory_items:70,teaching_units:53,assessment_designs:lesson.questions.length,auto_marked_points:expected,all_source_items_mapped:true,introductory_targets_excluded:true,no_reference_or_written_tasks:true},null,2)+'\n');console.log('Content rules: all 70 source items mapped; original inputs unchanged; 14 practice and 11 final points.');
