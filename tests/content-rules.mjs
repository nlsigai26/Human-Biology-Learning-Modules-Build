const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
import assert from 'node:assert/strict';import fs from 'node:fs';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox']});
const page=await browser.newPage();await page.goto(process.env.TEST_URL||'http://127.0.0.1:4173/');
const audit=await page.evaluate(()=>{
 const wording=lessonSlides.flatMap(s=>s.body).join('\n')+'\n'+JSON.stringify(questions);
 if(/cristae|according to|source says|supplied notes|original image|the notes state|read those labels/i.test(wording))throw Error('Excluded terminology or attribution in teaching');
 const commands=lessonSlides.flatMap(s=>s.body).filter(p=>/^(?:Connect|Follow|Keep|Use|Read|Explain|Describe|Compare|Locate|Observe|Make|Learn)\b/.test(p.replace(/<[^>]+>/g,'')));
 if(commands.length)throw Error('Teaching commands: '+commands.join('; '));
 let imageSlides=0,masks=0;
 for(const s of lessonSlides){jump(s.id);imageSlides+=document.querySelectorAll('.anatomy img').length;masks+=document.querySelectorAll('.label-mask').length;if(document.querySelector('.annotation-label,.quiz-marker,.anatomy svg'))throw Error('A new label or arrow was added');const figure=document.querySelector('.anatomy');if(figure&&!['originalCell','originalER'].includes(figure.dataset.originalFigure))throw Error('A replacement image was used')}
 for(const p of Object.values(figurePresets)){const [x,y,right,bottom]=p.crop;for(const l of printedLabels[p.asset]){if(p.keep!=='all'&&!p.keep.includes(l.id))continue;const [lx,ly,w,h]=l.rect;if(lx<x||ly<y||lx+w>right||ly+h>bottom)throw Error('A retained printed label was cropped: '+l.id)}}
 for(const unit of deck.filter(s=>s.kind==='quiz'&&s.q.image)){state.index=deck.findIndex(s=>s.id===unit.id);state.feedback=false;render();if(document.querySelector('.annotation-label,.quiz-marker,.anatomy svg'))throw Error('Quiz introduced a new marker');if(!document.querySelector('.label-mask'))throw Error('Quiz answer label was not covered')}
 return {teachingSlides:lessonSlides.length,imageSlides,addedLabels:0,addedArrows:0,masks,retainedLabelsFullyVisible:true,quizAnswerLabelsCovered:true,wording:'PASS'};
});
assert.equal(audit.addedLabels,0);fs.writeFileSync('resources/content-rules-audit.json',JSON.stringify(audit,null,2)+'\n');console.log(JSON.stringify(audit,null,2));await browser.close();
