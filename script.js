'use strict';

// Nihil guild homepage — static preview edition.
// To publish real announcements, update the visible card copy in index.html
// and the corresponding article content in DISPATCHES below.

const DISPATCHES = {
  welcome: {
    category: 'ANNOUNCEMENT / SAMPLE DISPATCH',
    title: 'A new home for Nihil.',
    body: `
      <p>Every guild has a story. This is the start of a place where ours can live.</p>
      <p>We built this guild hub for the things that matter: keeping in touch, sharing important updates, and remembering the moments that make the World of Twelve feel a little smaller.</p>
      <p><strong>This article is example content.</strong> Once the guild is ready, replace it with a real announcement, news, event recaps, or whatever Nihil wants its members to know.</p>
      <p>Until then: welcome to the void.</p>
    `
  },
  dungeons: {
    category: 'PLANS & RAIDS / SAMPLE DISPATCH',
    title: 'Next stop: the dungeon board.',
    body: `
      <p>Good preparation makes difficult fights easier. The idea for this section is simple: members can see the next targets, team needs, and upcoming runs in one place.</p>
      <ul><li>Dungeon goals and group compositions</li><li>Mechanics notes, builds, and strategy links</li><li>Volunteers and sign-up information (future feature)</li></ul>
      <p><strong>No dungeon dates are scheduled here yet.</strong> This is a preview of what a real Nihil planning update could look like.</p>
    `
  },
  people: {
    category: 'COMMUNITY / SAMPLE DISPATCH',
    title: 'The people behind the party.',
    body: `
      <p>Levels, builds, and achievements are fun. The people we play alongside are what make them memorable.</p>
      <p>This space could celebrate guild milestones, character spotlights, new recruits, memorable fights, and anything the Nihil community wants to share.</p>
      <p><strong>This is a sample post.</strong> Actual guild news can be added here when the site is connected to a content system.</p>
    `
  }
};

const navToggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#main-nav');
const menuIcon = navToggle?.querySelector('use');
function setMenuOpen(open) {
  if (!nav || !navToggle) return;
  nav.classList.toggle('is-open',open);
  navToggle.setAttribute('aria-expanded',String(open));
  navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  menuIcon?.setAttribute('href',open?'#ico-close':'#ico-menu');
}
navToggle?.addEventListener('click',()=>setMenuOpen(!nav.classList.contains('is-open')));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenuOpen(false)));
document.addEventListener('click',e=>{
  if (!nav?.classList.contains('is-open')) return;
  if (!e.target.closest('.site-header')) setMenuOpen(false);
});
window.addEventListener('resize',()=>{if(window.innerWidth>900)setMenuOpen(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenuOpen(false)});

// A single ticker group repeats until it fully covers even wide desktop monitors.
// Its identical second group begins right where the first ends, giving a clean loop.
const ticker = document.querySelector('#marquee-track');
const tickerSource = ticker?.innerHTML ?? '';
let oldTickerWidth = 0;
function buildTicker(){
  if (!ticker || !tickerSource) return;
  const width = window.innerWidth;
  if (Math.abs(width-oldTickerWidth)<20 && oldTickerWidth!==0) return;
  oldTickerWidth = width;
  ticker.style.animation = 'none';
  ticker.innerHTML = '';
  const first = document.createElement('div');
  first.className = 'marquee-group';
  first.setAttribute('aria-hidden','true');
  first.innerHTML = tickerSource;
  ticker.append(first);
  let loops=0;
  while(first.scrollWidth < width*1.3 && loops++<12){first.insertAdjacentHTML('beforeend',tickerSource)}
  const second = first.cloneNode(true);
  ticker.append(second);
  ticker.style.setProperty('--travel',`-${first.scrollWidth}px`);
  // Constant approximate reading speed, regardless of monitor width.
  ticker.style.animationDuration = `${Math.max(23,first.scrollWidth/48)}s`;
  void ticker.offsetWidth;
  ticker.style.animationName='marquee-travel';
}
let tickerResizeTimer;
window.addEventListener('resize',()=>{
  window.clearTimeout(tickerResizeTimer);
  tickerResizeTimer=window.setTimeout(buildTicker,160);
});
buildTicker();
document.fonts?.ready.then(()=>{oldTickerWidth=0;buildTicker()}).catch(()=>{});

// Dispatch filters + full-screen article reader; all content is hardcoded demo data.
const feed = document.querySelector('#news-feed');
const filterButtons = document.querySelectorAll('[data-filter]');
const stories = document.querySelectorAll('[data-story]');
function filterNews(filter){
  let visible=0;
  stories.forEach(story=>{
    const match = filter==='all'||story.dataset.category===filter;
    story.hidden=!match;
    if(match)visible++;
  });
  const side = document.querySelector('.news-side');
  side.hidden=![...side.querySelectorAll('[data-story]')].some(s=>!s.hidden);
  feed?.classList.toggle('is-filtered',filter!=='all');
  feed?.classList.toggle('is-single',visible===1);
  filterButtons.forEach(button=>{
    const active=button.dataset.filter===filter;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
filterButtons.forEach(button=>button.addEventListener('click',()=>filterNews(button.dataset.filter)));

const portalDialog=document.querySelector('#portal-dialog');
const storyDialog=document.querySelector('#story-dialog');
function openDialog(dialog){
  if (!dialog) return;
  setMenuOpen(false);
  if(typeof dialog.showModal==='function')dialog.showModal();
  else dialog.setAttribute('open','');
}
function closeDialog(dialog){
  if (!dialog) return;
  if(typeof dialog.close==='function')dialog.close();
  else dialog.removeAttribute('open');
}
document.querySelectorAll('[data-open-portal]').forEach(button=>button.addEventListener('click',()=>openDialog(portalDialog)));
stories.forEach(story=>story.addEventListener('click',()=>{
  const data=DISPATCHES[story.dataset.story];
  if(!data)return;
  document.querySelector('#story-dialog-tag').textContent=data.category;
  document.querySelector('#story-dialog-title').textContent=data.title;
  document.querySelector('#story-dialog-body').innerHTML=data.body;
  openDialog(storyDialog);
}));
document.querySelectorAll('[data-close-dialog]').forEach(button=>button.addEventListener('click',()=>closeDialog(button.closest('dialog'))));
document.querySelectorAll('dialog').forEach(dialog=>{
  // Clicking outside the dialog content dismisses it.
  dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog(dialog)});
});

const year=document.querySelector('#year');
if(year)year.textContent=String(new Date().getFullYear());

