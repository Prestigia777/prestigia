# Brief de démarrage — Site Prestigia

## Contexte
Reconstruction complète du site **prestigia.vip**, actuellement en ligne via Hostinger Website Builder (à remplacer). Objectif : un site propre, en HTML/CSS (ou stack à définir), hébergé en upload direct dans `public_html/` sur Hostinger.

Un fichier `prestigia-hostinger-source.html` (ancien code Hostinger Builder) est fourni séparément — à utiliser **uniquement** pour en extraire les URLs d'images CDN et les textes existants, pas comme base de code à reprendre.

## Marque
- **Nom** : Prestigia (fixe, ne pas changer — pas de "Prestigia Concierge")
- **Activité** : Chauffeur privé et limousine premium, basé à Bruxelles, opérant en Europe (clientèle luxe + comptes entreprises)
- **Domaine principal** : prestigia.vip
- **Logo** : contient déjà le texte "PRESTIGIA. LIMOUSINE & LUXURY SERVICES" — pas besoin de texte de nav supplémentaire
  - Fichiers logo : `Logo_BMSback_sans_fond.png` (fond transparent), `Logo_BMSblack.png` (fond noir)
  - Version SVG en ligne : `https://assets.zyrosite.com/AR01jOEGPpI5k0KP/prestigia-logo-4-x5277SOfI58rBz5C.svg`

## Charte graphique
- **Couleurs** : fond noir pur `#000000`, or `#c8a46a` / `rgb(200, 164, 106)`
- **Typographies** (Google Fonts) :
  - Titres : Playfair Display
  - Corps de texte + sous-titre logo : Montserrat, graisse 300
- **Style** : minimaliste, lignes fines dorées en accents (pas d'emojis/icônes flashy)

## Contact
- Email : info@prestigia.vip
- WhatsApp / Téléphone : +32 4 70 09 17 15
- Réseaux : Facebook, Instagram, TikTok, X (liens à récupérer dans le code source Hostinger)

## Structure de navigation (déjà définie sur le site actuel)
- **Accueil**
- **Chauffeur privé** (menu déroulant)
  - Transfert aéroport & gare
  - Voyages ville à ville
  - International
  - Mise à disposition
  - Événements
  - Espace Entreprises
  - Flotte
- **Services** (menu déroulant)
  - Location de véhicules
  - Esthétique Automobile
  - Service sur-mesure
- **Devis**
- **Contact**
- Sélecteur de langue : FR (défaut) / EN / ES / NL

## Sections de la page d'accueil (décisions déjà validées, à implémenter)
1. **Hero** : image + H1 + tagline "Limousine & Luxury services" + CTA "Recevoir un devis"
2. **Section identité** : 2 colonnes — photo card à gauche, mission + stats à droite
   - Stats à afficher : "24h/7j" et "100% Sur mesure"
3. **Section piliers** : 6 piliers avec accents de lignes fines dorées (pas d'icônes/emojis), dont "Couverture européenne — +15 pays"
4. **Bloc événement** : style magazine, Roland-Garros
5. **Grille destinations** : Paris (grande, à gauche, pleine hauteur), Amsterdam (demi-hauteur, en haut à droite), puis 3 colonnes en dessous pour Anvers, Gand, Bruges
6. **Grille avis clients** : 2×3, avec badges plateforme (Google, Trustpilot, TripAdvisor)
   - ⚠️ Avis actuellement fictifs — à remplacer par de vrais avis dès qu'ils seront disponibles
7. **Footer** : contact, réseaux sociaux, copyright

## Intégrations techniques
- **Google Maps Places Autocomplete API** : clé déjà existante, restreinte au domaine `prestigia.vip` (à réutiliser, ne pas régénérer si possible)
- Images existantes hébergées sur CDN Zyrosite : `https://assets.zyrosite.com/AR01jOEGPpI5k0KP/...`

## Contraintes techniques importantes
- ⚠️ **Ne jamais encoder d'images en base64** dans le HTML — ça a causé des troncatures de fichier et des pages blanches précédemment. Toujours héberger les images et les référencer par URL.
- Déploiement prévu : upload direct du fichier HTML dans `public_html/index.html` via le gestionnaire de fichiers Hostinger (pas de build process complexe pour l'instant)

## Style de travail préféré
- Approche itérative et visuelle : montrer le rendu, corriger par retours sur captures d'écran plutôt que par longues spécifications écrites
- Travailler section par section, en comparant au site actuel comme référence
- Référence structurelle externe (inspiration de structure uniquement, pas de copie visuelle) : privateway.be

## Pistes futures (hors scope immédiat)
- Sitemap complet à 12 pages en 3 phases (pages de service détaillées sous le menu Chauffeur privé)
- Piste d'évolution technique envisagée à terme : stack Next.js 15 + Supabase + Vercel, SEO trilingue FR/NL/EN, Schema.org, intégrations Stripe/AviationStack/SendGrid/Twilio — **pas pour cette itération**, à garder en tête seulement
