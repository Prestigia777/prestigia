# Prestigia — site vitrine

Site vitrine statique (HTML/CSS/JS, sans build) de **Prestigia**, service de chauffeur privé et limousine premium basé à Bruxelles, opérant en Europe. Domaine : **prestigia.vip**.

- Nom de marque fixe : « Prestigia » (jamais « Prestigia Concierge »).
- Contact : info@prestigia.vip · WhatsApp / tél. +32 4 70 09 17 15 (`https://wa.me/32470091715`).
- Aperçu local : `python3 -m http.server 8080` à la racine, puis http://localhost:8080/
- Brief d'origine : `prestigia-brief-claude-code.md`. Il date d'avant la refonte : la cible de déploiement qu'il mentionne (Hostinger) est remplacée par Cloudflare Pages.

## Charte graphique

- Fond noir pur `#000000`, or `#c8a46a` (`rgb(200,164,106)`). Variables CSS dans `styles.css` (`--black`, `--gold`, `--gold-rgb`…) : toujours les utiliser, pas de couleurs en dur.
- Titres : **Playfair Display**. Corps : **Montserrat** (300 pour le texte courant). Chargées via Google Fonts.
- Style minimaliste et haut de gamme : fines lignes dorées en accent, pas d'emojis ni d'icônes tape-à-l'œil.
- Logo : SVG hébergé sur `assets.zyrosite.com` (il contient déjà « PRESTIGIA. LIMOUSINE & LUXURY SERVICES »).

## Structure

- `styles.css` : feuille de style unique, partagée par toutes les pages.
- `script.js` : JS partagé (menu, navigation mobile, etc.).
- Pages principales : `index.html`, `services.html`, `flotte.html`, `devis.html`, `contact.html`, `mentions-legales.html`.
- Services (menus « Chauffeur privé » / « Services ») : `chauffeur-prive-bruxelles`, `transfert-aeroport-and-gare`, `mise-a-disposition`, `voyages-ville-a-ville`, `international`, `espace-entreprises`, `location-de-vehicules`, `esthetique-automobile`, `service-sur-mesure`, `tours-touristiques`, `evenements` (tous en `.html` à la racine).
- Villes : `paris`, `amsterdam`, `anvers`, `gand`, `bruges` (`.html` à la racine).
- Sous-pages en dossiers (`dossier/index.html`) :
  - `evenements/` : `art-culture`, `festivals`, `galas`, `marches-de-noel`, `salons-expositions`, `sport`
  - `tours-touristiques/` : `anvers`, `bruges`, `bruxelles`, `gand`, `tourisme-de-memoire`, `autres-villes`
- `Prestigia.vip_code_soucre.html` : code source de l'ancien site (Hostinger Builder). C'est une **référence seulement** (textes, URLs d'images) : ne jamais le modifier, le publier ni s'en servir comme base de code.
- Images : locales à la racine (`.jpg`/`.webp`) et sur le CDN `assets.zyrosite.com/AR01jOEGPpI5k0KP/…`.

## Offre des tours touristiques (règles en vigueur)

Ces règles remplacent les anciennes : il n'est plus vrai que les billets d'entrée sont toujours inclus.

- **Formule A, « Transport privé »** : chauffeur et véhicule premium, dépose et reprise aux points convenus. Le client gère lui-même ses billets.
- **Formule B, « Visite clé en main »** : le transport privé, plus les billets d'entrée et les créneaux réservés et réglés par Prestigia. Seuls les repas et les dépenses personnelles restent à la charge du client.
- **Dans les deux cas** : itinéraire modifiable, livret de visite remis à chaque client, guide professionnel en option sur devis.
- **Formulations interdites** :
  - « billets d'entrée inclus », « tout est organisé et réglé par nos soins », « tout inclus », et tout ce qui laisse croire que les billets sont toujours compris.
  - Tout ce qui laisse croire que le chauffeur est guide, ou qu'une visite est « guidée » sans guide professionnel.
  - Tout ce qui laisse croire qu'un repas est inclus.
- **Formulation de référence** (textes, meta, JSON-LD) : « transport privé ou visite clé en main (billets et réservations par nos soins en option) ».
- **JSON-LD** : aucun prix, aucun billet présenté comme obligatoire.

## Gabarits réutilisables (`_templates/`, hors site)

Le site est statique, sans inclusion côté serveur : un gabarit se **copie** dans la page, en vrai HTML (pour le SEO). Les styles sont déjà dans `styles.css`. Page de référence : `tours-touristiques/gand/index.html`.

- **Bloc « Sur mesure » à deux formules** : `_templates/bloc-cle-en-main.html` (le nom du fichier est resté le même), classes `.turnkey*`.
  - C'est le **seul encart sous la carte**. Il contient l'eyebrow « Sur mesure », le H3 « Vous choisissez, nous organisons », les formules A et B côte à côte (empilées sur mobile), la ligne commune « Dans les deux cas… », le bouton « Demander ce tour » et la ligne tarif.
  - Une seule valeur change : `{{SLUG}}`, la ville dans le lien `devis.html?service=tour&ville={{SLUG}}`.
  - Optionnel : `&formule=transport` ou `&formule=cle-en-main` présélectionne la formule dans le devis.
  - Pour une page à plusieurs destinations, ajouter `&destination=<slug>` (ex. `dinant`).
  - Les villes reconnues sont listées dans `TOUR_VILLES`, dans le script en bas de `devis.html`. Il faut y ajouter toute nouvelle ville.
  - Ne pas retirer les `width`/`height` écrits sur les icônes SVG : ils les gardent à 28 px même quand la feuille de style est en cache.
  - Variante courte (une ligne + lien) : `.turnkey turnkey--inline`, utilisée sur `tours-touristiques.html`.
- **Carte-itinéraire** : `_templates/carte-itineraire.html`, classes `.itin*`. **Toutes les cartes utilisent des positions schématiques fixes**, dans un viewBox de 680 × 580 : aucune coordonnée GPS.
  - Le point 1 est en bas à gauche. Le tracé monte le long du côté gauche, traverse le haut, redescend à droite et finit en bas à droite. Le dernier point n'est jamais relié au premier.
  - Le tracé est un seul chemin en pointillés or, avec un chevron par tronçon. Une boussole discrète est en bas au centre.
  - Il n'y a pas de voiture, ni « dépose », « reprise » ou « en voiture ».
  - En bas de la carte : « Itinéraire indicatif, adaptable à votre programme » et « Schéma illustratif, hors échelle », sur un léger fond sombre.
  - Chaque étape se définit par son numéro, son nom (1 ou 2 lignes), la position du point (x, y), l'ancre du nom et le y de chaque ligne. Le squelette (7 emplacements, tracé, chevrons, boussole, texte du bas) est commun à toutes les villes : on ajoute la ville dans `VILLES` de `_templates/carte-itineraire.py` (photo, étapes, étiquettes séparées par « / »), puis on lance `python3 _templates/carte-itineraire.py <ville>` et on colle la sortie. Villes faites : Gand, Bruges, Bruxelles, Anvers. Le script écrit aussi la légende et l'`aria-label`.
  - Ajouter le JSON-LD `TouristTrip` (modèle dans le gabarit), sans mention de voiture ni de dépose. Le survol croisé fonctionne jusqu'à 8 étapes.
  - Sur mobile, sous 480 px, la carte passe en pleine largeur, et noms et pastilles grossissent : les noms font au moins 11 px à 375 px.
  - Vérifier à 1440 et à 375 px qu'aucun nom ne touche le tracé, un point ou un autre nom.
  - `_archive/projection.py` (placement par GPS) ne sert plus pour les cartes.
- **Ordre dans la section d'une page de tour** : carte + légende (`.itin`), puis bloc à deux formules, et rien d'autre.
  - L'ancien bandeau « Sur mesure » séparé a été supprimé, il ne faut pas le recréer.
  - L'ancienne ligne « Cet itinéraire est modifiable — contactez-nous… » ne doit plus être utilisée non plus.
- **Devis en mode tour** : `devis.html?service=tour&ville=…[&destination=…][&formule=transport|cle-en-main|conseil]`. L'ancien lien `?tour=…` est encore accepté.
  - Le script en bas de `devis.html` sélectionne « Tour touristique » et la ville, puis affiche le récap « Votre demande : tour privé · [ville] » avec un lien « Modifier ».
  - Les champs sont adaptés au tour : lieu de prise en charge, date souhaitée, nombre de personnes, choix **obligatoire** de la formule (3 boutons radio), case guide, « Votre projet, vos envies ». Arrivée et heure sont masquées.
  - L'objet de l'e-mail est « Demande de tour privé — [ville] — [formule] ».
  - Sans paramètre, le formulaire est inchangé.

## Cache de la feuille de style

Toute page dont on modifie les styles doit charger `styles.css?v=AAAAMMJJ[-n]`, avec un numéro incrémenté à chaque changement. Sinon les navigateurs gardent l'ancienne version. Aujourd'hui, seules la page de Gand et `tours-touristiques.html` ont ce numéro.

## Règles de travail

- **Ne modifier que ce qui est demandé.** Pas de refonte, de reformulation ou de « nettoyage » non sollicités.
- **Garder les images existantes** sauf demande contraire explicite. Ne pas renommer, déplacer ni supprimer de fichiers image.
- **Jamais d'images en base64** dans le HTML : ça a déjà tronqué des fichiers et donné des pages blanches. Toujours référencer les images par URL ou chemin.
- **URLs propres** : slugs en minuscules, avec tirets, sans accents. Pour les nouvelles sous-pages, suivre le modèle `dossier/index.html`. Liens internes cohérents (Cloudflare Pages sert `page.html` à l'adresse `/page`).
- **SEO** sur chaque page : `<title>` et `<meta name="description">` uniques, un seul `<h1>`, hiérarchie Hn logique, `alt` descriptifs, `lang="fr"`, balise canonique, balises Open Graph.
- Toute modification de la nav ou du footer s'applique à **toutes** les pages : elles sont dupliquées dans chaque fichier HTML.
- Méthode de travail préférée : itérative et visuelle. On montre le rendu et on corrige à partir des retours ou des captures.

## État actuel

### Fait
- 34 pages créées avec la charte, une nav commune (menus déroulants) et un footer commun.
- Page d'accueil : hero, section identité et stats, piliers, bloc événement, grille de destinations, avis, footer.
- Pages services, villes, événements (et leurs sous-pages), tours touristiques (et leurs sous-pages), flotte, devis, contact, mentions légales.

### Reste à faire avant publication
- [ ] **Retirer les avis clients fictifs** (`.reviews-grid` sur `index.html`). Ne pas en inventer d'autres : seuls de vrais avis pourront y figurer.
- [ ] **Retirer le sélecteur de langue** (`.lang-select` et `.mobile-lang`) sur toutes les pages : le site est en français uniquement pour l'instant.
- [ ] Créer `sitemap.xml` (URLs absolues `https://prestigia.vip/…`, sans `Prestigia.vip_code_soucre.html`).
- [ ] Créer `robots.txt` (avec le lien vers le sitemap).
- [ ] Créer la page `404.html` aux couleurs du site.
- [ ] Créer la page de politique de confidentialité et la lier depuis le footer de toutes les pages.
- [ ] Remplacer les liens des réseaux sociaux par les vrais comptes : ils pointent aujourd'hui vers les pages d'accueil génériques de Facebook, Instagram, TikTok et X.
- [ ] Publier sur **Cloudflare Pages** : exclure du déploiement `Prestigia.vip_code_soucre.html`, `prestigia-brief-claude-code.md`, `CLAUDE.md`, `.claude/`, `_templates/`, `_archive/`, les `.DS_Store` et les images sources non utilisées. Ensuite, brancher le domaine `prestigia.vip` et vérifier que la clé Google Maps (restreinte à ce domaine) fonctionne.
