/* =====================================================================
   PRESTIGIA — recherche « intelligente » du hero (accueil)
   S'appuie sur window.PRESTIGIA_SEARCH_INDEX (js/search-index.js).
   - insensible aux majuscules et aux accents (« aeroport » trouve « aéroport ») ;
   - trouve les mots partiels (« aéro ») et tolère une petite faute de frappe ;
   - comprend une phrase complète en FR, NL, EN et DE : les petits mots (« je », « un », « pour »…)
     sont ignorés, et le moteur repère la date, l'heure, le nombre de personnes et le trajet
     (« de Bruxelles à Paris ») ;
   - raccourci : quand la phrase contient ces détails, la première suggestion ouvre directement
     le devis du bon service, pré-rempli (devis.html?service=…&date=…&heure=…&passagers=…&demande=…) ;
   - une phrase que le moteur ne relie à aucune page est proposée en « demande sur mesure » ;
   - suggestions (5 pages au plus) au clavier (↑ ↓ Entrée, Échap) ou à la souris.
   Étape 2 (plus tard, site en ligne) : quand le moteur n'est pas sûr, demander à une IA
   (fonction Netlify) — voir le point marqué « ÉTAPE 2 » plus bas.
   ===================================================================== */
(function(){
  var form = document.querySelector('.hero-search');
  var INDEX = window.PRESTIGIA_SEARCH_INDEX;
  if(!form || !INDEX) return;
  var input = form.querySelector('input');
  var panel = form.querySelector('.hero-search-panel');
  var list = panel.querySelector('.hero-search-list');
  var empty = panel.querySelector('.hero-search-empty');
  var MAX = 5, items = [], active = -1;
  var LANG = (document.documentElement.lang || 'fr').slice(0, 2).toLowerCase();
  if(!/^(fr|nl|en|de)$/.test(LANG)) LANG = 'fr';
  function titleOf(e){ return (e.t && e.t[LANG]) || e.title; }   // titre dans la langue de la page

  // Textes affichés par ce script, dans les 4 langues
  var TXT = {
    fr: { quote: 'Devis pré-rempli', custom: 'Envoyer cette demande', customSub: 'Devis sur mesure, réponse rapide', pax: function(n){ return n + (n > 1 ? ' personnes' : ' personne'); }, at: 'à' },
    nl: { quote: 'Ingevulde offerte', custom: 'Deze aanvraag versturen', customSub: 'Offerte op maat, snel antwoord', pax: function(n){ return n + (n > 1 ? ' personen' : ' persoon'); }, at: 'om' },
    en: { quote: 'Pre-filled quote', custom: 'Send this request', customSub: 'Bespoke quote, quick reply', pax: function(n){ return n + (n > 1 ? ' people' : ' person'); }, at: 'at' },
    de: { quote: 'Vorausgefülltes Angebot', custom: 'Diese Anfrage senden', customSub: 'Individuelles Angebot, schnelle Antwort', pax: function(n){ return n + (n > 1 ? ' Personen' : ' Person'); }, at: 'um' }
  }[LANG];
  var LOCALE = { fr: 'fr-BE', nl: 'nl-BE', en: 'en-GB', de: 'de-DE' }[LANG];

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

  // Sans accents, en minuscules (ponctuation conservée : sert à repérer dates et heures)
  function lite(s){ return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  // Texte normalisé : minuscules, sans accents ni ponctuation
  function norm(s){
    return lite(s).replace(/[’'`]/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
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

  // ---------- Petits mots ignorés dans une phrase (FR, NL, EN, DE) ----------
  var STOP = {};
  ('je j moi me m veux voudrais voudrait souhaite souhaiterais besoin cherche aimerais faut il ya avoir ai a as avons est suis sommes etre faire aller partir ' +
   'un une des de d du le la les l au aux en et ou mon ma mes notre nos votre vos nous vous on elle ils se sa son ses ce cet cette ces qui que quoi quel quelle ' +
   'pour par avec sans sur dans chez vers depuis jusqu a puis aussi tres plus svp merci bonjour bonsoir salut possible prendre emmener conduire chercher ' +
   'ik mij wil wilt graag zou willen nodig zoek zoeken moet moeten een het van voor met zonder naar op om aan bij uit tot en of mijn ons onze uw jullie wij we u is ben zijn hebben heb er dat die dit wat hoe kan kunnen alstublieft aub bedankt hallo ' +
   'i me my want wants would like need needs looking look an the to for with without from into at and or our we you is am are be have has get take please thanks hello hi can could some ' +
   'ich mich mir will mochte moechte brauche brauchen suche suchen ein eine einen einem einer der die das den dem des fur fuer mit ohne nach zum zur bei aus und oder mein meine unser wir sie ist bin sind haben habe gibt bitte danke hallo kann konnen ' +
   'in im ins auf an of by this that next prochain prochaine volgende nachste naechste'
  ).split(' ').forEach(function(w){ STOP[w] = true; });

  // ---------- Compréhension : date, heure, personnes, trajet ----------
  var DAYS = { dimanche:0, lundi:1, mardi:2, mercredi:3, jeudi:4, vendredi:5, samedi:6,
    zondag:0, maandag:1, dinsdag:2, woensdag:3, donderdag:4, vrijdag:5, zaterdag:6,
    sunday:0, monday:1, tuesday:2, wednesday:3, thursday:4, friday:5, saturday:6,
    sonntag:0, montag:1, dienstag:2, mittwoch:3, donnerstag:4, freitag:5, samstag:6 };
  var MONTHS = { janvier:1, fevrier:2, mars:3, avril:4, mai:5, juin:6, juillet:7, aout:8, septembre:9, octobre:10, novembre:11, decembre:12,
    januari:1, februari:2, maart:3, april:4, mei:5, juni:6, juli:7, augustus:8, oktober:10,
    january:1, february:2, march:3, may:5, june:6, july:7, august:8, september:9, october:10, november:11, december:12,
    januar:1, februar:2, marz:3, maerz:3, dezember:12,
    jan:1, janv:1, feb:2, fev:2, fevr:2, febr:2, mar:3, apr:4, avr:4, jun:6, jul:7, juil:7, aug:8, sep:9, sept:9, oct:10, okt:10, nov:11, dec:12, dez:12 };
  var NUMS = { un:1, une:1, deux:2, trois:3, quatre:4, cinq:5, six:6, sept:7, huit:8, neuf:9, dix:10,
    een:1, twee:2, drie:3, vier:4, vijf:5, zes:6, zeven:7, acht:8, negen:9, tien:10,
    one:1, two:2, three:3, four:4, five:5, seven:7, eight:8, nine:9, ten:10,
    ein:1, eine:1, zwei:2, funf:5, fuenf:5, sechs:6, sieben:7, neun:9, zehn:10 };
  var PEOPLE = '(?:personnes?|pers|passagers?|pax|adultes?|people|persons?|passengers?|guests?|adults?|personen|passagiers|gasten|reizigers|volwassenen|gaste|erwachsene)';
  var MONTH_RE = Object.keys(MONTHS).sort(function(a, b){ return b.length - a.length; }).join('|');
  var NUM_RE = Object.keys(NUMS).join('|');

  function pad(n){ return (n < 10 ? '0' : '') + n; }
  function iso(d){ return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today(){ var d = new Date(); d.setHours(12, 0, 0, 0); return d; }
  function makeDate(day, month, year){
    var t = today(), y = year ? (year < 100 ? 2000 + year : year) : t.getFullYear();
    var d = new Date(y, month - 1, day, 12);
    if(d.getMonth() !== month - 1) return null;                      // 31 février…
    if(!year && d < t) d.setFullYear(y + 1);                          // date passée sans année : l'an prochain
    return d;
  }

  // Renvoie { date, time, pax, from, to, rest } ; rest = la phrase sans les détails reconnus
  function understand(q){
    var s = ' ' + lite(q).replace(/[’`]/g, "'") + ' ', m, out = {};
    function cut(re){ s = s.replace(re, ' '); }

    // Trajet « de X à Y » (texte d'origine, pour garder majuscules et accents)
    var raw = ' ' + String(q).replace(/[’`]/g, "'") + ' ';
    var tr = raw.match(/\s(?:de|depuis|du|des|van|vanaf|vanuit|from|von|ab)\s+((?:[^\s,.;!?]+\s+){0,3}?[^\s,.;!?]+)\s+(?:a|à|au|aux|vers|jusqu'?à|naar|to|nach|bis|tot)\s+((?:[^\s,.;!?]+\s+){0,3}?[^\s,.;!?]+)(?=\s+(?:le|la|les|ce|cette|demain|aujourd'hui|ce|op|om|on|at|am|um|morgen|tomorrow|today|tonight|vandaag|heute|pour|voor|for|für|fur|avec|met|with|mit|en|in|\d)|[,.;!?]|\s*$)/i)
          || raw.match(/\s([^\s,.;!?\d][^,.;!?\d→>]{1,30}?)\s*(?:→|->|>|–|—)\s*([^\s,.;!?\d][^,.;!?\d]{1,30}?)(?=\s+\d|[,.;!?]|\s*$)/);
    if(tr && !/\b(pour|aller|voor|for|f[uü]r|un|une|een|a|an|ein|eine)\b/i.test(tr[1])){ out.from = tr[1].trim(); out.to = tr[2].trim(); }

    // Personnes : « 3 personnes », « 4 pax », « deux passagers », « for 6 people »
    m = s.match(new RegExp('\\s(\\d{1,3}|' + NUM_RE + ')\\s*' + PEOPLE + '\\b'));
    if(m){ var n = /\d/.test(m[1]) ? parseInt(m[1], 10) : NUMS[m[1]]; if(n >= 1 && n <= 60){ out.pax = n; cut(m[0]); } }

    // Heure : « 6h », « 6 h 30 », « 06:30 », « 6 am », « 6 uur », « 6 Uhr », « 18u15 »
    m = s.match(/\s(?:a|vers|om|at|um|around|rond|gegen)?\s*(\d{1,2})\s*(?:h(?![a-z])|u(?![a-z])|:|uur|uhr)\s*(\d{2})?(?![\d\/.])(?!\s*(?:\/|par|per|pro)\b)/) ;
    var m2 = s.match(/\s(?:at|around)?\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);
    if(m2){ var h = parseInt(m2[1], 10) % 12 + (m2[3] === 'pm' ? 12 : 0); if(h < 24){ out.time = pad(h) + ':' + (m2[2] || '00'); cut(m2[0]); } }
    else if(m){ var hh = parseInt(m[1], 10), mm = m[2] ? parseInt(m[2], 10) : 0; if(hh < 24 && mm < 60){ out.time = pad(hh) + ':' + pad(mm); cut(m[0]); } }

    // Date
    var t = today(), d = null;
    if((m = s.match(/\s(\d{1,2})[\/.\-](\d{1,2})(?:[\/.\-](\d{2,4}))?(?=\s)/))){ d = makeDate(+m[1], +m[2], m[3] ? +m[3] : 0); }
    else if((m = s.match(new RegExp('\\s(\\d{1,2})(?:er|e|st|nd|rd|th|\\.)?\\s+(' + MONTH_RE + ')\\.?(?:\\s+(\\d{4}))?(?=\\s)')))){ d = makeDate(+m[1], MONTHS[m[2]], m[3] ? +m[3] : 0); }
    else if((m = s.match(new RegExp('\\s(' + MONTH_RE + ')\\.?\\s+(\\d{1,2})(?:st|nd|rd|th)?(?:,?\\s+(\\d{4}))?(?=\\s)')))){ d = makeDate(+m[2], MONTHS[m[1]], m[3] ? +m[3] : 0); }
    else if((m = s.match(/\s(apres[\s-]demain|overmorgen|day after tomorrow|ubermorgen|uebermorgen)(?=\s)/))){ d = new Date(t); d.setDate(d.getDate() + 2); }
    else if((m = s.match(/\s(demain|morgen|tomorrow)(?=\s)/))){ d = new Date(t); d.setDate(d.getDate() + 1); }
    else if((m = s.match(/\s(aujourd'?hui|aujourd hui|ce soir|vandaag|vanavond|today|tonight|heute)(?=\s)/))){ d = new Date(t); }
    else if((m = s.match(new RegExp('\\s(' + Object.keys(DAYS).join('|') + ')(?=\\s)')))){ d = new Date(t); var add = (DAYS[m[1]] - d.getDay() + 7) % 7 || 7; d.setDate(d.getDate() + add); }
    if(d){ out.date = iso(d); out.dateObj = d; cut(m[0]); }

    out.rest = s;
    return out;
  }

  // Page trouvée → service du devis (slugs de devis.html)
  function quoteParams(url){
    var m;
    if((m = url.match(/^tours-touristiques\/([^\/]+)\//))) return 'service=tour&ville=' + m[1];
    var map = [
      [/^tours-touristiques\.html/, 'tour'], [/^transfert-aeroport/, 'transfert'], [/^chauffeur-prive/, 'chauffeur'],
      [/^mise-a-disposition/, 'mise-a-disposition'], [/^voyages-ville-a-ville|^(anvers|gand|bruges)\.html/, 'ville-a-ville'],
      [/^international|^(paris|amsterdam)\.html/, 'international'], [/^espace-entreprises/, 'entreprise'],
      [/^espace-agences/, 'agence'], [/^evenements/, 'evenement'], [/^location-de-vehicules/, 'location'],
      [/^esthetique/, 'esthetique'], [/^service-sur-mesure/, 'sur-mesure'], [/^flotte|^devis/, 'chauffeur']
    ];
    for(var i = 0; i < map.length; i++) if(map[i][0].test(url)) return 'service=' + map[i][1];
    return null;                                                       // contact, mentions légales… : pas de devis
  }
  function quoteUrl(base, u, q){
    var p = [base];
    if(u.from) p.push('from=' + encodeURIComponent(u.from));
    if(u.to) p.push('to=' + encodeURIComponent(u.to));
    if(u.date) p.push('date=' + u.date);
    if(u.time) p.push('heure=' + u.time);
    if(u.pax) p.push('passagers=' + u.pax);
    p.push('demande=' + encodeURIComponent(String(q).trim().slice(0, 300)));
    return 'devis.html?' + p.join('&');
  }
  function details(u){
    var bits = [];
    if(u.from && u.to) bits.push(u.from + ' → ' + u.to);
    if(u.dateObj) bits.push(u.dateObj.toLocaleDateString(LOCALE, { weekday: 'short', day: 'numeric', month: 'short' }));
    if(u.time) bits.push(TXT.at + ' ' + u.time);
    if(u.pax) bits.push(TXT.pax(u.pax));
    return bits.join(' · ');
  }

  // ---------- Index ----------
  var entries = INDEX.map(function(e){
    var kws = e.keywords || [];
    // « =expression » : expression entière uniquement (ses mots ne sont pas indexés séparément)
    var exact = kws.filter(function(k){ return k.charAt(0) === '='; }).map(function(k){ return norm(k.slice(1)); });
    var phrases = [e.title].concat(e.t ? [e.t.nl, e.t.en, e.t.de] : []).concat(kws.filter(function(k){ return k.charAt(0) !== '='; })).map(norm).filter(Boolean);
    var words = {};
    phrases.forEach(function(p){ p.split(' ').forEach(function(w){ if(w.length > 1) words[w] = true; }); });
    return { data: e, phrases: phrases, exact: exact, words: Object.keys(words), boost: e.boost || 0 };
  });

  // Un petit mot qui est aussi un mot-clé entier de l'index (ex. « van », le véhicule) reste cherché
  entries.forEach(function(en){ en.phrases.forEach(function(p){ if(p.length >= 3 && STOP[p]) delete STOP[p]; }); });

  // partial : le mot est peut-être en cours de frappe (dernier mot) → début de mot accepté dès 2 lettres
  function scoreToken(tok, entry, partial){
    var best = 0;
    for(var k = 0; k < entry.words.length; k++){
      var w = entry.words[k], s = 0;
      if(w === tok) s = 10;
      else if((partial ? tok.length >= 2 : tok.length >= 4) && w.indexOf(tok) === 0) s = 8;   // mot partiel : « aero » → aeroport
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
  // Renvoie { list: [{entry, score}], toks: mots utiles }
  function search(text, typed, dest){
    var nq = norm(text);
    var all = nq.split(' ').filter(Boolean);
    var toks = all.filter(function(t){ return !STOP[t] && !/^\d+$/.test(t); });
    if(!toks.length && all.length === 1 && all[0].length >= 2) toks = all;     // un seul mot tapé (« la »…) : on le garde
    if(!toks.length || nq.length < 2) return { list: [], toks: toks };
    var sentence = toks.length >= 3, out = [];
    var tail = /\s$/.test(typed) ? '' : norm(typed).split(' ').pop();      // dernier mot en cours de frappe
    var cq = toks.join(' ');
    entries.forEach(function(entry){
      var total = 0, matched = 0;
      toks.forEach(function(t){ var s = scoreToken(t, entry, t === tail); if(s){ matched++; total += s; } });
      var exactHit = entry.exact.some(function(p){ return p === cq || (cq.length >= 4 && p.indexOf(cq) === 0) || (sentence && (' ' + nq + ' ').indexOf(' ' + p + ' ') !== -1); });
      if(!matched && !exactHit) return;
      if(toks.length > 1 && matched < toks.length) total *= sentence ? 0.5 + 0.5 * matched / toks.length : 0.5;
      if(exactHit) total += 24;                                              // expression entière (« =Grand Prix ») : priorité nette
      if(entry.phrases.some(function(p){ return p === cq; })) total += 8;    // expression exacte
      else if(entry.phrases.some(function(p){ return p.indexOf(' ') !== -1 && (' ' + nq + ' ').indexOf(' ' + p + ' ') !== -1; })) total += 6;   // expression contenue dans la phrase
      if(norm(titleOf(entry.data)).indexOf(cq) !== -1) total += 3;           // présent dans le titre
      if(dest && dest.some(function(d){ return entry.words.indexOf(d) !== -1; })) total += 6;   // destination du trajet (« … nach Paris »)
      total += entry.boost;
      out.push({ entry: entry.data, score: total });
    });
    out.sort(function(a, b){ return b.score - a.score; });
    if(out.length) out = out.filter(function(r){ return r.score >= out[0].score * 0.5; });   // écarte les correspondances lointaines
    return { list: out.slice(0, MAX), toks: toks };
  }

  // Construit les suggestions : raccourci vers le devis pré-rempli (si la phrase le justifie), puis les pages
  function build(q){
    var u = understand(q);
    var r = search(u.rest, q, u.to ? norm(u.to).split(' ').filter(function(w){ return w.length > 2 && !STOP[w]; }) : null);
    var pages = r.list.map(function(x){ return { title: titleOf(x.entry), icon: x.entry.icon, url: x.entry.url }; });
    var hasDetails = !!(u.date || u.time || u.pax || (u.from && u.to));
    var out = [], best = r.list[0];
    if(best && (hasDetails || r.toks.length >= 3)){
      var qp = quoteParams(best.entry.url);
      if(qp) out.push({ title: TXT.quote + ' — ' + titleOf(best.entry), sub: details(u), icon: 'doc', url: quoteUrl(qp, u, q), shortcut: true });
    }
    // ÉTAPE 2 (IA, plus tard) : si !best (ou score faible) et que la phrase est longue, interroger ici
    // la fonction Netlify (Claude) pour choisir la page / le service, avant de proposer la demande sur mesure.
    if(!best && (hasDetails || r.toks.length >= 3)){
      out.push({ title: TXT.custom, sub: details(u) || TXT.customSub, icon: 'chat', url: quoteUrl('service=sur-mesure', u, q), shortcut: true });
    }
    return { items: out.concat(pages), direct: hasDetails && out.length > 0, words: r.toks.length };
  }

  // ---------- Affichage ----------
  var direct = false, shown = null;
  function render(){
    var q = input.value;
    shown = q;
    list.innerHTML = '';
    active = -1;
    if(norm(q).length < 2){ items = []; close(); return; }
    var b = build(q);
    items = b.items; direct = b.direct;
    if(!items.length){
      if(!b.words){ close(); return; }                                    // que des petits mots (« je veux un ») : on attend la suite
      list.hidden = true; empty.hidden = false; open(); return;
    }
    empty.hidden = true; list.hidden = false;
    items.forEach(function(r, i){
      var li = document.createElement('li');
      li.id = 'heroSearchOpt' + i;
      li.className = 'hero-search-option' + (r.shortcut ? ' hero-search-shortcut' : '');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      li.innerHTML = '<span class="hero-search-ico">' + icon(r.icon) + '</span><span class="hero-search-text"><span class="hero-search-title"></span>' + (r.sub ? '<span class="hero-search-sub"></span>' : '') + '</span>';
      li.querySelector('.hero-search-title').textContent = r.title;
      if(r.sub) li.querySelector('.hero-search-sub').textContent = r.sub;
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
  // Entrée / « Rechercher » : la suggestion surlignée ; sinon le devis pré-rempli si la phrase donne des détails
  // (date, heure, personnes, trajet), sinon la page la plus pertinente.
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(shown !== input.value) render();
    if(!items.length){ if(norm(input.value).length < 2) input.focus(); return; }
    if(active >= 0) return go(items[active]);
    var first = items[0];
    if(first.shortcut && !direct && items[1]) first = items[1];          // phrase sans détails : la page d'abord
    go(first);
  });
  document.addEventListener('click', function(e){ if(!form.contains(e.target)) close(); });
})();
