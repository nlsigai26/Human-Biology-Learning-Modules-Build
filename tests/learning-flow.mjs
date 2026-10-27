import assert from 'node:assert/strict';import fs from 'node:fs';import {browser,ready,advance,findOnPages} from './browser.mjs';
const b=await browser(),p=await b.newPage({viewport:{width:1440,height:900}}),errors=[],requests=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(r.url().startsWith('http'))requests.push(r.url())});await ready(p);
await p.evaluate(()=>{localStorage.clear();state=initial();paint()});assert(await p.locator('[data-action="previous"]').isDisabled());
const textSeen=new Map();let attempted=0,masked=0;
while(await p.evaluate(()=>unit().type!=='results')){
 const u=await p.evaluate(()=>structuredClone(unit()));
 if(u.type==='teach'){
  const all=[];while(await p.evaluate(id=>state.unit===id,u.id)){all.push(await p.locator('#slide-body').innerText());await advance(p)}textSeen.set(u.id,all.join(' '));continue;
 }
 const q=await p.evaluate(()=>structuredClone(question()));
 if(attempted===0){await p.locator('[data-action="check"]').click();assert(await p.locator('#validation').isVisible());assert.equal(await p.evaluate(()=>Object.keys(state.records).length),0);await p.locator('[data-close="validation"]').click()}
 if(q.picture){const fig=await findOnPages(p,'.figure-block');assert.equal(await fig.getAttribute('data-covered'),'true');assert(await p.locator('.target-mask').count());const alt=await p.locator('.figure-block img').getAttribute('alt');assert.equal(alt,'Diagram with answer-revealing labels covered.');masked++}
 if(q.kind==='matching'&&q.choices.length>4){
  await p.locator('[data-action="check"]').click();assert(await p.locator('#validation').isVisible());await p.locator('[data-close="validation"]').click();
  for(let i=0;i<q.items.length;i++){const c=await findOnPages(p,`[data-choice="${q.items[i].answer}"]`);await c.click();await(await findOnPages(p,`[data-slot="${i}"]`)).click()}
 }else{
  const correct=q.kind==='mcq'?q.correct:q.items[u.item].answer;const chosen=attempted===0?(correct+1)%(q.options||q.choices).length:correct;
  const radio=await findOnPages(p,`input[value="${chosen}"]`);await radio.check();
  if(attempted===0){await radio.press('ArrowRight');assert.equal(await p.evaluate(()=>state.unit),u.id);await radio.check()}
 }
 await p.locator('[data-action="check"]').click();assert.equal(await p.evaluate(()=>state.phase),'feedback');attempted++;
 if(attempted===1){
  assert.equal(await p.evaluate(()=>state.records[unit().id].first[0]),false);
  const review=await findOnPages(p,'[data-jump]');await review.click();assert(await p.locator('[data-action="return"]').isVisible());await p.locator('[data-action="return"]').click();assert.equal(await p.evaluate(()=>state.unit),u.id);
  await p.locator('.footer [data-action="retry"]').click();await(await findOnPages(p,`input[value="${q.correct}"]`)).check();await p.locator('[data-action="check"]').click();assert.deepEqual(await p.evaluate(()=>state.records[unit().id].first),[false]);assert.deepEqual(await p.evaluate(()=>state.records[unit().id].current),[true]);
 }
 if(q.picture){await findOnPages(p,'.figure-block');assert.equal(await p.locator('.figure-block').getAttribute('data-covered'),'false');assert.equal(await p.locator('.target-mask').count(),0)}
 while(await p.evaluate(id=>state.unit===id,u.id))await advance(p);
}
assert.equal(textSeen.size,53);const stats=await p.evaluate(()=>({practice:resultStats('practice'),final:resultStats('final')}));assert.deepEqual(stats,{practice:{available:14,attempted:14,first:13,corrected:1},final:{available:11,attempted:11,first:11,corrected:0}});assert.equal(masked,8);
// Every written teaching block survives pagination verbatim (normalise whitespace only).
const missing=await p.evaluate(seen=>{const normal=s=>s.replace(/\s+/g,' ').trim();return base.filter(u=>u.type==='teach').flatMap(u=>u.blocks.filter(b=>b.type==='text').flatMap(block=>{const d=document.createElement('div');d.innerHTML=block.html;return normal(seen[u.id]).includes(normal(d.textContent))?[]:[u.id+': '+d.textContent]}))},Object.fromEntries(textSeen));assert.deepEqual(missing,[]);
await p.reload();await p.evaluate(()=>document.fonts.ready);assert.equal(await p.evaluate(()=>state.unit),'R01');assert.deepEqual(await p.evaluate(()=>resultStats('practice')),stats.practice);
await p.evaluate(()=>visit('R02'));assert((await p.locator('#slide-body').innerText()).includes('Real-micrograph identification was not assessed'));
await p.evaluate(()=>visit('R06'));await(await findOnPages(p,'[data-action="practice"]')).click();assert.equal(await p.evaluate(()=>resultStats('practice').attempted),0);assert.equal(await p.evaluate(()=>resultStats('final').attempted),11);
await p.evaluate(()=>visit('R06'));await(await findOnPages(p,'[data-action="restart"]')).click();await p.locator('#reset-now').click();assert.equal(await p.evaluate(()=>state.unit),'T001');assert.equal(await p.evaluate(()=>resultStats('final').attempted),0);
await p.locator('.outline').hover();assert.equal(await p.locator('.section-name').first().evaluate(e=>getComputedStyle(e).opacity),'1');const clearance=await p.locator('.section').evaluateAll(es=>es.every(e=>e.querySelector('.section-name').getBoundingClientRect().bottom+2<=e.querySelector('.section-line').getBoundingClientRect().top));assert(clearance);
await p.screenshot({path:'docs/preview.png'});await p.evaluate(()=>visit('T006'));await p.screenshot({path:'docs/mindmap.png'});await p.setViewportSize({width:390,height:844});await p.evaluate(()=>visit('T001'));await p.screenshot({path:'docs/phone.png'});
assert.deepEqual(errors,[]);assert(requests.every(r=>r==='http://127.0.0.1:4173/'||r.startsWith('data:')||r.endsWith('/favicon.ico')));
fs.writeFileSync('resources/learning-flow-validation.json',JSON.stringify({passed:true,teaching_units_visited:textSeen.size,question_units_attempted:attempted,image_attempts_checked:masked,scores:stats,source_text_survives_pagination:true,first_attempt_retry_persistence:true,review_returns:true,practice_reset_isolated:true,outline_clearance_at_100_percent:true,errors},null,2)+'\n');await b.close();console.log('Learning journey passed: complete teaching, attempted scores, retries, diagram masks, persistence and resets.');
