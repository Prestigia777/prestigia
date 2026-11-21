#!/usr/bin/env python3
"""Génère sitemap.xml à la racine du site (hors site : ce script n'est pas publié).

Usage (à la racine) : python3 _templates/sitemap.py
Lit la balise canonical et les liens hreflang de chaque page (FR à la racine, NL/EN/DE dans nl/, en/, de/).
À relancer après tout ajout ou suppression de page, puis après node _i18n/build.js.
"""
import os, re, datetime, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXCLUS = {'Prestigia.vip_code_soucre.html', '404.html'}

def pages():
    out = []
    for d, dirs, files in os.walk(ROOT):
        rel = os.path.relpath(d, ROOT)
        dirs[:] = [x for x in dirs if not x.startswith(('_', '.')) and x not in ('js', 'images', 'node_modules')]
        for f in files:
            if f.endswith('.html') and f not in EXCLUS:
                out.append(os.path.normpath(os.path.join(rel, f)))
    return sorted(out)

def lastmod(path):
    try:
        d = subprocess.run(['git', 'log', '-1', '--format=%cs', '--', path], cwd=ROOT, capture_output=True, text=True).stdout.strip()
    except Exception:
        d = ''
    return d or datetime.date.today().isoformat()

entries = []
for p in pages():
    html = open(os.path.join(ROOT, p), encoding='utf-8').read()
    m = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    if not m or re.search(r'<meta name="robots" content="[^"]*noindex', html):
        continue
    alts = re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"', html)
    entries.append((m.group(1), alts, lastmod(p)))

lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
for loc, alts, mod in sorted(entries):
    lines.append('  <url>')
    lines.append('    <loc>%s</loc>' % loc)
    lines.append('    <lastmod>%s</lastmod>' % mod)
    for lang, href in alts:
        lines.append('    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>' % (lang, href))
    lines.append('  </url>')
lines.append('</urlset>')
open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print('sitemap.xml : %d adresses' % len(entries))
