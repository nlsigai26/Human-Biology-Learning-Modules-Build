const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
import assert from 'node:assert/strict';import fs from 'node:fs';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:1440,height:900}});const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(process.env.TEST_URL||'http://127.0.0.1:4173/');
await page.evaluate(()=>{localStorage.clear();state=blank();deck=makeDeck();render()});
const coverage=await page.evaluate(()=>({slides:lessonSlides.length,items:lessonSlides.flatMap(s=>s.coverage),missing:lessonSlides.filter(s=>!s.coverage.length).map(s=>s.id)}));assert.equal(coverage.missing.length,0);assert(coverage.items.includes('trna-cytoplasm'));assert(coverage.items.includes('image-smooth-functions'));
const layouts=[];
for(const viewport of [{width:1440,height:900},{width:1366,height:768},{width:390,height:844},{width:375,height:667},{width:360,height:740}]){
 await page.setViewportSize(viewport);
 const failures=await page.evaluate(()=>{
  state=blank();questions.flat().forEach(q=>{const n=q.type==='match'?q.pairs.length:1;state.answers[q.id]={first:Array(n).fill(false),current:Array(n).fill(false),value:q.type==='match'?Array(n).fill('0'):'attempt',attempts:1}});deck=makeDeck();
  const out=[];const check=(id)=>{const box=document.querySelector('.slide').getBoundingClientRect();const bad=[...document.querySelectorAll('.slide h1,.slide h2,.slide-copy,.anatomy-plot,.annotation-label,.figure-caption,.flow-node,.flow-link,.mindmap,.question-prompt,.answer-form,.feedback-message,.feedback-review,.score-row,.source-text,.comparison,.self-checks,.review-item,.clue-list,.results-note,.result-intro,.end-actions,.summary-list')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&(r.bottom>box.bottom+2||r.top<box.top-2||r.left<box.left-2||r.right>box.right+2)}).map(e=>({element:e.className,overflow:Math.ceil(e.getBoundingClientRect().bottom-box.bottom)}));if(bad.length)out.push({id,bad})};
  const ids=deck.map(s=>s.id);for(const id of ids){state.index=deck.findIndex(s=>s.id===id);state.mode='lesson';state.feedback=false;render();check(id);if(current().kind==='quiz'){state.feedback=true;render();check(id+':feedback')}}
  state.mode='reference';for(let i=0;i<referenceSlides.length;i++){state.referenceIndex=i;render();check('reference-'+i)}
  return out;
 });layouts.push({viewport,failures});
}
fs.writeFileSync('work/layout-audit.json',JSON.stringify(layouts,null,2));assert(layouts.every(l=>!l.failures.length),JSON.stringify(layouts.filter(l=>l.failures.length)));
await page.setViewportSize({width:1440,height:900});await page.evaluate(()=>{state=blank();deck=makeDeck();render()});
let visited=0;
while(await page.evaluate(()=>current().kind==='teach'||current().kind==='quiz')){
 const u=await page.evaluate(()=>current());
 if(u.kind==='quiz'){
  await page.locator('#answerForm button[type=submit]').click();assert(await page.locator('#answerError').innerText());assert.equal(await page.evaluate(()=>state.feedback),false);
  if(u.q.id==='S1'){
   await page.locator('[name=answer][value="0"]').check();await page.locator('#answerForm button[type=submit]').click();assert.equal(await page.evaluate(()=>state.answers.S1.first[0]),false);
   await page.locator('[data-review="cell"]').click();assert.equal(await page.evaluate(()=>current().id),'cell');await page.locator('[data-action=return]').click();assert.equal(await page.evaluate(()=>state.feedback),true);await page.locator('[data-action=retry]').click();
  }
  if(u.q.type==='mc')await page.locator(`[name=answer][value="${u.q.answer}"]`).check();
  else if(u.q.type==='text')await page.locator('[name=answer]').fill('  '+u.q.accepted.at(-1).toUpperCase()+'  ');
  else if(u.q.type==='match')await page.locator('[name=answer]').selectOption(String(u.pair));
  else await page.locator('[name=answer]').fill('The nucleus regulates protein synthesis, controlling which enzymes are made and therefore which chemical reactions occur.');
  await page.locator('#answerForm button[type=submit]').click();assert.equal(await page.evaluate(()=>state.feedback),true);
  if(u.q.id==='S1')assert.match(await page.locator('.feedback-status').innerText(),/CORRECTED/);
  if(u.q.type==='written'){await page.locator('[data-selfcheck="0"]').check();await page.locator('[data-selfcheck="1"]').check()}
 }
 await page.locator('[data-action=next]').click();visited++;assert(visited<120);
}
const result=await page.evaluate(()=>({final:stats(true),practice:stats(false),explored:explored(),checks:state.checks}));assert.equal(result.final.correct,9);assert.equal(result.final.attempted,9);assert.equal(result.practice.correct,15);assert.equal(result.practice.attempted,16);assert.equal(result.practice.corrected,1);assert.equal(result.explored.count,result.explored.total);assert.deepEqual(result.checks,[true,true]);
await page.reload();assert.equal(await page.evaluate(()=>stats(true).correct),9);assert.equal(await page.evaluate(()=>current().id),'results');
// Precise answers and navigation after an incorrect attempt.
await page.evaluate(()=>{jump('S2B');delete state.answers.S2B;delete state.drafts.S2B;render()});await page.locator('[name=answer]').fill('cell membranee');await page.locator('#answerForm button[type=submit]').click();assert.equal(await page.evaluate(()=>state.answers.S2B.current[0]),false);const before=await page.evaluate(()=>state.index);await page.locator('[data-action=next]').click();assert.equal(await page.evaluate(()=>state.index),before+1);
// Partially completed matching, one incorrect first attempt, then correction.
await page.evaluate(()=>{delete state.answers.F1;jump('F1:0')});await page.locator('select').selectOption('1');await page.locator('#answerForm button[type=submit]').click();assert.equal(await page.evaluate(()=>stats(true).attempted),4);await page.locator('[data-action=retry]').click();await page.locator('select').selectOption('0');await page.locator('#answerForm button[type=submit]').click();assert.equal(await page.evaluate(()=>stats(true).corrected),1);
// Original source images and the downloadable complete reference.
await page.locator('[data-action=reference]').click();for(const i of [2,12]){await page.evaluate(i=>{state.referenceIndex=i;render()},i);await page.waitForFunction(()=>document.querySelector('.original-image').complete&&document.querySelector('.original-image').naturalWidth>0)}
const downloadPromise=page.waitForEvent('download');await page.locator('[data-action=downloadSource]').click();const download=await downloadPromise;await download.saveAs('work/reference-offline.html');const reference=fs.readFileSync('work/reference-offline.html','utf8');assert.equal((reference.match(/src="data:image\/png;base64,/g)||[]).length,2);assert(reference.includes('Amino acids attach to tRNA'));
await page.locator('[data-action=closeReference]').click();await page.evaluate(()=>jump('finish'));await page.locator('[data-action=practice]').click();assert.equal(await page.evaluate(()=>stats(false).attempted),0);assert.equal(await page.evaluate(()=>stats(true).corrected),1);
await page.evaluate(()=>jump('finish'));await page.locator('[data-action=restart]').click();await page.locator('#confirmReset').click();assert.equal(await page.evaluate(()=>Object.keys(state.answers).length),0);
// Hover/focus/touch outline, no wheel scroll, keyboard navigation and reduced motion.
const hidden=page.locator('[data-section="3"] .outline-label');assert.equal(await hidden.evaluate(e=>getComputedStyle(e).opacity),'0');await page.locator('[data-section="3"]').focus();await page.waitForTimeout(300);assert.equal(await hidden.evaluate(e=>getComputedStyle(e).opacity),'1');await page.locator('#slideTitle').focus();const idx=await page.evaluate(()=>state.index);await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>state.index),idx+1);
await page.setViewportSize({width:390,height:844});await page.locator('[data-action=outline]').click();await page.locator('[data-section="4"]').click();assert.equal(await page.evaluate(()=>current().section),4);assert.equal(await page.evaluate(()=>state.outline),false);await page.mouse.wheel(0,1500);assert.equal(await page.evaluate(()=>scrollY),0);assert.equal(await page.evaluate(()=>document.documentElement.scrollHeight),844);
await page.emulateMedia({reducedMotion:'reduce'});await page.evaluate(()=>jump('nucleus-function'));assert.equal(await page.locator('.function').first().evaluate(e=>getComputedStyle(e).animationName),'none');
// Check identity of the labelled feature at several aspect ratios.
for(const viewport of [{width:1440,height:900},{width:390,height:844},{width:375,height:667}]){await page.setViewportSize(viewport);await page.evaluate(()=>jump('nucleus-structure'));const plot=await page.locator('.anatomy-plot').boundingBox(),image=await page.locator('.anatomy img').boundingBox();assert(Math.abs(plot.width/plot.height-1)<.01);assert(Math.abs(plot.width-image.width)<1)}
// Save clean representative screenshots; app state remains test-only browser data.
for(const [name,viewport,id] of [['preview',{width:1440,height:900},'nucleus-function'],['mindmap',{width:1440,height:900},'cell-map'],['phone',{width:390,height:844},'nucleus-structure'],['phone-small',{width:375,height:667},'cell-map']]){await page.setViewportSize(viewport);await page.evaluate(id=>{state=blank();deck=makeDeck();jump(id)},id);await page.waitForTimeout(900);await page.screenshot({path:`work/${name}.png`})}
assert.deepEqual(errors,[]);const report={status:'PASS',teachingSlides:coverage.slides,coveragePoints:coverage.items.length,learningSteps:visited,layoutViewports:layouts.map(l=>l.viewport),result,checks:['All teaching, question, incorrect-feedback, result and reference slides fit without scrolling','Full user journey','Wrong-answer review/return/retry and Next','Partial matching and per-pair first attempts','Browser persistence','Original reference images and offline source download','Touch/focus outline','Keyboard navigation','Reduced motion','Responsive annotation alignment','Practice reset and full restart']};fs.writeFileSync('resources/validation-results.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));await browser.close();
