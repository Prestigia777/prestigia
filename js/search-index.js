/* =====================================================================
   PRESTIGIA — index de recherche du champ du hero (accueil)
   Une entrée par page (ou section, avec son ancre #) RÉELLEMENT présente sur le site.
   Titres repris des pages. Mots-clés en FR, NL, EN et DE, avec synonymes.
   La recherche ignore majuscules et accents : inutile d'écrire les variantes sans accent.
   Pour ajouter une page : copier une entrée, adapter title / url / icon / keywords.
   t : titre affiché sur les pages /nl/, /en/ et /de/ (title = titre français). Mots-clés allemands après « DE ».
   Les url sont relatives : depuis /en/, 'devis.html' mène à /en/devis.html.
   Un mot-clé qui commence par « = » ne compte que comme expression entière : '=Grand Prix' répond à
   « Grand Prix » (ou « grand p… ») mais pas à « prix » seul, qui doit mener au devis.
   Icônes disponibles : plane, car, clock, route, globe, briefcase, star, map, key,
                        sparkle, doc, phone, grid, pin, scale, chat
   ===================================================================== */
window.PRESTIGIA_SEARCH_INDEX = [

  /* ---------- Chauffeur privé ---------- */
  { title: 'Transfert aéroport & gare', url: 'transfert-aeroport-and-gare.html',
    t: { nl: 'Luchthaven- & stationstransfer', en: 'Airport & station transfers', de: 'Flughafen- & Bahnhofstransfer' }, icon: 'plane', boost: 2,
    keywords: ['transfert aéroport', 'aéroport', 'airport', 'luchthaven', 'Zaventem', 'Brussels Airport', 'Charleroi',
      'vol', 'avion', 'flight', 'vlucht', 'vliegtuig', 'navette', 'shuttle', 'gare', 'station', 'train', 'trein',
      'Bruxelles-Midi', 'Midi', 'Zuid', 'transfert', 'transfer', 'terminal', 'arrivée', 'départ', 'accueil pancarte',
      /* DE */ 'Flughafen', 'Flughafentransfer', 'Flug', 'Bahnhof', 'Zug', 'Ankunft', 'Abflug'] },

  { title: 'Chauffeur privé à Bruxelles', url: 'chauffeur-prive-bruxelles.html',
    t: { nl: 'Privéchauffeur in Brussel', en: 'Private chauffeur in Brussels', de: 'Privatchauffeur in Brüssel' }, icon: 'car', boost: 2,
    keywords: ['chauffeur privé', 'chauffeur', 'private driver', 'driver', 'privéchauffeur', 'limousine', 'limo',
      'VTC', 'taxi', 'Bruxelles', 'Brussel', 'Brussels', 'rendez-vous', 'business',
      /* DE */ 'Privatchauffeur', 'Fahrer', 'Brüssel', 'Termin'] },

  { title: 'Mise à disposition', url: 'mise-a-disposition.html',
    t: { nl: 'Chauffeur ter beschikking', en: 'Chauffeur by the hour', de: 'Chauffeur auf Stundenbasis' }, icon: 'clock', boost: 1,
    keywords: ['mise à disposition', 'disposition', 'à l\'heure', 'heure', 'journée', 'demi-journée', 'hourly',
      'by the hour', 'per uur', 'ter beschikking', 'shopping', 'plusieurs arrêts', 'rendez-vous', 'business', 'chauffeur',
      /* DE */ 'Stundenbasis', 'stundenweise', 'Stunde', 'ganzer Tag', 'halber Tag', 'zur Verfügung', 'mehrere Stopps'] },

  { title: 'Voyages ville à ville', url: 'voyages-ville-a-ville.html',
    t: { nl: 'Van stad tot stad', en: 'City-to-city travel', de: 'Von Stadt zu Stadt' }, icon: 'route', boost: 1,
    keywords: ['ville à ville', 'voyage', 'trajet', 'longue distance', 'city to city', 'intercity', 'stad', 'reis',
      'Liège', 'Luik', 'Namur', 'Namen', 'porte à porte',
      /* DE */ 'Stadt zu Stadt', 'Fernfahrt', 'Langstrecke', 'Reise', 'Lüttich'] },

  { title: 'Trajets internationaux', url: 'international.html',
    t: { nl: 'Internationale ritten', en: 'International journeys', de: 'Internationale Fahrten' }, icon: 'globe', boost: 1,
    keywords: ['international', 'Europe', 'Europa', 'étranger', 'abroad', 'buitenland', 'frontière', 'Luxembourg',
      'Luxemburg', 'Allemagne', 'Germany', 'Duitsland', 'Pays-Bas', 'Netherlands', 'Nederland', 'France', 'Frankrijk',
      /* DE */ 'Ausland', 'Deutschland', 'Niederlande', 'Frankreich', 'Grenze', 'Luxemburg'] },

  { title: 'Espace Entreprises', url: 'espace-entreprises.html',
    t: { nl: 'Bedrijven', en: 'Corporate clients', de: 'Geschäftskunden' }, icon: 'briefcase', boost: 1,
    keywords: ['entreprise', 'société', 'business', 'corporate', 'bedrijf', 'company', 'compte entreprise',
      'facturation', 'facture', 'invoice', 'factuur', 'séminaire', 'seminar', 'délégation', 'collaborateurs', 'B2B',
      /* DE */ 'Unternehmen', 'Firma', 'Geschäftskunden', 'Rechnung', 'Seminar', 'Delegation', 'Mitarbeiter'] },

  /* ---------- Événements ---------- */
  { title: 'Événements', url: 'evenements.html',
    t: { nl: 'Evenementen', en: 'Events', de: 'Veranstaltungen' }, icon: 'star', boost: 2,
    keywords: ['événement', 'event', 'evenement', 'mariage', 'huwelijk', 'wedding', 'cérémonie', 'gala', 'soirée',
      'congrès', 'exposition', 'festival', 'sport', 'anniversaire', 'verjaardag', 'birthday', 'feest', 'fête',
      /* DE */ 'Veranstaltung', 'Hochzeit', 'Zeremonie', 'Gala', 'Abend', 'Kongress', 'Ausstellung', 'Geburtstag', 'Feier', 'Fest'] },

  { title: 'Galas & soirées de prestige', url: 'evenements/galas/index.html',
    t: { nl: 'Gala\'s & prestigieuze avonden', en: 'Galas & prestige evenings', de: 'Galas & exklusive Abende' }, icon: 'star', boost: 1,
    keywords: ['gala', 'soirée', 'soirée de prestige', 'dîner', 'diner', 'black tie', 'bal', 'Red Cross Ball',
      'avond', 'evening', 'cérémonie', 'mariage', 'wedding',
      /* DE */ 'Gala', 'Abendveranstaltung', 'Dinner', 'Ball', 'Hochzeit'] },

  { title: 'Festivals en Belgique', url: 'evenements/festivals/index.html',
    t: { nl: 'Festivals in België', en: 'Festivals in Belgium', de: 'Festivals in Belgien' }, icon: 'star', boost: 1,
    keywords: ['festival', 'festivals', 'Tomorrowland', 'Rock Werchter', 'concert', 'musique', 'muziek', 'music',
      /* DE */ 'Konzert', 'Musik'] },

  { title: 'Événements sportifs', url: 'evenements/sport/index.html',
    t: { nl: 'Sportevenementen', en: 'Sporting events', de: 'Sportveranstaltungen' }, icon: 'star', boost: 1,
    keywords: ['sport', '=Grand Prix', 'Spa', 'Spa-Francorchamps', 'Formule 1', 'F1', 'match', 'stade', 'stadion', 'stadium',
      'cyclisme', 'wielrennen', 'Tour des Flandres', 'golf', 'tennis',
      /* DE */ 'Formel 1', 'Stadion', 'Radsport', 'Flandern-Rundfahrt', 'Rennen'] },

  { title: 'Événements Art & Culture', url: 'evenements/art-culture/index.html',
    t: { nl: 'Kunst & cultuur', en: 'Art & culture events', de: 'Kunst & Kultur' }, icon: 'star', boost: 1,
    keywords: ['art', 'culture', 'cultuur', 'kunst', 'musée', 'museum', 'exposition', 'tentoonstelling', 'exhibition',
      'Brafa', 'Art Brussels', 'galerie', 'gallery', 'foire d\'art',
      /* DE */ 'Kunst', 'Kultur', 'Museum', 'Ausstellung', 'Galerie', 'Kunstmesse'] },

  { title: 'Salons professionnels', url: 'evenements/salons-expositions/index.html',
    t: { nl: 'Beurzen & tentoonstellingen', en: 'Trade fairs & exhibitions', de: 'Messen & Ausstellungen' }, icon: 'star', boost: 1,
    keywords: ['salon', 'salons', 'foire', 'beurs', 'trade fair', 'trade show', 'exposition', 'congrès', 'congres',
      'congress', 'Brussels Expo', 'Motor Show', 'Autosalon', 'professionnel',
      /* DE */ 'Messe', 'Fachmesse', 'Ausstellung', 'Kongress', 'Automesse'] },

  { title: 'Marchés de Noël', url: 'evenements/marches-de-noel/index.html',
    t: { nl: 'Kerstmarkten', en: 'Christmas markets', de: 'Weihnachtsmärkte' }, icon: 'star', boost: 1,
    keywords: ['marché de Noël', 'Noël', 'kerstmarkt', 'kerst', 'Christmas market', 'Christmas', 'Winter Wonders',
      'hiver', 'winter', 'marché',
      /* DE */ 'Weihnachtsmarkt', 'Weihnachten', 'Winter', 'Markt'] },

  /* ---------- Tours touristiques ---------- */
  { title: 'Tours touristiques en Belgique', url: 'tours-touristiques.html',
    t: { nl: 'Toeristische tours in België', en: 'Sightseeing tours in Belgium', de: 'Sightseeing-Touren in Belgien' }, icon: 'map', boost: 2,
    keywords: ['tour', 'tours touristiques', 'visite', 'excursion', 'circuit', 'sightseeing', 'rondleiding', 'uitstap',
      'daguitstap', 'tourisme', 'touriste', 'toerisme', 'attraction', 'guide', 'Belgique', 'België', 'Belgium',
      /* DE */ 'Tour', 'Besichtigung', 'Ausflug', 'Tagesausflug', 'Rundfahrt', 'Sehenswürdigkeiten', 'Tourismus', 'Belgien'] },

  { title: 'Tour de Bruges', url: 'tours-touristiques/bruges/index.html',
    t: { nl: 'Tour door Brugge', en: 'Bruges tour', de: 'Tour durch Brügge' }, icon: 'map', boost: 1,
    keywords: ['Bruges', 'Brugge', 'visite Bruges', 'canaux', 'béguinage', 'Beffroi', 'Minnewater', 'tour', 'excursion',
      /* DE */ 'Brügge', 'Kanäle', 'Beginenhof', 'Belfried'] },

  { title: 'Tour de Gand', url: 'tours-touristiques/gand/index.html',
    t: { nl: 'Tour door Gent', en: 'Ghent tour', de: 'Tour durch Gent' }, icon: 'map', boost: 1,
    keywords: ['Gand', 'Gent', 'Ghent', 'visite Gand', 'Gravensteen', 'Saint-Bavon', 'Graslei', 'tour', 'excursion',
      /* DE */ 'Gent', 'Genter'] },

  { title: 'Tour d\'Anvers', url: 'tours-touristiques/anvers/index.html',
    t: { nl: 'Tour door Antwerpen', en: 'Antwerp tour', de: 'Tour durch Antwerpen' }, icon: 'map', boost: 1,
    keywords: ['Anvers', 'Antwerpen', 'Antwerp', 'visite Anvers', 'Grote Markt', 'cathédrale', 'MAS', 'diamant',
      'tour', 'excursion',
      /* DE */ 'Antwerpen', 'Kathedrale', 'Diamanten'] },

  { title: 'Tour de Bruxelles', url: 'tours-touristiques/bruxelles/index.html',
    t: { nl: 'Tour door Brussel', en: 'Brussels tour', de: 'Tour durch Brüssel' }, icon: 'map', boost: 1,
    keywords: ['visite Bruxelles', 'Brussels sightseeing', 'Grand-Place', 'Grote Markt', 'Atomium', 'Manneken-Pis',
      'Sablon', 'Bruxelles', 'Brussel', 'tour', 'excursion',
      /* DE */ 'Brüssel', 'Grand-Place', 'Besichtigung Brüssel'] },

  { title: 'Autres villes de Belgique', url: 'tours-touristiques/autres-villes/index.html',
    t: { nl: 'Andere Belgische steden', en: 'Other Belgian cities', de: 'Weitere Städte in Belgien' }, icon: 'map', boost: 1,
    keywords: ['autres villes', 'Dinant', 'Namur', 'Namen', 'Waterloo', 'Durbuy', 'Grottes de Han', 'Han-sur-Lesse',
      'Citadelle', 'Wallonie', 'Ardennes', 'excursion',
      /* DE */ 'andere Städte', 'Wallonien', 'Ardennen', 'Zitadelle', 'Grotten von Han'] },

  { title: 'Tourisme de mémoire', url: 'tours-touristiques/tourisme-de-memoire/index.html',
    t: { nl: 'Herinneringstoerisme', en: 'Remembrance tourism', de: 'Erinnerungstourismus' }, icon: 'map', boost: 1,
    keywords: ['mémoire', 'tourisme de mémoire', 'guerre', 'oorlog', 'war', 'Première Guerre mondiale', 'Seconde Guerre mondiale',
      'WWI', 'WWII', 'Ypres', 'Ieper', 'Bastogne', 'Normandie', 'Normandy', 'débarquement', 'D-Day', 'cimetière',
      'memorial', 'Flanders Fields',
      /* DE */ 'Erinnerung', 'Krieg', 'Erster Weltkrieg', 'Zweiter Weltkrieg', 'Gedenkstätte', 'Friedhof', 'Normandie'] },

  /* ---------- Flotte (page + sections) ---------- */
  { title: 'Notre flotte', url: 'flotte.html',
    t: { nl: 'Onze vloot', en: 'Our fleet', de: 'Unsere Flotte' }, icon: 'car', boost: 2,
    keywords: ['flotte', 'fleet', 'vloot', 'véhicule', 'voiture', 'auto', 'car', 'wagen', 'Mercedes', 'BMW', 'gamme',
      /* DE */ 'Flotte', 'Fahrzeug', 'Fahrzeuge', 'Wagen'] },

  { title: 'Flotte — Berline (Business)', url: 'flotte.html#business',
    t: { nl: 'Vloot — Sedan (Business)', en: 'Fleet — Sedan (Business)', de: 'Flotte — Limousine (Business)' }, icon: 'car', boost: 0,
    keywords: ['berline', 'sedan', 'business', 'Classe E', 'E-Class', 'E-Klasse', 'BMW Série 5', '5 Series',
      /* DE */ 'Limousine', 'E-Klasse', '5er'] },

  { title: 'Flotte — First Class', url: 'flotte.html#first-class',
    t: { nl: 'Vloot — First Class', en: 'Fleet — First Class', de: 'Flotte — First Class' }, icon: 'car', boost: 0,
    keywords: ['first class', 'first', 'Classe S', 'S-Class', 'S-Klasse', 'BMW Série 7', '7 Series', 'luxe', 'luxury', 'prestige',
      /* DE */ 'S-Klasse', '7er', 'Luxus'] },

  { title: 'Flotte — Van', url: 'flotte.html#van',
    t: { nl: 'Vloot — Van', en: 'Fleet — Van', de: 'Flotte — Van' }, icon: 'car', boost: 0,
    keywords: ['van', 'Classe V', 'V-Class', 'V-Klasse', 'monospace', 'minivan', '7 places', 'famille', 'gezin', 'family',
      /* DE */ 'V-Klasse', 'Großraumlimousine', 'Familie', '7 Sitze'] },

  { title: 'Flotte — Minibus', url: 'flotte.html#minibus',
    t: { nl: 'Vloot — Minibus', en: 'Fleet — Minibus', de: 'Flotte — Minibus' }, icon: 'car', boost: 0,
    keywords: ['minibus', 'Sprinter', 'groupe', 'groep', 'group', '20 personnes', 'navette groupe',
      /* DE */ 'Kleinbus', 'Gruppe', '20 Personen'] },

  { title: 'Flotte — Autocar', url: 'flotte.html#autocar',
    t: { nl: 'Vloot — Autocar', en: 'Fleet — Coach', de: 'Flotte — Reisebus' }, icon: 'car', boost: 0,
    keywords: ['autocar', 'bus', 'coach', 'touringcar', 'autobus', 'car', 'grand groupe', '50 personnes',
      /* DE */ 'Reisebus', 'Bus', 'große Gruppe', '50 Personen'] },

  /* ---------- Services ---------- */
  { title: 'Nos services', url: 'services.html',
    t: { nl: 'Onze diensten', en: 'Our services', de: 'Unsere Leistungen' }, icon: 'grid', boost: 1,
    keywords: ['services', 'service', 'diensten', 'prestations', 'offre', 'aanbod',
      /* DE */ 'Leistungen', 'Dienstleistungen', 'Angebot'] },

  { title: 'Location de véhicules avec chauffeur', url: 'location-de-vehicules.html',
    t: { nl: 'Voertuigverhuur met chauffeur', en: 'Vehicle hire with chauffeur', de: 'Fahrzeugvermietung mit Chauffeur' }, icon: 'key', boost: 1,
    keywords: ['location', 'louer', 'rent', 'rental', 'huren', 'verhuur', 'mariage', 'huwelijk', 'wedding', 'cérémonie',
      'tournage', 'shooting', 'film', 'séjour',
      /* DE */ 'mieten', 'Vermietung', 'Hochzeit', 'Zeremonie', 'Dreh', 'Fotoshooting'] },

  { title: 'Esthétique automobile', url: 'esthetique-automobile.html',
    t: { nl: 'Autoverzorging', en: 'Car detailing', de: 'Fahrzeugaufbereitung' }, icon: 'sparkle', boost: 1,
    keywords: ['esthétique', 'nettoyage', 'lavage', 'detailing', 'polish', 'entretien', 'cleaning', 'car wash',
      'poetsen', 'reiniging', 'carrosserie',
      /* DE */ 'Aufbereitung', 'Reinigung', 'Autowäsche', 'Politur', 'Pflege', 'Karosserie'] },

  { title: 'Service sur-mesure', url: 'service-sur-mesure.html',
    t: { nl: 'Maatwerk', en: 'Bespoke service', de: 'Maßgeschneiderter Service' }, icon: 'sparkle', boost: 1,
    keywords: ['sur-mesure', 'sur mesure', 'personnalisé', 'custom', 'bespoke', 'op maat', 'demande spéciale',
      'multi-jours', 'besoin spécifique',
      /* DE */ 'maßgeschneidert', 'individuell', 'Sonderwunsch', 'mehrtägig'] },

  /* ---------- Destinations depuis Bruxelles ---------- */
  { title: 'Chauffeur privé Bruxelles → Paris', url: 'paris.html',
    t: { nl: 'Privéchauffeur Brussel → Parijs', en: 'Private chauffeur Brussels → Paris', de: 'Privatchauffeur Brüssel → Paris' }, icon: 'pin', boost: 1,
    keywords: ['Paris', 'Parijs', 'France', 'Frankrijk',
      /* DE */ 'Frankreich'] },
  { title: 'Chauffeur privé Bruxelles → Amsterdam', url: 'amsterdam.html',
    t: { nl: 'Privéchauffeur Brussel → Amsterdam', en: 'Private chauffeur Brussels → Amsterdam', de: 'Privatchauffeur Brüssel → Amsterdam' }, icon: 'pin', boost: 1,
    keywords: ['Amsterdam', 'Pays-Bas', 'Nederland', 'Netherlands', 'Holland',
      /* DE */ 'Niederlande'] },
  { title: 'Chauffeur privé Bruxelles → Anvers', url: 'anvers.html',
    t: { nl: 'Privéchauffeur Brussel → Antwerpen', en: 'Private chauffeur Brussels → Antwerp', de: 'Privatchauffeur Brüssel → Antwerpen' }, icon: 'pin', boost: 1,
    keywords: ['Anvers', 'Antwerpen', 'Antwerp', 'transfert Anvers',
      /* DE */ 'Antwerpen'] },
  { title: 'Chauffeur privé Bruxelles → Gand', url: 'gand.html',
    t: { nl: 'Privéchauffeur Brussel → Gent', en: 'Private chauffeur Brussels → Ghent', de: 'Privatchauffeur Brüssel → Gent' }, icon: 'pin', boost: 1,
    keywords: ['Gand', 'Gent', 'Ghent', 'transfert Gand',
      /* DE */ 'Gent'] },
  { title: 'Chauffeur privé Bruxelles → Bruges', url: 'bruges.html',
    t: { nl: 'Privéchauffeur Brussel → Brugge', en: 'Private chauffeur Brussels → Bruges', de: 'Privatchauffeur Brüssel → Brügge' }, icon: 'pin', boost: 1,
    keywords: ['Bruges', 'Brugge', 'transfert Bruges',
      /* DE */ 'Brügge'] },
  { title: 'Nos destinations', url: 'index.html#destinations',
    t: { nl: 'Onze bestemmingen', en: 'Our destinations', de: 'Unsere Reiseziele' }, icon: 'pin', boost: 0,
    keywords: ['destinations', 'destination', 'villes', 'bestemmingen', 'cities',
      /* DE */ 'Reiseziele', 'Ziele', 'Städte'] },

  /* ---------- Devis, contact, divers ---------- */
  { title: 'Demander un devis', url: 'devis.html',
    t: { nl: 'Offerte aanvragen', en: 'Request a quote', de: 'Angebot anfordern' }, icon: 'doc', boost: 2,
    keywords: ['devis', 'prix', 'tarif', 'tarifs', 'coût', 'combien', 'estimation', 'offerte', 'prijs', 'kosten',
      'quote', 'quotation', 'price', 'réserver', 'réservation', 'booking', 'book', 'reserveren', 'boeken',
      /* DE */ 'Angebot', 'Preis', 'Kosten', 'Tarif', 'wie viel', 'buchen', 'Buchung', 'reservieren'] },

  { title: 'Contact', url: 'contact.html',
    t: { nl: 'Contact', en: 'Contact', de: 'Kontakt' }, icon: 'phone', boost: 2,
    keywords: ['contact', 'téléphone', 'telefoon', 'phone', 'appeler', 'bellen', 'call', 'WhatsApp', 'mail', 'e-mail',
      'email', 'adresse', 'joindre',
      /* DE */ 'Kontakt', 'Telefon', 'anrufen', 'E-Mail', 'Adresse'] },

  { title: 'Avis clients', url: 'index.html#avis',
    t: { nl: 'Klantenreviews', en: 'Client reviews', de: 'Kundenbewertungen' }, icon: 'chat', boost: 0,
    keywords: ['avis', 'reviews', 'review', 'témoignages', 'beoordelingen', 'recensies', 'Google', 'Trustpilot', 'Tripadvisor',
      /* DE */ 'Bewertungen', 'Erfahrungen', 'Meinungen'] },

  { title: 'Mentions légales', url: 'mentions-legales.html',
    t: { nl: 'Wettelijke vermeldingen', en: 'Legal notice', de: 'Impressum' }, icon: 'scale', boost: 0,
    keywords: ['mentions légales', 'légal', 'juridique', 'legal', 'wettelijke vermeldingen', 'éditeur', 'hébergeur', 'cookies',
      /* DE */ 'Impressum', 'rechtliche Hinweise', 'Datenschutz'] }
];
