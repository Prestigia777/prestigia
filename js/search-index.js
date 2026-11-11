/* =====================================================================
   PRESTIGIA — index de recherche du champ du hero (accueil)
   Une entrée par page (ou section, avec son ancre #) RÉELLEMENT présente sur le site.
   Titres repris des pages. Mots-clés en FR, NL et EN, avec synonymes.
   La recherche ignore majuscules et accents : inutile d'écrire les variantes sans accent.
   Pour ajouter une page : copier une entrée, adapter title / url / icon / keywords.
   Un mot-clé qui commence par « = » ne compte que comme expression entière : '=Grand Prix' répond à
   « Grand Prix » (ou « grand p… ») mais pas à « prix » seul, qui doit mener au devis.
   Icônes disponibles : plane, car, clock, route, globe, briefcase, star, map, key,
                        sparkle, doc, phone, grid, pin, scale, chat
   ===================================================================== */
window.PRESTIGIA_SEARCH_INDEX = [

  /* ---------- Chauffeur privé ---------- */
  { title: 'Transfert aéroport & gare', url: 'transfert-aeroport-and-gare.html', icon: 'plane', boost: 2,
    keywords: ['transfert aéroport', 'aéroport', 'airport', 'luchthaven', 'Zaventem', 'Brussels Airport', 'Charleroi',
      'vol', 'avion', 'flight', 'vlucht', 'vliegtuig', 'navette', 'shuttle', 'gare', 'station', 'train', 'trein',
      'Bruxelles-Midi', 'Midi', 'Zuid', 'transfert', 'transfer', 'terminal', 'arrivée', 'départ', 'accueil pancarte'] },

  { title: 'Chauffeur privé à Bruxelles', url: 'chauffeur-prive-bruxelles.html', icon: 'car', boost: 2,
    keywords: ['chauffeur privé', 'chauffeur', 'private driver', 'driver', 'privéchauffeur', 'limousine', 'limo',
      'VTC', 'taxi', 'Bruxelles', 'Brussel', 'Brussels', 'rendez-vous', 'business'] },

  { title: 'Mise à disposition', url: 'mise-a-disposition.html', icon: 'clock', boost: 1,
    keywords: ['mise à disposition', 'disposition', 'à l\'heure', 'heure', 'journée', 'demi-journée', 'hourly',
      'by the hour', 'per uur', 'ter beschikking', 'shopping', 'plusieurs arrêts', 'rendez-vous', 'business', 'chauffeur'] },

  { title: 'Voyages ville à ville', url: 'voyages-ville-a-ville.html', icon: 'route', boost: 1,
    keywords: ['ville à ville', 'voyage', 'trajet', 'longue distance', 'city to city', 'intercity', 'stad', 'reis',
      'Liège', 'Luik', 'Namur', 'Namen', 'porte à porte'] },

  { title: 'Trajets internationaux', url: 'international.html', icon: 'globe', boost: 1,
    keywords: ['international', 'Europe', 'Europa', 'étranger', 'abroad', 'buitenland', 'frontière', 'Luxembourg',
      'Luxemburg', 'Allemagne', 'Germany', 'Duitsland', 'Pays-Bas', 'Netherlands', 'Nederland', 'France', 'Frankrijk'] },

  { title: 'Espace Entreprises', url: 'espace-entreprises.html', icon: 'briefcase', boost: 1,
    keywords: ['entreprise', 'société', 'business', 'corporate', 'bedrijf', 'company', 'compte entreprise',
      'facturation', 'facture', 'invoice', 'factuur', 'séminaire', 'seminar', 'délégation', 'collaborateurs', 'B2B'] },

  /* ---------- Événements ---------- */
  { title: 'Événements', url: 'evenements.html', icon: 'star', boost: 2,
    keywords: ['événement', 'event', 'evenement', 'mariage', 'huwelijk', 'wedding', 'cérémonie', 'gala', 'soirée',
      'congrès', 'exposition', 'festival', 'sport', 'anniversaire', 'verjaardag', 'birthday', 'feest', 'fête'] },

  { title: 'Galas & soirées de prestige', url: 'evenements/galas/index.html', icon: 'star', boost: 1,
    keywords: ['gala', 'soirée', 'soirée de prestige', 'dîner', 'diner', 'black tie', 'bal', 'Red Cross Ball',
      'avond', 'evening', 'cérémonie', 'mariage', 'wedding'] },

  { title: 'Festivals en Belgique', url: 'evenements/festivals/index.html', icon: 'star', boost: 1,
    keywords: ['festival', 'festivals', 'Tomorrowland', 'Rock Werchter', 'concert', 'musique', 'muziek', 'music'] },

  { title: 'Événements sportifs', url: 'evenements/sport/index.html', icon: 'star', boost: 1,
    keywords: ['sport', '=Grand Prix', 'Spa', 'Spa-Francorchamps', 'Formule 1', 'F1', 'match', 'stade', 'stadion', 'stadium',
      'cyclisme', 'wielrennen', 'Tour des Flandres', 'golf', 'tennis'] },

  { title: 'Événements Art & Culture', url: 'evenements/art-culture/index.html', icon: 'star', boost: 1,
    keywords: ['art', 'culture', 'cultuur', 'kunst', 'musée', 'museum', 'exposition', 'tentoonstelling', 'exhibition',
      'Brafa', 'Art Brussels', 'galerie', 'gallery', 'foire d\'art'] },

  { title: 'Salons professionnels', url: 'evenements/salons-expositions/index.html', icon: 'star', boost: 1,
    keywords: ['salon', 'salons', 'foire', 'beurs', 'trade fair', 'trade show', 'exposition', 'congrès', 'congres',
      'congress', 'Brussels Expo', 'Motor Show', 'Autosalon', 'professionnel'] },

  { title: 'Marchés de Noël', url: 'evenements/marches-de-noel/index.html', icon: 'star', boost: 1,
    keywords: ['marché de Noël', 'Noël', 'kerstmarkt', 'kerst', 'Christmas market', 'Christmas', 'Winter Wonders',
      'hiver', 'winter', 'marché'] },

  /* ---------- Tours touristiques ---------- */
  { title: 'Tours touristiques en Belgique', url: 'tours-touristiques.html', icon: 'map', boost: 2,
    keywords: ['tour', 'tours touristiques', 'visite', 'excursion', 'circuit', 'sightseeing', 'rondleiding', 'uitstap',
      'daguitstap', 'tourisme', 'touriste', 'toerisme', 'attraction', 'guide', 'Belgique', 'België', 'Belgium'] },

  { title: 'Tour de Bruges', url: 'tours-touristiques/bruges/index.html', icon: 'map', boost: 1,
    keywords: ['Bruges', 'Brugge', 'visite Bruges', 'canaux', 'béguinage', 'Beffroi', 'Minnewater', 'tour', 'excursion'] },

  { title: 'Tour de Gand', url: 'tours-touristiques/gand/index.html', icon: 'map', boost: 1,
    keywords: ['Gand', 'Gent', 'Ghent', 'visite Gand', 'Gravensteen', 'Saint-Bavon', 'Graslei', 'tour', 'excursion'] },

  { title: 'Tour d\'Anvers', url: 'tours-touristiques/anvers/index.html', icon: 'map', boost: 1,
    keywords: ['Anvers', 'Antwerpen', 'Antwerp', 'visite Anvers', 'Grote Markt', 'cathédrale', 'MAS', 'diamant',
      'tour', 'excursion'] },

  { title: 'Tour de Bruxelles', url: 'tours-touristiques/bruxelles/index.html', icon: 'map', boost: 1,
    keywords: ['visite Bruxelles', 'Brussels sightseeing', 'Grand-Place', 'Grote Markt', 'Atomium', 'Manneken-Pis',
      'Sablon', 'Bruxelles', 'Brussel', 'tour', 'excursion'] },

  { title: 'Autres villes de Belgique', url: 'tours-touristiques/autres-villes/index.html', icon: 'map', boost: 1,
    keywords: ['autres villes', 'Dinant', 'Namur', 'Namen', 'Waterloo', 'Durbuy', 'Grottes de Han', 'Han-sur-Lesse',
      'Citadelle', 'Wallonie', 'Ardennes', 'excursion'] },

  { title: 'Tourisme de mémoire', url: 'tours-touristiques/tourisme-de-memoire/index.html', icon: 'map', boost: 1,
    keywords: ['mémoire', 'tourisme de mémoire', 'guerre', 'oorlog', 'war', 'Première Guerre mondiale', 'Seconde Guerre mondiale',
      'WWI', 'WWII', 'Ypres', 'Ieper', 'Bastogne', 'Normandie', 'Normandy', 'débarquement', 'D-Day', 'cimetière',
      'memorial', 'Flanders Fields'] },

  /* ---------- Flotte (page + sections) ---------- */
  { title: 'Notre flotte', url: 'flotte.html', icon: 'car', boost: 2,
    keywords: ['flotte', 'fleet', 'vloot', 'véhicule', 'voiture', 'auto', 'car', 'wagen', 'Mercedes', 'BMW', 'gamme'] },

  { title: 'Flotte — Berline (Business)', url: 'flotte.html#business', icon: 'car', boost: 0,
    keywords: ['berline', 'sedan', 'business', 'Classe E', 'E-Class', 'E-Klasse', 'BMW Série 5', '5 Series'] },

  { title: 'Flotte — First Class', url: 'flotte.html#first-class', icon: 'car', boost: 0,
    keywords: ['first class', 'first', 'Classe S', 'S-Class', 'S-Klasse', 'BMW Série 7', '7 Series', 'luxe', 'luxury', 'prestige'] },

  { title: 'Flotte — Van', url: 'flotte.html#van', icon: 'car', boost: 0,
    keywords: ['van', 'Classe V', 'V-Class', 'V-Klasse', 'monospace', 'minivan', '7 places', 'famille', 'gezin', 'family'] },

  { title: 'Flotte — Minibus', url: 'flotte.html#minibus', icon: 'car', boost: 0,
    keywords: ['minibus', 'Sprinter', 'groupe', 'groep', 'group', '20 personnes', 'navette groupe'] },

  { title: 'Flotte — Autocar', url: 'flotte.html#autocar', icon: 'car', boost: 0,
    keywords: ['autocar', 'bus', 'coach', 'touringcar', 'autobus', 'car', 'grand groupe', '50 personnes'] },

  /* ---------- Services ---------- */
  { title: 'Nos services', url: 'services.html', icon: 'grid', boost: 1,
    keywords: ['services', 'service', 'diensten', 'prestations', 'offre', 'aanbod'] },

  { title: 'Location de véhicules avec chauffeur', url: 'location-de-vehicules.html', icon: 'key', boost: 1,
    keywords: ['location', 'louer', 'rent', 'rental', 'huren', 'verhuur', 'mariage', 'huwelijk', 'wedding', 'cérémonie',
      'tournage', 'shooting', 'film', 'séjour'] },

  { title: 'Esthétique automobile', url: 'esthetique-automobile.html', icon: 'sparkle', boost: 1,
    keywords: ['esthétique', 'nettoyage', 'lavage', 'detailing', 'polish', 'entretien', 'cleaning', 'car wash',
      'poetsen', 'reiniging', 'carrosserie'] },

  { title: 'Service sur-mesure', url: 'service-sur-mesure.html', icon: 'sparkle', boost: 1,
    keywords: ['sur-mesure', 'sur mesure', 'personnalisé', 'custom', 'bespoke', 'op maat', 'demande spéciale',
      'multi-jours', 'besoin spécifique'] },

  /* ---------- Destinations depuis Bruxelles ---------- */
  { title: 'Chauffeur privé Bruxelles → Paris', url: 'paris.html', icon: 'pin', boost: 1,
    keywords: ['Paris', 'Parijs', 'France', 'Frankrijk'] },
  { title: 'Chauffeur privé Bruxelles → Amsterdam', url: 'amsterdam.html', icon: 'pin', boost: 1,
    keywords: ['Amsterdam', 'Pays-Bas', 'Nederland', 'Netherlands', 'Holland'] },
  { title: 'Chauffeur privé Bruxelles → Anvers', url: 'anvers.html', icon: 'pin', boost: 1,
    keywords: ['Anvers', 'Antwerpen', 'Antwerp', 'transfert Anvers'] },
  { title: 'Chauffeur privé Bruxelles → Gand', url: 'gand.html', icon: 'pin', boost: 1,
    keywords: ['Gand', 'Gent', 'Ghent', 'transfert Gand'] },
  { title: 'Chauffeur privé Bruxelles → Bruges', url: 'bruges.html', icon: 'pin', boost: 1,
    keywords: ['Bruges', 'Brugge', 'transfert Bruges'] },
  { title: 'Nos destinations', url: 'index.html#destinations', icon: 'pin', boost: 0,
    keywords: ['destinations', 'destination', 'villes', 'bestemmingen', 'cities'] },

  /* ---------- Devis, contact, divers ---------- */
  { title: 'Demander un devis', url: 'devis.html', icon: 'doc', boost: 2,
    keywords: ['devis', 'prix', 'tarif', 'tarifs', 'coût', 'combien', 'estimation', 'offerte', 'prijs', 'kosten',
      'quote', 'quotation', 'price', 'réserver', 'réservation', 'booking', 'book', 'reserveren', 'boeken'] },

  { title: 'Contact', url: 'contact.html', icon: 'phone', boost: 2,
    keywords: ['contact', 'téléphone', 'telefoon', 'phone', 'appeler', 'bellen', 'call', 'WhatsApp', 'mail', 'e-mail',
      'email', 'adresse', 'joindre'] },

  { title: 'Avis clients', url: 'index.html#avis', icon: 'chat', boost: 0,
    keywords: ['avis', 'reviews', 'review', 'témoignages', 'beoordelingen', 'recensies', 'Google', 'Trustpilot', 'Tripadvisor'] },

  { title: 'Mentions légales', url: 'mentions-legales.html', icon: 'scale', boost: 0,
    keywords: ['mentions légales', 'légal', 'juridique', 'legal', 'wettelijke vermeldingen', 'éditeur', 'hébergeur', 'cookies'] }
];
