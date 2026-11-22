/* =====================================================================
   PRESTIGIA — génération des versions NL / EN / DE (hors site, non publié)

   Usage (à la racine du site) :
     node _i18n/build.js index.html evenements/galas/index.html …
     node _i18n/build.js --all            (toutes les pages déjà traduites, voir PAGES)

   Pour chaque page française (qui reste la référence) :
   - écrit nl/<page>, en/<page>, de/<page> : textes traduits d'après les
     dictionnaires (_i18n/common.js + _i18n/pages/<page>.js), chemins des
     ressources corrigés (../), lang, canonical, hreflang, og:url, JSON-LD ;
   - met à jour la page française elle-même : canonical, hreflang et
     sélecteur de langue (FR / NL / EN / DE). Son contenu n'est pas touché.
   Tout texte visible resté en français est signalé : il manque au dictionnaire.
   ===================================================================== */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const LANGS = ['nl', 'en', 'de'];
const HTML_LANG = { fr: 'fr-BE', nl: 'nl-BE', en: 'en', de: 'de' };
const LANG_LABEL = { fr: 'Langue', nl: 'Taal', en: 'Language', de: 'Sprache' };
const SITE = 'https://prestigia.vip';

// Textes qui restent identiques dans toutes les langues (noms propres, marques…)
const KEEP = new Set(['Prestigia', 'PRESTIGIA', 'FR', 'NL', 'EN', 'DE', 'WhatsApp', 'Facebook', 'Instagram', 'TikTok', 'X',
  'info@prestigia.vip', '+32 4 70 09 17 15', 'Limousine &amp; Luxury services', 'Amsterdam', 'Brafa', 'Red Cross Ball',
  'Tomorrowland', 'Google Reviews', 'Trustpilot', 'TripAdvisor', 'G', 'TP', 'TA', 'JM', 'SL', 'AK', 'MC', 'PV', 'LR',
  'Jean-Marc D.', 'Sophie L.', 'Ahmed K.', 'Marie C.', 'Pierre V.', 'Laura R.', 'First Class', 'Van', 'Minibus', '→', '×']);

function loadDict(page){
  const dict = {}, raw = [], js = {};
  const add = (d) => {
    if(!d) return;
    Object.keys(d.seg || {}).forEach(k => { dict[norm(k)] = d.seg[k]; });
    (d.raw || []).forEach(r => raw.push(r));
  };
  add(require('./common.js'));
  // Un texte traduit sur une page sert aussi aux autres pages ; le dictionnaire de la page elle-même passe en dernier.
  const own = page.replace(/\//g, '__').replace(/\.html$/, '') + '.js';
  const dir = path.join(__dirname, 'pages');
  fs.readdirSync(dir).filter(n => n !== own && n.endsWith('.js')).forEach(n => add({ seg: require(path.join(dir, n)).seg }));
  const f = path.join(dir, own);
  if(fs.existsSync(f)){ const own = require(f); add(own); Object.keys(own.js || {}).forEach(k => { js[norm(k)] = own.js[k]; }); } else console.warn('  (pas de dictionnaire pour ' + page + ' : ' + path.relative(ROOT, f) + ')');
  return { dict, raw, js };
}
function norm(s){ return String(s).replace(/\s+/g, ' ').trim(); }
const hasWords = s => /[A-Za-zÀ-ÿ]/.test(s.replace(/&[a-z]+;|&#\d+;/g, ''));

// ---------- URL des pages ----------
function prettyPath(page, frHtml){
  const m = frHtml.match(/<link rel="canonical" href="https:\/\/prestigia\.vip\/?([^"]*)"/);
  if(m) return m[1];
  return page.replace(/index\.html$/, '').replace(/\.html$/, '');
}
const absUrl = (lang, p) => SITE + '/' + (lang === 'fr' ? '' : lang + '/') + p;
function langHref(target, page, from){
  const depth = page.split('/').length - 1 + (from === 'fr' ? 0 : 1);
  const up = '../'.repeat(depth);
  const pagePart = page.replace(/(^|\/)index\.html$/, '$1');
  if(target === 'fr') return (up + pagePart) || './';
  return up + target + '/' + pagePart;
}

// ---------- En-tête : canonical, hreflang, og:url, lang ----------
function setHead(html, page, lang, pp, eol){
  html = html.replace(/<html lang="[^"]*">/, '<html lang="' + HTML_LANG[lang] + '">');
  html = html.replace(/[ \t]*<link rel="canonical"[^>]*>\r?\n/g, '').replace(/[ \t]*<link rel="alternate" hreflang="[^"]*"[^>]*>\r?\n/g, '');
  const tags = ['<link rel="canonical" href="' + absUrl(lang, pp) + '">']
    .concat(['fr'].concat(LANGS).map(l => '<link rel="alternate" hreflang="' + l + '" href="' + absUrl(l, pp) + '">'))
    .concat(['<link rel="alternate" hreflang="x-default" href="' + absUrl('fr', pp) + '">']);
  const anchor = html.match(/<meta name="description"[^>]*>\r?\n/);
  if(anchor) html = html.replace(anchor[0], anchor[0] + tags.join(eol) + eol);
  else html = html.replace('</head>', tags.join(eol) + eol + '</head>');
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1' + absUrl(lang, pp) + '$2');
  return html;
}

// ---------- Sélecteur de langue (desktop + menu mobile) ----------
function setPills(html, page, lang){
  const all = ['fr'].concat(LANGS);
  html = html.replace(/(<div class="lang-pills"[^>]*>)([\s\S]*?)(\n([ \t]*)<\/div>)/, (m, open, inner, close, ind) => {
    const i2 = ind + '  ';
    const links = all.map(l => i2 + '<a href="' + langHref(l, page, lang) + '" lang="' + l + '" hreflang="' + l + '"' +
      (l === lang ? ' class="active" aria-current="true"' : '') + '>' + l.toUpperCase() + '</a>');
    return '<div class="lang-pills" aria-label="' + LANG_LABEL[lang] + '">' + (inner.match(/\r?\n/) || ['\n'])[0] + links.join((inner.match(/\r?\n/) || ['\n'])[0]) + close;
  });
  html = html.replace(/(<div class="mobile-lang"[^>]*>)([\s\S]*?)(\n([ \t]*)<\/div>)/, (m, open, inner, close, ind) => {
    const nl = (inner.match(/\r?\n/) || ['\n'])[0], i2 = ind + '  ';
    const links = all.map(l => i2 + '<a href="' + langHref(l, page, lang) + '" lang="' + l + '" hreflang="' + l + '"' +
      (l === lang ? ' class="active" aria-current="true"' : '') + '>' + l.toUpperCase() + '</a>');
    return '<div class="mobile-lang" aria-label="' + LANG_LABEL[lang] + '">' + nl + links.join(nl) + close;
  });
  return html;
}

// ---------- Chemins : les ressources remontent d'un dossier, les liens de pages restent dans la langue ----------
function isAsset(u){
  if(/^(https?:|mailto:|tel:|#|data:|\/\/|\/|javascript:)/i.test(u)) return false;
  const p = u.split(/[?#]/)[0];
  if(p === '' || p === '.' || p === '..' || /\/$/.test(p) || /\.html$/i.test(p)) return false;
  return true;
}
function fixPaths(tag){
  return tag.replace(/\s(href|src|srcset|imagesrcset|poster)="([^"]*)"/g, (m, attr, val) => {
    if(attr === 'srcset' || attr === 'imagesrcset') return ' ' + attr + '="' + val.split(',').map(part => {
      const t = part.trim().split(/\s+/); if(isAsset(t[0])) t[0] = '../' + t[0]; return t.join(' ');
    }).join(', ') + '"';
    return isAsset(val) ? ' ' + attr + '="../' + val + '"' : m;
  }).replace(/url\((['"]?)([^'")]+)\1\)/g, (m, q, u) => isAsset(u) ? 'url(' + q + '../' + u + q + ')' : m);
}

// ---------- Traduction ----------
function translate(html, page, lang, D, pp, missing){
  // 1) remplacements bruts (blocs à la structure particulière)
  D.raw.forEach(([fr, tr]) => {
    if(!tr[lang]) return;
    if(html.indexOf(fr) === -1){ missing.push('[raw introuvable] ' + fr.slice(0, 80)); return; }
    html = html.split(fr).join(tr[lang]);
  });
  const rawOut = D.raw.map(r => r[1][lang] || '').join(' ');
  const T = (s, where) => {
    const k = norm(s);
    if(!k || !hasWords(k) || KEEP.has(k)) return null;
    if(D.dict[k] && D.dict[k][lang] != null) return D.dict[k][lang];
    if(rawOut.indexOf(k) === -1) missing.push(where + ' ' + k);
    return null;
  };
  const tokens = html.match(/<!--[\s\S]*?-->|<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<[^>]+>|[^<]+/g);
  return tokens.map(t => {
    if(t.startsWith('<!--') || t.startsWith('<style')) return t;
    if(t.startsWith('<script')){
      const ld = t.match(/^(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)$/);
      if(ld) return ld[1] + translateJson(ld[2], lang, T, pp) + ld[3];
      const open = t.match(/^<script[^>]*>/)[0];
      return fixPaths(open) + translateJs(t.slice(open.length), lang, D);
    }
    if(t.startsWith('<')){
      let tag = fixPaths(t);
      const isMetaText = /<meta\s+(name="description"|property="og:(title|description)"|name="twitter:(title|description)")/.test(tag);
      tag = tag.replace(/\s(alt|title|aria-label|placeholder|content|data-label|data-profil)="([^"]*)"/g, (m, attr, val) => {
        if(attr === 'content' && !isMetaText) return m;
        const tr = T(val, '[' + attr + ']');
        return tr == null ? m : ' ' + attr + '="' + tr.replace(/"/g, '&quot;') + '"';
      });
      return tag;
    }
    const k = norm(t);
    const tr = T(t, '[texte]');
    if(tr == null) return t;
    const lead = /^[:,.]/.test(tr) ? '' : t.match(/^\s*/)[0], trail = t.match(/\s*$/)[0];   // « <strong>X</strong> : … » → « X: … »
    return lead + tr + trail;
  }).join('');
}
// Scripts intégrés : une chaîne '…' ou "…" dont le texte figure dans le dictionnaire « js » de la page est traduite
// (espaces, \n et ponctuation de bord conservés : 'Nom : ' → 'Name: '). Seul ce dictionnaire est utilisé,
// pour ne jamais traduire une clé technique (ex. les noms de services du devis).
function translateJs(code, lang, D){
  return code.replace(/'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g, (m, b1, b2) => {
    const q = b1 != null ? "'" : '"';
    const txt = (b1 != null ? b1 : b2).replace(/\\(['"])/g, '$1');
    const mm = txt.match(/^((?:\s|\\n|[—(\[])*)([\s\S]*?)((?:\s|\\n|[:—)\]])*)$/);
    const core = norm(mm[2]);
    if(txt === ' : ' && lang !== 'fr' && Object.keys(D.js).length) return q + ': ' + q;   // séparateur « libellé : valeur » sans espace avant
    if(!core || !D.js[core] || D.js[core][lang] == null) return m;
    let tail = mm[3];
    if(lang !== 'fr') tail = tail.replace(/^\s+:/, ':');   // « Nom : » → « Name: »
    return q + (mm[1] + D.js[core][lang] + tail).split(q).join('\\' + q) + q;
  });
}
function translateJson(src, lang, T, pp){
  let obj;
  try { obj = JSON.parse(src); } catch(e){ console.warn('  JSON-LD illisible, laissé tel quel'); return src; }
  const walk = (v, key) => {
    if(Array.isArray(v)) return v.map(x => walk(x, key));
    if(v && typeof v === 'object'){ const o = {}; Object.keys(v).forEach(k => { o[k] = walk(v[k], k); }); return o; }
    if(typeof v !== 'string') return v;
    if(key === 'inLanguage') return HTML_LANG[lang];
    if(/^(url|@id|item)$/.test(key) && /^https:\/\/prestigia\.vip/.test(v) && !/\.(jpe?g|png|webp|svg)$/i.test(v))
      return v.replace(/^https:\/\/prestigia\.vip\/?/, SITE + '/' + lang + '/');
    if(/^(https?:|mailto:|tel:)/.test(v) || key === '@type' || key === '@context') return v;
    const tr = T(v, '[json ' + key + ']');
    return tr == null ? v : tr;
  };
  const out = walk(obj);
  const multi = /\n/.test(src.trim());
  const nl = src.match(/\r?\n/) ? src.match(/\r?\n/)[0] : '\n';
  return multi ? nl + JSON.stringify(out, null, 2).replace(/\n/g, nl) + nl : nl + JSON.stringify(out) + nl;
}

// ---------- Programme ----------
function allPages(){   // toutes les pages françaises (hors dossiers internes et dossiers de langue)
  const out = [];
  const walk = (d) => fs.readdirSync(path.join(ROOT, d || '.'), { withFileTypes: true }).forEach(e => {
    const rel = d ? d + '/' + e.name : e.name;
    if(e.isDirectory()){ if(!/^(_|\.|nl$|en$|de$|images$|js$|node_modules$)/.test(e.name)) walk(rel); }
    else if(/\.html$/.test(e.name) && rel !== 'Prestigia.vip_code_soucre.html') out.push(rel);
  });
  walk('');
  return out.sort();
}
let args = process.argv.slice(2);
const DUMP = args[0] === '--dump'; if(DUMP) args = args.slice(1);   // --dump : liste seulement les textes à traduire
if(args[0] === '--all') args = allPages();
if(!args.length){ console.log('Usage : node _i18n/build.js <page.html> … | --all'); process.exit(1); }
let problems = 0;
args.forEach(page => {
  page = page.replace(/\\/g, '/');
  const frFile = path.join(ROOT, page);
  let fr = fs.readFileSync(frFile, 'utf8');
  const eol = fr.indexOf('\r\n') !== -1 ? '\r\n' : '\n';
  const pp = prettyPath(page, fr);
  const D = loadDict(page);
  // page française : en-tête et sélecteur seulement
  const frNew = setPills(setHead(fr, page, 'fr', pp, eol), page, 'fr');
  if(frNew !== fr) fs.writeFileSync(frFile, frNew, 'utf8');
  LANGS.forEach(lang => {
    const missing = [];
    let html = translate(frNew, page, lang, D, pp, missing);
    html = setPills(setHead(html, page, lang, pp, eol), page, lang);
    const out = path.join(ROOT, lang, page);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
    const uniq = Array.from(new Set(missing));
    if(DUMP){ if(lang === 'nl') uniq.forEach(m => console.log(m.replace(/^\[(texte|[a-z-]+)\] /, ''))); return; }
    console.log(lang + '/' + page + (uniq.length ? '  — ' + uniq.length + ' texte(s) non traduit(s) :' : '  — OK'));
    uniq.forEach(m => console.log('    ' + m));
    problems += uniq.length;
  });
});
process.exit(problems ? 2 : 0);
