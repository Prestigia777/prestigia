/* =====================================================================
   PRESTIGIA — petit moteur de recherche du hero (accueil)
   S'appuie sur window.PRESTIGIA_SEARCH_INDEX (js/search-index.js).
   - insensible aux majuscules et aux accents (« aeroport » trouve « aéroport ») ;
   - trouve les mots partiels (« aéro ») et tolère une petite faute de frappe ;
   - suggestions (5 au plus) au clavier (↑ ↓ Entrée, Échap) ou à la souris ;
   - Entrée / « Rechercher » : ouvre la suggestion surlignée, sinon la plus pertinente.
   ===================================================================== */
(function(){
  var form = document.querySelector('.hero-search');
  var INDEX = window.PRESTIGIA_SEARCH_INDEX;
  if(!form || !INDEX) return;
  var input = form.querySelector('input');
  var panel = form.querySelector('.hero-search-panel');
  var list = panel.querySelector('.hero-search-list');
  var empty = panel.querySelector('.hero-search-empty');
  var MAX = 5, results = [], active = -1;

  var ICONS = {
    plane:'<path d="M2.5 16.5l19-7-19-7 3 7-3 7z"/><path d="M5.5 9.5h8"/>',
    car:'<path d="M3 16v-3l2-5h14l2 5v3z"/><path d="M3 13h18"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    route:'<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2"/><path d="M3 12h18"/>',
    star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    map:'<path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    key:'<circle cx="8" cy="14" r="4"/><path d="M11 11l9-9M16 6l3 3"/>',
    sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    scale:'<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
    chat:'<path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z"/>'
  };
  function icon(name){
    return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.grid) + '</svg>';
  }

  // Texte normalisé : minuscules, sans accents ni ponctuation
  function norm(s){
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[’'`]/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
  }
  // Distance d'édition (avec inversion de deux lettres voisines), arrêt dès que max est dépassé
  function distance(a, b, max){
    if(Math.abs(a.length - b.length) > max) return max + 1;
    var prev2 = null, prev = [], cur, i, j;
    for(j = 0; j <= b.length; j++) prev[j] = j;
    for(i = 1; i <= a.length; i++){
      cur = [i];
      var rowMin = i;
      for(j = 1; j <= b.length; j++){
        var cost = a[i-1] === b[j-1] ? 0 : 1;
        var v = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + cost);
        if(prev2 && i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[j-1]) v = Math.min(v, prev2[j-2] + 1);
        cur[j] = v; if(v < rowMin) rowMin = v;
      }
      if(rowMin > max) return max + 1;
      prev2 = prev; prev = cur;
    }
    return prev[b.length];
  }

  // Préparation de l'index : phrases et mots normalisés
  var entries = INDEX.map(function(e){
    var kws = e.keywords || [];
    // « =expression » : expression entière uniquement (ses mots ne sont pas indexés séparément)
    var exact = kws.filter(function(k){ return k.charAt(0) === '='; }).map(function(k){ return norm(k.slice(1)); });
    var phrases = [e.title].concat(kws.filter(function(k){ return k.charAt(0) !== '='; })).map(norm).filter(Boolean);
    var words = {};
    phrases.forEach(function(p){ p.split(' ').forEach(function(w){ if(w.length > 1) words[w] = true; }); });
    return { data: e, phrases: phrases, exact: exact, words: Object.keys(words), boost: e.boost || 0 };
  });

  function scoreToken(tok, entry){
    var best = 0;
    for(var k = 0; k < entry.words.length; k++){
      var w = entry.words[k], s = 0;
      if(w === tok) s = 10;
      else if(tok.length >= 2 && w.indexOf(tok) === 0) s = 8;                 // mot partiel : « aero » → aeroport
      else if(tok.length >= 5 && w.indexOf(tok) > 0) s = 5;
      else if(tok.length >= 4){                                              // petite faute de frappe
        var max = tok.length >= 7 ? 2 : 1;
        if(distance(tok, w, max) <= max) s = 6;
        else if(tok.length >= 5 && w.length > tok.length && distance(tok, w.slice(0, tok.length), 1) <= 1) s = 4;   // début de mot mal tapé
      }
      if(s > best){ best = s; if(best === 10) break; }
    }
    return best;
  }
  function search(q){
    var nq = norm(q);
    if(nq.length < 2) return [];
    var toks = nq.split(' ').filter(function(t){ return t.length > 0; });
    var out = [];
    entries.forEach(function(entry){
      var total = 0, matched = 0;
      toks.forEach(function(t){ var s = scoreToken(t, entry); if(s){ matched++; total += s; } });
      var exactHit = entry.exact.some(function(p){ return p === nq || (nq.length >= 4 && p.indexOf(nq) === 0); });
      if(!matched && !exactHit) return;
      if(toks.length > 1 && matched < toks.length) total *= 0.5;            // tous les mots comptent davantage
      if(exactHit) total += 24;                                              // expression entière (« =Grand Prix ») : priorité nette
      if(entry.phrases.some(function(p){ return p === nq; })) total += 8;    // expression exacte
      else if(toks.length > 1 && entry.phrases.some(function(p){ return p.indexOf(nq) !== -1; })) total += 5;
      if(norm(entry.data.title).indexOf(nq) !== -1) total += 3;              // présent dans le titre
      total += entry.boost;
      out.push({ entry: entry.data, score: total });
    });
    out.sort(function(a, b){ return b.score - a.score; });
    if(out.length) out = out.filter(function(r){ return r.score >= out[0].score * 0.5; });   // écarte les correspondances lointaines
    return out.slice(0, MAX).map(function(r){ return r.entry; });
  }

  // ---------- Affichage ----------
  function render(){
    var q = input.value;
    results = search(q);
    active = -1;
    list.innerHTML = '';
    if(norm(q).length < 2){ close(); return; }
    if(!results.length){
      list.hidden = true; empty.hidden = false; open(); return;
    }
    empty.hidden = true; list.hidden = false;
    results.forEach(function(r, i){
      var li = document.createElement('li');
      li.id = 'heroSearchOpt' + i;
      li.className = 'hero-search-option';
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      li.innerHTML = '<span class="hero-search-ico">' + icon(r.icon) + '</span><span class="hero-search-title"></span>';
      li.querySelector('.hero-search-title').textContent = r.title;
      li.addEventListener('mousedown', function(e){ e.preventDefault(); });   // garde le focus dans le champ
      li.addEventListener('click', function(){ go(r); });
      li.addEventListener('mousemove', function(){ setActive(i); });
      list.appendChild(li);
    });
    open();
  }
  function open(){ panel.hidden = false; input.setAttribute('aria-expanded', 'true'); }
  function close(){ panel.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); active = -1; }
  function setActive(i){
    var opts = list.children;
    if(!opts.length) return;
    active = (i + opts.length) % opts.length;
    for(var k = 0; k < opts.length; k++){
      opts[k].classList.toggle('is-active', k === active);
      opts[k].setAttribute('aria-selected', k === active ? 'true' : 'false');
    }
    input.setAttribute('aria-activedescendant', opts[active].id);
  }
  function go(r){ window.location.href = r.url; }

  input.addEventListener('input', render);
  input.addEventListener('focus', function(){ if(norm(input.value).length >= 2) render(); });
  input.addEventListener('keydown', function(e){
    if(e.key === 'ArrowDown'){ e.preventDefault(); if(panel.hidden) render(); setActive(active + 1); }
    else if(e.key === 'ArrowUp'){ e.preventDefault(); setActive(active - 1); }
    else if(e.key === 'Escape'){ close(); }
  });
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!results.length || norm(input.value) !== lastQuery) { results = search(input.value); }
    if(results.length) go(results[active >= 0 ? active : 0]);
    else if(norm(input.value).length >= 2){ list.innerHTML = ''; list.hidden = true; empty.hidden = false; open(); }
    else input.focus();
  });
  var lastQuery = '';
  input.addEventListener('input', function(){ lastQuery = norm(input.value); });
  document.addEventListener('click', function(e){ if(!form.contains(e.target)) close(); });
})();
