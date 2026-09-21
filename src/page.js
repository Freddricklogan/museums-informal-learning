/* Page widgets for museums-informal-learning, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Tabs: visitor identity explorer ----
document.querySelectorAll('#idtabs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#idtabs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#identity .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- Exhibit design self-check scorer ----
const cks=document.querySelectorAll('#checklist .ck');
function scoreDesign(){
  let s=0; cks.forEach(c=>{ if(c.classList.contains('on')) s+=parseInt(c.dataset.w,10); });
  s=Math.min(100,s);
  document.getElementById('designFill').style.width=s+'%';
  const v=document.getElementById('designVerdict');
  if(s===0){v.textContent='Select qualities to score your design';v.style.color='var(--lr-muted)';}
  else if(s<35){v.textContent=s+'% — Emerging: add a clear hook & genuine interactivity';v.style.color='var(--lr-bad)';}
  else if(s<70){v.textContent=s+'% — Solid: strengthen layering, access & social use';v.style.color='var(--lr-warn)';}
  else{v.textContent=s+'% — Strong: engaging, accessible & tested with real visitors';v.style.color='var(--lr-good)';}
}
cks.forEach(c=>c.onclick=()=>{c.classList.toggle('on');scoreDesign();});
scoreDesign();

