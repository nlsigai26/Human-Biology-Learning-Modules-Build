const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://127.0.0.1:4173/');await page.evaluate(()=>localStorage.clear());await page.reload();
await page.screenshot({path:'work/overview.png',fullPage:true});
const hero=await page.locator('.hero').boundingBox();assert(hero.height<500,'Hero should keep a compact height');
await page.getByRole('button',{name:'Begin learning'}).click();
let steps=0;
while(await page.locator('.lesson-grid').count()){
 const u=await page.evaluate(()=>{const u=units(state.stage)[state.positions[state.stage]];return {kind:u.kind,q:u.quiz,s:state.stage,pos:state.positions[state.stage]}});
 if(u.kind==='teach'){
  if(u.s===0&&u.pos===1){await page.screenshot({path:'work/lesson-cell.png',fullPage:true});assert(await page.locator('.figure img').evaluate(i=>i.complete&&i.naturalWidth>0));}
 }else{
  const q=u.q;
  assert.equal(await page.locator('#feedback').count(),0,'Answers should not be revealed before an attempt');
  if(q.id==='S1'){
   await page.getByRole('button',{name:'Check my answer'}).click();await page.getByText('Make an attempt first.').waitFor();
   await page.locator('[name="answer"][value="0"]').check();await page.getByRole('button',{name:'Check my answer'}).click();
   assert(await page.locator('.feedback.wrong').count());await page.getByRole('button',{name:'Try again'}).click();
  }
  if(q.type==='mc')await page.locator(`[name="answer"][value="${q.answer}"]`).check();
  else if(q.type==='text')await page.locator('[name="answer"]').fill('  '+q.accepted[0].toUpperCase()+'  ');
  else if(q.type==='written')await page.locator('[name="answer"]').fill('The nucleus regulates protein synthesis. It controls which enzymes are made, so it controls the chemical reactions in the cell.');
  else for(let i=0;i<q.pairs.length;i++)await page.locator(`[name="pair-${i}"]`).selectOption(String(i));
  if(q.type==='match'){const order=await page.evaluate(id=>state.orders[id],q.id);assert.deepEqual([...order.rows].sort(),q.pairs.map((_,i)=>i));assert.deepEqual([...order.options].sort(),q.pairs.map((_,i)=>i));assert.notEqual(order.rows,order.options);}
  if(q.id==='S5C')await page.screenshot({path:'work/er-checkpoint.png',fullPage:true});
  await page.locator('#answerForm button[type="submit"]').click();
  assert(await page.locator('#feedback').count());
  if(q.id==='S1'){assert.match(await page.locator('#feedback').innerText(),/Corrected/);assert.deepEqual(await page.evaluate(()=>state.answers.S1.first),[false]);}
  if(q.type==='written'){await page.locator('[data-selfcheck="0"]').check();await page.locator('[data-selfcheck="1"]').check();}
 }
 await page.locator('[data-action="next"]').click();steps++;assert(steps<60);
}
const stats=await page.evaluate(()=>({final:getStats(true),practice:getStats(false),p:progress(),written:state.checks}));
assert.equal(stats.final.correct,9);assert.equal(stats.final.tried,9);assert.equal(stats.practice.correct,15);assert.equal(stats.practice.tried,16);assert.equal(stats.practice.corrected,1);assert.equal(stats.p.pct,100);assert.deepEqual(stats.written,[true,true]);
assert.match(await page.locator('main').innerText(),/Real-micrograph identification: not assessed/);
await page.screenshot({path:'work/results.png',fullPage:true});
await page.reload();assert.match(await page.locator('main').innerText(),/9 \/ 9 attempted/);
await page.locator('#referenceFooter').click();
await page.locator('#referenceDialog img').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));
await page.waitForFunction(()=>[...document.querySelectorAll('#referenceDialog img')].every(i=>i.complete&&i.naturalWidth>0));
assert.equal(await page.locator('#referenceDialog img').count(),2);
await page.getByRole('button',{name:'Close reference'}).click();
await page.getByRole('button',{name:'Practise again',exact:true}).click();
assert.equal(await page.evaluate(()=>getStats(true).correct),9);assert.equal(await page.evaluate(()=>getStats(false).tried),0);
await page.evaluate(()=>{state.screen='results';render()});await page.getByRole('button',{name:'Restart module',exact:true}).click();await page.getByRole('button',{name:'Clear progress & restart'}).click();assert.equal(await page.evaluate(()=>Object.keys(state.answers).length),0);
// Narrow screens and stable image marker locations.
await page.setViewportSize({width:390,height:844});await page.evaluate(()=>{state=fresh();state.screen='lesson';state.stage=1;state.positions[1]=4;render()});
await page.screenshot({path:'work/mobile-checkpoint.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
const marker=await page.locator('.marker').boundingBox(),fig=await page.locator('.figure').boundingBox();assert(Math.abs((marker.x+marker.width/2-fig.x)/fig.width-.747)<.02);
await page.locator('[name="answer"]').fill('cell membranee');await page.getByRole('button',{name:'Check my answer'}).click();assert(await page.locator('.feedback.wrong').count(),'Similar spelling of a wrong answer must not pass');
// Per-pair scoring: one incorrect match stays incorrect in the first attempt after correction.
await page.evaluate(()=>{state.screen='lesson';state.stage=6;state.positions[6]=0;render()});
for(let i=0;i<6;i++)await page.locator(`[name="pair-${i}"]`).selectOption(String(i===0?1:i));
await page.getByRole('button',{name:'Check my answer'}).click();assert.equal(await page.evaluate(()=>getStats(true).correct),5);await page.getByRole('button',{name:'Try again'}).click();
for(let i=0;i<6;i++)await page.locator(`[name="pair-${i}"]`).selectOption(String(i));await page.getByRole('button',{name:'Check my answer'}).click();assert.equal(await page.evaluate(()=>getStats(true).correct),5);assert.equal(await page.evaluate(()=>getStats(true).corrected),1);
assert.deepEqual(errors,[]);console.log(JSON.stringify({status:'PASS',steps,stats,checks:'Full journey, blank attempt, wrong answer, retries, case/space handling, strict answers, matching per-pair score, browser persistence, reference assets, mobile layout, marker alignment, practice reset, full restart.'},null,2));
await browser.close();
