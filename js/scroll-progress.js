/* =====================================================================
   PRESTIGIA — barre de progression du défilement (réutilisable)
   Ajoute une fine jauge en bas du header (#siteHeader) qui se remplit
   de 0 % (haut de page) à 100 % (bas de page).
   Pour l'ajouter à une autre page : charger ce script (et showroom.css,
   qui contient les styles .scroll-progress), rien d'autre à écrire.
   ===================================================================== */
(function(){
  var header = document.getElementById('siteHeader');
  if(!header || header.querySelector('.scroll-progress')) return;

  var track = document.createElement('div');
  track.className = 'scroll-progress';
  track.setAttribute('role', 'progressbar');
  track.setAttribute('aria-label', 'Progression dans la page');
  track.setAttribute('aria-valuemin', '0');
  track.setAttribute('aria-valuemax', '100');
  track.setAttribute('aria-valuenow', '0');
  var bar = document.createElement('span');
  bar.className = 'scroll-progress-bar';
  track.appendChild(bar);
  header.appendChild(track);

  var ticking = false, lastValue = -1;
  function update(){
    ticking = false;
    var doc = document.documentElement;
    var max = Math.max(1, doc.scrollHeight - window.innerHeight);
    var p = Math.min(1, Math.max(0, window.scrollY / max));
    bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';     // transform plutôt que width : pas de recalcul de mise en page
    track.classList.toggle('is-visible', p > 0);            // invisible tout en haut, apparaît dès qu'on défile
    var v = Math.round(p * 100);
    if(v !== lastValue){ lastValue = v; track.setAttribute('aria-valuenow', String(v)); }
  }
  function request(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }

  window.addEventListener('scroll', request, {passive:true});
  window.addEventListener('resize', request);
  window.addEventListener('load', request);                  // la hauteur de page change quand les images arrivent
  update();
})();
