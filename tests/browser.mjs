import {mkdirSync} from 'node:fs';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
export const url=process.env.TEST_URL||'http://127.0.0.1:4173/';
export async function browser(){mkdirSync('work',{recursive:true});return chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined,headless:true,args:['--no-sandbox']})}
export async function ready(p){await p.goto(url);await p.evaluate(()=>document.fonts.ready)}
export async function advance(p){await p.locator('[data-action="next"]').click()}
export async function findOnPages(p,selector){for(let i=0;i<100;i++){if(await p.locator(selector).count())return p.locator(selector).first();const end=await p.evaluate(()=>state.page===pages.length-1);if(end){const count=await p.evaluate(()=>state.page);if(!count)throw Error('Missing control '+selector);for(let j=0;j<count;j++)await p.locator('[data-action="previous"]').click();if(i>50)throw Error('Missing control '+selector)}else await advance(p)}throw Error('Too many pages')}
