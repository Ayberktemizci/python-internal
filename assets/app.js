/* ============================================================================
   Kodland Python Tutor Training — shared application logic.
   Reads the per-language data in window.CONTENT (loaded by content-XX.js before
   this file). This file is identical for every language; only CONTENT differs.
   ============================================================================ */
const MODULES = CONTENT.modules;
const UI = CONTENT.ui;

// ─── THEME (shared across languages) ─────────────────────────────────────────
(function(){
  const s=localStorage.getItem('kl-theme');
  const sys=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  const t=s||sys;
  if(t==='dark') document.documentElement.setAttribute('data-theme','dark');
  setIcons(t);
})();
function setIcons(t){ document.querySelectorAll('.tbtn').forEach(b=>b.textContent=t==='dark'?'☀️':'🌙'); }
function toggleTheme(){
  const d=document.documentElement.getAttribute('data-theme')==='dark';
  const n=d?'light':'dark';
  n==='dark'?document.documentElement.setAttribute('data-theme','dark'):document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('kl-theme',n); setIcons(n);
}

// ─── APPLY STATIC UI TEXT ────────────────────────────────────────────────────
function setText(id,t){ const e=document.getElementById(id); if(e) e.textContent=t; }
function applyUI(){
  document.documentElement.lang = CONTENT.htmlLang;
  document.title = CONTENT.title;
  document.querySelectorAll('.logo-sub').forEach(e=>e.textContent=UI.logoSub);
  const h1=document.getElementById('hero-title'); if(h1) h1.innerHTML=UI.heroTitle;
  setText('hero-eyebrow', UI.heroEyebrow);
  setText('hero-sub', UI.heroSub);
  setText('prog-label', UI.progLabel);
  setText('modules-label', UI.modulesLabel);
  setText('btn-back-content', UI.backModules);
  setText('btn-exit-quiz', UI.exitQuiz);
  setText('btn-back-results', UI.backModules);
  setText('btn-back-complete', UI.backDashboard);
  setText('btn-back-dst', UI.backModules);
  setText('btn-change-region', UI.changeRegion);
}

// ─── DST (built from CONTENT.dst) ────────────────────────────────────────────
function buildDST(){
  const wrap=document.getElementById('dst-wrap');
  if(!wrap) return;
  wrap.innerHTML=CONTENT.dst.html;
  const btn=document.getElementById('dst-form-btn');
  if(!btn) return;
  if(CONTENT.dst.formUrl){
    btn.href=CONTENT.dst.formUrl; btn.target='_blank'; btn.rel='noopener noreferrer';
  } else {
    // Placeholder: region form not provided yet — disable the button and note it.
    btn.removeAttribute('href'); btn.classList.add('disabled'); btn.setAttribute('aria-disabled','true');
    if(CONTENT.dst.placeholderNote){
      const note=document.createElement('p'); note.className='dst-formnote'; note.textContent=CONTENT.dst.placeholderNote;
      btn.parentNode.appendChild(note);
    }
  }
}

// ─── PROGRESS (per language) ─────────────────────────────────────────────────
const PKEY = 'kl-py-progress-'+CONTENT.code;
const DEVKEY = 'kl-devmode-'+CONTENT.code;
function getProgress(){ try{ return JSON.parse(localStorage.getItem(PKEY)||'{}'); }catch(e){ return {}; } }
function saveProgress(p){ localStorage.setItem(PKEY, JSON.stringify(p)); }
function isPassed(id){ const p=getProgress(); return p[id]?.passed===true; }
function getScore(id){ const p=getProgress(); return p[id]?.score||0; }
function setResult(id, pct, passed){
  const p=getProgress();
  if(!p[id]?.passed || pct>(p[id]?.score||0)){ p[id]={passed,score:pct}; }
  saveProgress(p);
}

// ─── STATE ────────────────────────────────────────────────────────────────
let currentModule=null, quizData=[], qi=0, score=0;

// ─── HOME ───────────────────────────────────────────────────────────────────
function renderHome(){
  const total = MODULES.length;
  const done = MODULES.filter(m=>isPassed(m.id)).length;
  document.getElementById('pnum').textContent=done+'/'+total;
  document.getElementById('pfill').style.width=(done/total*100)+'%';
  const tag=document.getElementById('ntag');
  if(done>0){tag.style.display='inline';tag.textContent=done===total?UI.allDone:done+'/'+total+' '+UI.completeWord;}else tag.style.display='none';
  const g=document.getElementById('mgrid'); g.innerHTML='';
  MODULES.forEach((m,i)=>{
    const prev = i===0 ? true : isPassed(MODULES[i-1].id);
    const isDone = isPassed(m.id);
    const locked = !prev;
    const el=document.createElement('div');
    el.className='mc'+(locked?' locked':'')+(isDone?' done':'');
    const pct=getScore(m.id);
    let badge, stag;
    if(m.lesson){
      badge=isDone?`<span class="badge bd">${UI.badgeWatched}</span>`:locked?`<span class="badge bl">${UI.badgeLocked}</span>`:`<span class="badge btr">${UI.badgeWatch}</span>`;
      stag=isDone?`<span class="stag">${UI.tagCompleted}</span>`:locked?`<span class="stag">${UI.completeModuleWord} ${i}</span>`:`<span class="stag">${UI.tagExampleLesson}</span>`;
    } else {
      badge=isDone?`<span class="badge bd">${UI.badgePassed}</span>`:locked?`<span class="badge bl">${UI.badgeLocked}</span>`:`<span class="badge bs">${UI.badgeStart}</span>`;
      stag=isDone?`<span class="stag">${UI.scoreWord}: <b>${pct}%</b></span>`:locked?`<span class="stag">${UI.completeModuleWord} ${i}</span>`:`<span class="stag">${m.quiz.length} ${UI.questionsWord}</span>`;
    }
    el.innerHTML=`<div class="mc-stripe" style="background:${m.color}"></div>
    <div class="mc-body">
      <div class="mc-top"><div class="mc-num">${UI.moduleWord} ${m.id}</div><div class="mc-em">${m.emoji}</div></div>
      <div class="mc-title">${m.title}</div>
      <div class="mc-desc">${m.desc}</div>
      <div class="mc-foot">${badge}${stag}</div>
    </div>`;
    if(!locked) el.onclick=()=>openModule(m);
    g.appendChild(el);
  });
  // DST card — unlocks only when every module is complete
  const allDone=MODULES.every(m=>isPassed(m.id));
  const dstEl=document.createElement('div');
  dstEl.className='mc'+(allDone?'':' locked');
  dstEl.innerHTML=`<div class="mc-stripe" style="background:linear-gradient(90deg,var(--lime),var(--pink))"></div>
  <div class="mc-body">
    <div class="mc-top"><div class="mc-num">${UI.dstCardStage}</div><div class="mc-em">🏆</div></div>
    <div class="mc-title">${UI.dstCardTitle}</div>
    <div class="mc-desc">${UI.dstCardDesc}</div>
    <div class="mc-foot"><span class="badge ${allDone?'bd':'bl'}">${allDone?UI.dstReady:UI.badgeLocked}</span><span class="stag">${UI.dstCardTag}</span></div>
  </div>`;
  if(allDone) dstEl.onclick=showDST;
  g.appendChild(dstEl);
}

// ─── MODULE CONTENT ─────────────────────────────────────────────────────────
function openModule(m){
  currentModule=m.id;
  const total = MODULES.length;
  let html=`<div class="meyebrow">${UI.moduleWord} ${m.id} ${UI.ofWord} ${total}</div><div class="mh1">${m.emoji} ${m.title}</div><div class="mobj" style="border-left-color:${m.color}"><strong>${UI.objectiveWord}:</strong> ${m.obj}</div>`;
  m.sections.forEach(s=>{html+=`<div class="sch">${s.t}</div>`;s.cards.forEach(c=>{html+=rc(c);});});
  if(m.lesson){
    const done=isPassed(m.id);
    html+=`<hr class="divider"><div class="card hi"><h4>${m.completeH||UI.moduleComplete}</h4><p>${m.completeBody||''}</p></div>`;
    html+=`<button class="ctabtn" onclick="completeLesson(${m.id})">${done?UI.doneCompleted:(m.completeBtn||UI.markComplete)}</button>`;
  } else {
    const lbl=isPassed(m.id)?UI.retakeQuiz:UI.takeQuiz;
    html+=`<hr class="divider"><button class="ctabtn" onclick="startQuiz(${m.id})">${lbl}</button>`;
  }
  document.getElementById('cbody').innerHTML=html;
  showScreen('screen-content');
  window.scrollTo(0,0);
}

function completeLesson(id){
  setResult(id,100,true);
  if(MODULES.every(m=>isPassed(m.id))) showComplete(); else goHome();
}

function rc(c){
  if(c.type==='text')return`<div class="card"><h4>${c.h}</h4><p>${c.b}</p></div>`;
  if(c.type==='hi')return`<div class="card hi"><h4>${c.h}</h4><p>${c.b}</p></div>`;
  if(c.type==='warn')return`<div class="callout cw"><span class="ci">⚠️</span><span>${c.txt}</span></div>`;
  if(c.type==='tip')return`<div class="callout ct"><span class="ci">💡</span><span>${c.txt}</span></div>`;
  if(c.type==='good')return`<div class="callout cg"><span class="ci">✅</span><span>${c.txt}</span></div>`;
  if(c.type==='code')return`<div class="card codecard"><div class="clbl">${c.lbl}</div><pre>${c.code}</pre></div>`;
  if(c.type==='video'){
    if(c.file) return`<div class="video-wrap"><video controls playsinline preload="metadata"><source src="${c.file}">${c.track?`<track kind="captions" srclang="${CONTENT.code}" label="${CONTENT.htmlLang}" src="${c.track}" default>`:''}${UI.videoFallback} <a href="${c.file}">${UI.videoDownload}</a>.</video></div>${c.cap?`<p class="video-cap">${c.cap}</p>`:''}`;
    if(c.placeholder) return`<div class="video-ph"><div class="vpe">🎬</div><strong>${UI.videoPhTitle}</strong><br>${UI.videoPhBody}</div>${c.cap?`<p class="video-cap">${c.cap}</p>`:''}`;
    return`<div class="video-wrap"><iframe src="${c.src}" title="Example Lesson" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>${c.cap?`<p class="video-cap">${c.cap}</p>`:''}`;
  }
  if(c.type==='qa')return`<div class="card"><h4>${c.h}</h4><ul>${c.items.map(it=>`<li>✅ <strong>${it.k}:</strong> ${it.v}</li>`).join('')}</ul></div>`;
  if(c.type==='twocol'){
    const li=items=>items.map(i=>`<li>${i}</li>`).join('');
    return`<div class="two-col"><div class="card"><h4>${c.left.h}</h4><ul>${li(c.left.items)}</ul></div><div class="card hi"><h4 style="color:var(--hi-t)">${c.right.h}</h4><ul>${li(c.right.items)}</ul></div></div>`;
  }
  return'';
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function startQuiz(id){
  currentModule=id;
  const m=MODULES.find(x=>x.id===id);
  // Shuffle the question order AND each question's options, so the correct
  // answer is never in a fixed position. Track the correct option by value.
  quizData=shuffle(m.quiz).map(q=>{
    const correctText=q.opts[q.c];
    const opts=shuffle(q.opts);
    return {q:q.q, opts, c:opts.indexOf(correctText), fb:q.fb};
  });
  qi=0; score=0;
  renderQ(); showScreen('screen-quiz');
}
function renderQ(){
  const q=quizData[qi];
  document.getElementById('qfill').style.width=(qi/quizData.length*100)+'%';
  document.getElementById('qcount').textContent=`${UI.questionWord} ${qi+1} ${UI.ofWord} ${quizData.length}`;
  document.getElementById('qtext').textContent=q.q;
  const el=document.getElementById('qopts'); el.innerHTML='';
  q.opts.forEach((o,idx)=>{const b=document.createElement('button');b.className='qopt';b.textContent=o;b.onclick=()=>answerQ(idx);el.appendChild(b);});
  document.getElementById('qfb').className='qfb';
  document.getElementById('qnxt').className='qnxt';
}
function answerQ(idx){
  if(document.querySelector('.qopt.answered')) return;
  const q=quizData[qi]; const ok=idx===q.c;
  if(ok)score++;
  document.querySelectorAll('.qopt').forEach((b,i)=>{b.classList.add('answered');if(i===q.c)b.classList.add('correct');else if(i===idx&&!ok)b.classList.add('wrong');});
  const fb=document.getElementById('qfb');
  fb.className='qfb show '+(ok?'ok':'bad');
  fb.innerHTML=(ok?UI.correctPrefix:UI.notQuitePrefix)+q.fb;
  const nx=document.getElementById('qnxt');
  nx.className='qnxt show';
  nx.textContent=qi===quizData.length-1?UI.seeResults:UI.nextBtn;
}
function nextQ(){
  qi++;
  if(qi<quizData.length){renderQ();return;}
  const pct=Math.round(score/quizData.length*100);
  const passed=pct>=70;
  setResult(currentModule, pct, passed);
  showResults(pct, passed);
}

// ─── RESULTS ────────────────────────────────────────────────────────────────
function showResults(pct, passed){
  const m=MODULES.find(x=>x.id===currentModule);
  const next=MODULES.find(x=>x.id===m.id+1);
  let acts='';
  if(passed && next){
    const lbl=next.lesson?`${UI.watchModuleWord} ${next.id}`:`${UI.startModuleWord} ${next.id} →`;
    acts+=`<button class="bdark" onclick="openModule(MODULES.find(x=>x.id==${next.id}))">${lbl}</button>`;
  }
  if(passed && !next) acts+=`<button class="bdark" onclick="showComplete()">${UI.viewCertificate}</button>`;
  acts+=`<button class="bline" onclick="openModule(MODULES.find(x=>x.id==${m.id}))">${UI.reviewModuleWord} ${m.id}</button>`;
  acts+=`<button class="bline" onclick="startQuiz(${m.id})">${UI.retakeQuiz}</button>`;
  const rsub=UI.scoreLine.replace('{s}',score).replace('{t}',quizData.length)+(passed?UI.passMsg:UI.failMsg);
  document.getElementById('rbody').innerHTML=`<div class="remi">${passed?'🎉':'😅'}</div><div class="rtitle">${passed?UI.modulePassed:UI.keepReviewing}</div><div class="rpct ${passed?'pass':'fail'}">${pct}%</div><div class="rsub">${rsub}</div>${acts}`;
  showScreen('screen-results');
  window.scrollTo(0,0);
  setTimeout(renderHome, 100);
}

// ─── COMPLETE ─────────────────────────────────────────────────────────────
function showComplete(){
  const quizMods=MODULES.filter(m=>!m.lesson);
  const avg=Math.round(quizMods.map(m=>getScore(m.id)).reduce((a,b)=>a+b,0)/quizMods.length);
  const certLine=UI.certLine.replace('{n}',MODULES.length).replace('{avg}',avg);
  document.getElementById('compbody').innerHTML=`<div style="font-size:72px">🏆</div><h1 style="font-family:'Nunito',sans-serif;font-size:32px;font-weight:900;letter-spacing:-.5px;margin-top:14px;color:var(--text)">${UI.trainingComplete}</h1><p style="color:var(--text2);margin-top:8px;font-size:15px;line-height:1.65">${UI.completeSub}</p><div class="cert"><div class="clbl2">${UI.certLabel}</div><h2>${UI.certTitle}</h2><p>${certLine}</p><div class="cmods">${MODULES.map(m=>`<div class="cmod" style="background:${m.color}20;color:${m.color}">${m.emoji}</div>`).join('')}</div></div><button class="bdark" style="margin-bottom:10px" onclick="showDST()">${UI.takeDST}</button><button class="bline" onclick="goHome()">${UI.backDashboard2}</button>`;
  showScreen('screen-complete');
  window.scrollTo(0,0);
}

// ─── DST ────────────────────────────────────────────────────────────────────
function showDST(){ showScreen('screen-dst'); window.scrollTo(0,0); }

// ─── NAV ────────────────────────────────────────────────────────────────────
function exitQuiz(){ if(currentModule) openModule(MODULES.find(x=>x.id===currentModule)); }
function goHome(){ renderHome(); showScreen('screen-home'); window.scrollTo(0,0); }
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─── INIT ───────────────────────────────────────────────────────────────────
applyUI();
buildDST();
renderHome();
showScreen('screen-home');

// ─── DEV MODE (Shift+D × 3 to toggle — unlocks all modules) ──────────────────
(function(){
  let _dSeq = 0, _dTimer = null;
  document.addEventListener('keydown', function(e){
    if(e.key === 'D' && e.shiftKey){
      clearTimeout(_dTimer);
      _dSeq++;
      _dTimer = setTimeout(() => _dSeq = 0, 1200);
      if(_dSeq >= 3){ _dSeq = 0; toggleDevMode(); }
    }
  });
  function toggleDevMode(){
    const active = localStorage.getItem(DEVKEY) === '1';
    if(!active){
      const p = {};
      MODULES.forEach(m => { p[m.id] = { passed: true, score: 100 }; });
      saveProgress(p);
      localStorage.setItem(DEVKEY,'1');
      showDevBadge(true);
      renderHome();
      alert('🔓 Dev mode ON — all modules unlocked');
    } else {
      localStorage.removeItem(DEVKEY);
      localStorage.removeItem(PKEY);
      showDevBadge(false);
      renderHome();
      alert('🔒 Dev mode OFF — progress cleared');
    }
  }
  function showDevBadge(on){
    let b = document.getElementById('dev-badge');
    if(!b){
      b = document.createElement('div');
      b.id = 'dev-badge';
      b.style.cssText = 'position:fixed;bottom:12px;right:12px;background:#f03d9e;color:#fff;font-family:Nunito,sans-serif;font-weight:900;font-size:12px;padding:4px 10px;border-radius:20px;z-index:9999;pointer-events:none;letter-spacing:.5px';
      b.textContent = '🔓 DEV MODE';
      document.body.appendChild(b);
    }
    b.style.display = on ? 'block' : 'none';
  }
  if(localStorage.getItem(DEVKEY) === '1'){ showDevBadge(true); }
})();
