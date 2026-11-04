"""Projette des coordonnées GPS (OpenStreetMap) dans le viewBox de la carte-itinéraire.

Usage : python3 _templates/projection.py
Éditer la liste POINTS ci-dessous (ordre de l'itinéraire), puis reporter les x/y dans le SVG.
Projection plate (équirectangulaire locale) : même échelle en x et en y, nord en haut.
Un point trop éloigné (ex. béguinage à Gand) se retire de la liste avec far=True :
il n'entre pas dans le calcul de l'échelle et doit être placé à la main dans sa direction réelle.
"""
import math

POINTS = [
    # (nom, latitude, longitude, far)
    ("Graslei & Korenlei", 51.05456, 3.72050, False),
    ("Groot Vleeshuis", 51.05592, 3.72168, False),
    ("Gravensteen", 51.05718, 3.72077, False),
]

# zone utile pour les centres des points dans le viewBox 620 × 660 (marge pour les labels)
BOX = (190, 90, 530, 490)  # x_min, y_min, x_max, y_max
MIN_GAP = 44  # distance minimale entre deux centres, en unités du viewBox

near = [p for p in POINTS if not p[3]]
lat0 = sum(p[1] for p in near) / len(near)
kx = 111320 * math.cos(math.radians(lat0))  # mètres par degré de longitude
ky = 111320                                  # mètres par degré de latitude
xs = [(p[2] - near[0][2]) * kx for p in near]
ys = [(near[0][1] - p[1]) * ky for p in near]
w, h = (max(xs) - min(xs)) or 1, (max(ys) - min(ys)) or 1
s = min((BOX[2] - BOX[0]) / w, (BOX[3] - BOX[1]) / h)
print(f"échelle : {s:.3f} unité/m")

pos = {}
for name, lat, lon, far in POINTS:
    mx, my = (lon - near[0][2]) * kx, (near[0][1] - lat) * ky
    x, y = BOX[0] + (mx - min(xs)) * s, BOX[1] + (my - min(ys)) * s
    pos[name] = (x, y)
    note = "  <- hors échelle : à placer à la main dans cette direction" if far else ""
    print(f"{name:40} x={x:6.0f}  y={y:6.0f}{note}")

names = [p[0] for p in near]
for i, a in enumerate(names):
    for b in names[i + 1:]:
        d = math.dist(pos[a], pos[b])
        if d < MIN_GAP:
            print(f"! {a} et {b} se chevauchent ({d:.0f}) : les écarter légèrement")
