"""Génère la carte-itinéraire schématique (SVG + légende) d'une page de tour.

Usage : python3 _templates/carte-itineraire.py <ville>        (gand, bruges, bruxelles, anvers)
        puis coller la sortie dans <div class="itin">…</div> (voir _templates/carte-itineraire.html).

Squelette FIXE commun à toutes les villes, dans les unités du viewBox 680 × 580 (aucune coordonnée GPS) :
7 emplacements (SLOTS), un seul tracé en pointillés (PATH_D) qui monte à gauche, traverse le haut, redescend
à droite et finit en bas à droite (le point 7 n'est jamais relié au point 1), 6 chevrons, boussole, texte du bas.
Seuls changent d'une ville à l'autre : titre, noms, légendes, photo (et la ville du lien devis du bloc).

Une étape : nom (légende de droite), legende (sous-titre en capitales dorées), carte (étiquette en capitales,
lignes séparées par " / "). Placement des étiquettes (règle commune) :
  emplacements 1 à 4 et 6 : à gauche du point (text-anchor end, x = cx − 24), 1 ligne à cy+5, 2 lignes à cy−5 et cy+13
  emplacement 5 : au-dessus, centré, dernière ligne à y=70 ; emplacement 7 : en dessous, centré, 1re ligne à y=492.
Gand garde ses positions de référence d'origine (LABELS_Y).
"""
import html, sys

SLOTS = {1: (150, 470), 2: (178, 355), 3: (245, 245), 4: (190, 135), 5: (410, 100), 6: (450, 355), 7: (590, 450)}
PATH_D = ("M150 470 C152 425 170 395 178 355 C182 310 235 300 245 245 C255 200 180 190 190 135 "
          "C205 95 320 70 410 100 C465 118 478 250 450 355 C446 405 520 460 590 450")
ARROWS = [(162, 411, 17.6), (209, 304, 45), (217, 194, -47), (272, 91, 80), (461, 195, 172), (492, 425, 125)]
COMPASS = (330, 485, 20)
NOTES = [("Itinéraire indicatif, adaptable à votre programme", 534), ("Schéma illustratif, hors échelle", 552)]
CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1600,fit=crop/AR01jOEGPpI5k0KP/"

VILLES = {
    "gand": dict(ville="Gand", photo=CDN + "gent-LWk2NsUheqctPu4b.jpg", etapes=[
        ("Petit béguinage", "Classé UNESCO", "PETIT / BÉGUINAGE"),
        ("Graslei & Korenlei", "Quais historiques · Vue depuis le pont Saint-Michel", "GRASLEI & / KORENLEI"),
        ("Groot Vleeshuis", "Halle médiévale · Produits locaux", "GROOT / VLEESHUIS"),
        ("Château des Comtes (Gravensteen)", "Forteresse médiévale", "GRAVENSTEEN"),
        ("Patershol & Vrijdagmarkt", "Quartier médiéval", "PATERSHOL & / VRIJDAGMARKT"),
        ("Beffroi de Gand", "Classé UNESCO", "BEFFROI"),
        ("Cathédrale Saint-Bavon", "L'Agneau mystique de Van Eyck", "SAINT-BAVON"),
    ], labels_y={1: (463, 481), 3: (238, 256), 4: (140,)}),  # positions de référence d'origine
    "bruges": dict(ville="Bruges", photo=CDN + "bruges1-66aLLCaZUdOZdm1s.jpg", etapes=[
        ("Minnewater (Lac d'Amour)", "Parc romantique", "MINNE- / WATER"),  # coupé : « MINNEWATER » sort du cadre
        ("Béguinage de Bruges", "Classé UNESCO", "BÉGUINAGE"),
        ("Église Notre-Dame", "Madone de Michel-Ange", "ÉGLISE / NOTRE-DAME"),
        ("Musée Groeninge", "Primitifs flamands", "MUSÉE / GROENINGE"),
        ("Rozenhoedkaai", "Point de vue emblématique", "ROZENHOEDKAAI"),
        ("Burg & Basilique du Saint-Sang", "Relique médiévale", "BURG & BASILIQUE / DU SAINT-SANG"),
        ("Markt & Beffroi", "Beffroi classé UNESCO", "MARKT & / BEFFROI"),
    ]),
    "bruxelles": dict(ville="Bruxelles",
                      photo="https://images.pexels.com/photos/20595735/pexels-photo-20595735.jpeg?auto=compress&cs=tinysrgb&w=1600",
                      etapes=[
        ("Sablon", "Antiquaires et chocolatiers", "SABLON"),
        ("Place Royale & Mont des Arts", "Vue sur la ville", "MONT DES / ARTS"),
        ("Palais Royal & Parc de Bruxelles", "Extérieur", "PALAIS ROYAL / & PARC"),
        ("Galeries Royales Saint-Hubert", "Galeries du XIXe siècle", "GALERIES / SAINT-HUBERT"),
        ("Grand-Place", "Classée UNESCO", "GRAND-PLACE"),
        ("Manneken-Pis", "Emblème de la ville", "MANNEKEN-PIS"),
        ("Atomium", "Panorama", "ATOMIUM"),
    ]),
    "anvers": dict(ville="Anvers", photo=CDN + "antwerp3-jR1f52oUgQbEqIJo.jpg", etapes=[
        ("Gare centrale", "Chef-d'œuvre architectural", "GARE / CENTRALE"),
        ("Quartier des diamants", "Capitale du diamant", "QUARTIER / DIAMANTAIRE"),  # ni « QUARTIER DES / DIAMANTS » ni « QUARTIER / DES DIAMANTS » ne tiennent dans le cadre à 375 px
        ("Maison Rubens", "Demeure du peintre", "MAISON / RUBENS"),
        ("Cathédrale Notre-Dame", "Œuvres de Rubens", "CATHÉDRALE / NOTRE-DAME"),
        ("Grote Markt", "Maisons de guildes", "GROTE MARKT"),
        ("Musée Plantin-Moretus", "Classé UNESCO", "MUSÉE / PLANTIN-MORETUS"),
        ("MAS", "Panorama sur la ville", "MAS"),
    ]),
}


def placement(n, lines, labels_y):
    """(x, ancre, [y de chaque ligne]) de l'étiquette de l'emplacement n."""
    cx, cy = SLOTS[n]
    k = len(lines)
    if n in labels_y:
        return cx - 24, "end", list(labels_y[n])
    if n == 5:
        return cx, "middle", [70 - 18 * (k - 1 - i) for i in range(k)]
    if n == 7:
        return cx, "middle", [492 + 18 * i for i in range(k)]
    return cx - 24, "end", ([cy + 5] if k == 1 else [cy - 5, cy + 13])


def build(slug):
    c = VILLES[slug]
    esc = lambda s: html.escape(s, quote=False)
    etapes = c["etapes"]
    assert len(etapes) == 7, "7 emplacements"
    aria = (f"Carte schématique de l'itinéraire privé à {c['ville']}, en 7 étapes : "
            + " ; ".join(f"{i}, {nom.replace(' & ', ' et ')}" for i, (nom, _, _) in enumerate(etapes, 1)) + ".")
    o = []
    a = o.append
    a(f'        <figure class="itin-map" style="--itin-bg:url(\'{html.escape(c["photo"])}\')">')
    a(f'          <svg viewBox="0 0 680 580" role="img" aria-label="{html.escape(aria)}">')
    a('            <defs><filter id="itinShadow" x="-10%" y="-40%" width="120%" height="180%">'
      '<feDropShadow dx="0" dy="1" stdDeviation="1.6" flood-color="#000" flood-opacity=".85"/></filter></defs>')
    cx, cy, r = COMPASS
    a(f'            <g class="itin-compass" transform="translate({cx} {cy})" aria-hidden="true">'
      f'<circle r="{r}"/><path d="M0 -{r - 6} L4 0 L0 {r - 6} L-4 0 Z"/><text y="-{r + 6}" text-anchor="middle">N</text></g>')
    a(f'            <path class="itin-route" d="{PATH_D}"/>')
    a('            <g class="itin-arrows" aria-hidden="true">')
    for x, y, ang in ARROWS:
        a(f'              <path transform="translate({x} {y}) rotate({ang:g})" d="M-4 3 L0 -3 L4 3"/>')
    a('            </g>')
    for n, (nom, leg, carte) in enumerate(etapes, 1):
        x, y = SLOTS[n]
        lines = [l.strip() for l in carte.split("/")]
        lx, anchor, ys = placement(n, lines, c.get("labels_y", {}))
        a(f'            <g class="itin-pt" data-stop="{n}">')
        a(f'              <circle class="itin-hit" cx="{x}" cy="{y}" r="28"/>')
        a(f'              <circle class="itin-dot" cx="{x}" cy="{y}" r="16"/>')
        a(f'              <text class="itin-n" x="{x}" y="{y}">{n}</text>')
        for k, (t, ly) in enumerate(zip(lines, ys)):
            cls = "itin-label itin-label--l1" if k == 0 and len(lines) > 1 else "itin-label"
            a(f'              <text class="{cls}" x="{lx}" y="{ly}" text-anchor="{anchor}">{esc(t)}</text>')
        a('            </g>')
    a('            <rect class="itin-note-bg" x="20" y="518" width="640" height="42" rx="3"/>')
    for t, y in NOTES:
        a(f'            <text class="itin-note" x="340" y="{y}" text-anchor="middle">{esc(t)}</text>')
    a('          </svg>')
    a('        </figure>')
    a('')
    a('        <div class="itin-side">')
    a('        <ol class="itin-legend">')
    for n, (nom, leg, _) in enumerate(etapes, 1):
        a(f'          <li class="itin-stop" data-stop="{n}"><span class="itin-stop-n" aria-hidden="true">{n}</span>'
          f'<div><span class="itin-stop-name">{esc(nom)}</span><span class="itin-stop-cap">{esc(leg)}</span></div></li>')
    a('        </ol>')
    a('        </div>')
    return "\n".join(o)


if __name__ == "__main__":
    print(build(sys.argv[1] if len(sys.argv) > 1 else "gand"))
