/* Page d'accueil (index.html) */
const L = (nl, en, de) => ({ nl, en, de });
module.exports = {
  raw: [
    ['<span class="hero-word" style="--i:0">L\'excellence</span> <span class="hero-word" style="--i:1">en</span> <span class="hero-word" style="--i:2">mouvement</span>', L(
      '<span class="hero-word" style="--i:0">Excellentie</span> <span class="hero-word" style="--i:1">in</span> <span class="hero-word" style="--i:2">beweging</span>',
      '<span class="hero-word" style="--i:0">Excellence</span> <span class="hero-word" style="--i:1">in</span> <span class="hero-word" style="--i:2">motion</span>',
      '<span class="hero-word" style="--i:0">Exzellenz</span> <span class="hero-word" style="--i:1">in</span> <span class="hero-word" style="--i:2">Bewegung</span>')]
  ],
  seg: {
  // ----- Boutons de l'accueil : texte qui dit où mène le lien (22/11/2026) -----
  'Voir les transferts': L('Bekijk de transfers', 'See our transfers', 'Transfers ansehen'),
  'Voir la mise à disposition': L('Chauffeur per uur bekijken', 'See hourly chauffeur hire', 'Stundenservice ansehen'),
  'Voir les tours': L('Bekijk de tours', 'See our tours', 'Touren ansehen'),
  'Voir les événements': L('Bekijk de evenementen', 'See our events', 'Events ansehen'),
  // ----- Fiche entreprise (données structurées, 22/11/2026) : valeurs techniques identiques dans toutes les langues -----
  'Prestigia SRL': L('Prestigia BV', 'Prestigia SRL', 'Prestigia SRL'),
  'Chauffeur privé et limousine premium à Bruxelles : transferts, mise à disposition, événements, tours privés et location de véhicules, en Belgique et en Europe.': L(
    'Privéchauffeur en premium limousine in Brussel: transfers, chauffeur ter beschikking, evenementen, privétours en voertuigverhuur, in België en Europa.',
    'Private chauffeur and premium limousine in Brussels: transfers, chauffeur by the hour, events, private tours and car rental, in Belgium and across Europe.',
    'Privatchauffeur und Premium-Limousine in Brüssel: Transfers, Chauffeur auf Stundenbasis, Events, private Touren und Fahrzeugvermietung, in Belgien und Europa.'),
  'BE1015973545': L('BE1015973545', 'BE1015973545', 'BE1015973545'),
  'Chaussée Romaine 265': L('Romeinse Steenweg 265', 'Romeinse Steenweg 265', 'Romeinse Steenweg 265'),
  'Vilvorde': L('Vilvoorde', 'Vilvoorde', 'Vilvoorde'),
  'Europe': L('Europa', 'Europe', 'Europa'),
  'Monday': L('Monday', 'Monday', 'Monday'), 'Tuesday': L('Tuesday', 'Tuesday', 'Tuesday'), 'Wednesday': L('Wednesday', 'Wednesday', 'Wednesday'),
  'Thursday': L('Thursday', 'Thursday', 'Thursday'), 'Friday': L('Friday', 'Friday', 'Friday'), 'Saturday': L('Saturday', 'Saturday', 'Saturday'), 'Sunday': L('Sunday', 'Sunday', 'Sunday'),
  'fr': L('fr', 'fr', 'fr'), 'nl': L('nl', 'nl', 'nl'), 'de': L('de', 'de', 'de'),
  // ----- Textes Google raccourcis (22/11/2026) -----
  'Prestigia, chauffeur privé et limousine premium à Bruxelles : transferts aéroport, mise à disposition et service sur mesure, en Belgique et en Europe.': L('Prestigia, privéchauffeur en premium limousine in Brussel: luchthaventransfers, chauffeur ter beschikking en maatwerk, in België en Europa.', 'Prestigia, private chauffeur and premium limousine in Brussels: airport transfers, chauffeur by the hour and bespoke service, in Belgium and Europe.', 'Prestigia, Privatchauffeur und Premium-Limousine in Brüssel: Flughafentransfers, Chauffeur auf Stundenbasis und Maßservice, in Belgien und Europa.'),
    // ----- En-tête -----
    'Chauffeur privé à Bruxelles | PRESTIGIA': L('Privéchauffeur in Brussel | PRESTIGIA', 'Private Chauffeur in Brussels | PRESTIGIA', 'Privatchauffeur in Brüssel | PRESTIGIA'),
    'Prestigia, chauffeur privé et limousine premium à Bruxelles : transferts aéroport, mise à disposition et service sur-mesure pour particuliers et entreprises, en Belgique et partout en Europe.': L(
      'Prestigia, privéchauffeur en premium limousineservice in Brussel: luchthaventransfers, chauffeur ter beschikking en maatwerk voor particulieren en bedrijven, in België en heel Europa.',
      'Prestigia, private chauffeur and premium limousine service in Brussels: airport transfers, chauffeur hire by the hour and bespoke service for private and corporate clients, in Belgium and across Europe.',
      'Prestigia, Privatchauffeur und Premium-Limousinenservice in Brüssel: Flughafentransfers, Chauffeur auf Stundenbasis und maßgeschneiderter Service für Privat- und Geschäftskunden, in Belgien und ganz Europa.'),
    'Chauffeur privé et service sur-mesure à Bruxelles. Service de limousine, transferts aéroport et chauffeur à disposition en Belgique.': L(
      'Privéchauffeur en maatwerk in Brussel. Limousineservice, luchthaventransfers en chauffeur ter beschikking in België.',
      'Private chauffeur and bespoke service in Brussels. Limousine service, airport transfers and chauffeur at your disposal in Belgium.',
      'Privatchauffeur und maßgeschneiderter Service in Brüssel. Limousinenservice, Flughafentransfers und Chauffeur zu Ihrer Verfügung in Belgien.'),

    // ----- Hero -----
    'Chauffeur privé et service sur-mesure à Bruxelles': L('Privéchauffeur en maatwerk in Brussel', 'Private chauffeur and bespoke service in Brussels', 'Privatchauffeur und maßgeschneiderter Service in Brüssel'),
    'Service de limousine, transferts aéroport et chauffeur à disposition en Belgique — pour une clientèle exigeante en&nbsp;Europe.': L(
      'Limousineservice, luchthaventransfers en chauffeur ter beschikking in België — voor een veeleisende clientèle in heel&nbsp;Europa.',
      'Limousine service, airport transfers and chauffeur hire in Belgium — for discerning clients across&nbsp;Europe.',
      'Limousinenservice, Flughafentransfers und Chauffeur zu Ihrer Verfügung in Belgien — für anspruchsvolle Kunden in ganz&nbsp;Europa.'),
    'Rechercher sur le site': L('Zoeken op de site', 'Search the site', 'Website durchsuchen'),
    'Que recherchez-vous ? Aéroport, mariage, Bruges…': L('Wat zoekt u? Luchthaven, huwelijk, Brugge…', 'What are you looking for? Airport, wedding, Bruges…', 'Wonach suchen Sie? Flughafen, Hochzeit, Brügge…'),
    'Rechercher': L('Zoeken', 'Search', 'Suchen'),
    'Suggestions': L('Suggesties', 'Suggestions', 'Vorschläge'),
    'Aucun résultat, demandez-nous directement': L('Geen resultaat? Vraag het ons gerust rechtstreeks', 'No results? Simply ask us directly', 'Keine Ergebnisse? Fragen Sie uns einfach direkt'),

    // ----- Services -----
    'Au-delà du transport': L('Meer dan vervoer', 'Beyond transport', 'Mehr als Transport'),
    'Nos services': L('Onze diensten', 'Our services', 'Unsere Leistungen'),
    'Ponctualité garantie': L('Gegarandeerde stiptheid', 'Guaranteed punctuality', 'Garantierte Pünktlichkeit'),
    'Transferts aéroport &amp; gare': L('Luchthaven- &amp; stationstransfers', 'Airport &amp; train station transfers', 'Flughafen- &amp; Bahnhofstransfers'),
    'Prise en charge dans les aéroports et gares de Belgique et d\'Europe, avec accueil personnalisé, suivi de vol en temps réel et prix fixe garanti — pour commencer ou terminer votre voyage sans stress.': L(
      'Ophaling op luchthavens en stations in België en Europa, met persoonlijk onthaal, realtime opvolging van uw vlucht en een gegarandeerde vaste prijs — voor een zorgeloos begin of einde van uw reis.',
      'Pick-up at airports and railway stations across Belgium and Europe, with a personal welcome, real-time flight tracking and a guaranteed fixed price — so your journey begins and ends without a moment\'s stress.',
      'Abholung an Flughäfen und Bahnhöfen in Belgien und Europa, mit persönlichem Empfang, Flugverfolgung in Echtzeit und garantiertem Festpreis — für einen entspannten Start und ein entspanntes Ende Ihrer Reise.'),
    'Panneau d\'arrivées dans un terminal d\'aéroport — transfert privé Prestigia': L(
      'Aankomstbord in een luchthaventerminal — privétransfer van Prestigia',
      'Arrivals board in an airport terminal — Prestigia private transfer',
      'Ankunftstafel in einem Flughafenterminal — Privattransfer von Prestigia'),
    'À votre rythme': L('Op uw eigen tempo', 'At your own pace', 'In Ihrem Tempo'),
    'Un chauffeur et un véhicule pour toute la durée de votre journée — shopping, rendez-vous professionnels, visites en famille, plusieurs arrêts sans contrainte d\'horaire.': L(
      'Een chauffeur en een wagen voor uw hele dag — shoppen, zakelijke afspraken, familiebezoeken, meerdere stops zonder tijdsdruk.',
      'A chauffeur and vehicle for as long as your day requires — shopping, business meetings, family visits, multiple stops with no time constraints.',
      'Chauffeur und Fahrzeug für Ihren ganzen Tag — Shopping, Geschäftstermine, Familienbesuche, mehrere Stopps ohne Zeitdruck.'),
    'Flotte Prestigia et chauffeurs en tenue prêts pour une journée de mise à disposition': L(
      'Vloot en chauffeurs van Prestigia in uniform, klaar voor een dag ter beschikking',
      'Prestigia fleet and uniformed chauffeurs ready for a full day at your disposal',
      'Prestigia-Flotte und Chauffeure in Uniform, bereit für einen Tag zu Ihrer Verfügung'),
    'La Belgique autrement': L('België anders beleven', 'Belgium, differently', 'Belgien einmal anders'),
    'Découvrez les lieux incontournables de Belgique — Bruxelles, Bruges, Gand, Anvers — conduit par un chauffeur privé qui connaît la région, avec dépose et reprise aux points convenus (guide professionnel en option).': L(
      'Ontdek de mooiste plekken van België — Brussel, Brugge, Gent, Antwerpen — met een privéchauffeur die de regio kent en u afzet en weer ophaalt op de afgesproken plaatsen (professionele gids optioneel).',
      'Discover Belgium\'s must-see destinations — Brussels, Bruges, Ghent, Antwerp — with a private chauffeur who knows the region, dropping you off and picking you up at agreed points (professional guide available as an option).',
      'Entdecken Sie die schönsten Orte Belgiens — Brüssel, Brügge, Gent, Antwerpen — mit einem Privatchauffeur, der die Region kennt und Sie an vereinbarten Punkten absetzt und wieder abholt (professioneller Fremdenführer optional).'),
    'Canal illuminé au coucher du soleil à Bruges — tour touristique en chauffeur privé Prestigia': L(
      'Verlichte reitje bij zonsondergang in Brugge — toeristische tour met privéchauffeur van Prestigia',
      'Illuminated canal at sunset in Bruges — private sightseeing tour with a Prestigia chauffeur',
      'Beleuchteter Kanal bei Sonnenuntergang in Brügge — Sightseeing-Tour mit Privatchauffeur von Prestigia'),
    'Vivez l\'exception': L('Beleef het uitzonderlijke', 'Experience the exceptional', 'Erleben Sie das Außergewöhnliche'),
    'Réunions corporate, rendez-vous diplomatiques, congrès, expositions, galas, festivals, sport, mariages, anniversaires et autres — un transfert privé pensé pour chaque grand rendez-vous, en Belgique et en Europe.': L(
      'Zakelijke meetings, diplomatieke afspraken, congressen, beurzen, gala\'s, festivals, sport, huwelijken, verjaardagen en meer — een privétransfer op maat van elk belangrijk moment, in België en Europa.',
      'Corporate meetings, diplomatic engagements, conferences, exhibitions, galas, festivals, sporting events, weddings, birthdays and more — a private transfer designed for every important occasion, in Belgium and across Europe.',
      'Firmenmeetings, diplomatische Termine, Kongresse, Ausstellungen, Galas, Festivals, Sport, Hochzeiten, Geburtstage und mehr — ein Privattransfer für jeden großen Anlass, in Belgien und Europa.'),
    'Dîner de gala d\'entreprise avec écrans de présentation — chauffeur privé Prestigia pour vos événements': L(
      'Bedrijfsgaladiner met presentatieschermen — privéchauffeur van Prestigia voor uw evenementen',
      'Corporate gala dinner with presentation screens — Prestigia private chauffeur for your events',
      'Firmen-Galadinner mit Präsentationsbildschirmen — Privatchauffeur von Prestigia für Ihre Veranstaltungen'),
    'Location de véhicule, esthétique automobile, service sur-mesure, entreprises et plus encore.': L(
      'Voertuigverhuur, autoverzorging, maatwerk, oplossingen voor bedrijven en nog veel meer.',
      'Car rental, car detailing, bespoke service, corporate solutions and much more.',
      'Fahrzeugvermietung, Fahrzeugaufbereitung, maßgeschneiderter Service, Lösungen für Unternehmen und vieles mehr.'),
    'Voir tous nos services →': L('Bekijk al onze diensten →', 'View all our services →', 'Alle Leistungen ansehen →'),

    // ----- Flotte -----
    'Une gamme complète': L('Een volledig gamma', 'A complete range', 'Ein komplettes Angebot'),
    'Notre flotte': L('Onze vloot', 'Our fleet', 'Unsere Flotte'),
    'Véhicules de la flotte Prestigia': L('Wagens van de Prestigia-vloot', 'Vehicles in the Prestigia fleet', 'Fahrzeuge der Prestigia-Flotte'),
    'Berline — voir le véhicule dans notre flotte': L('Sedan — bekijk deze wagen in onze vloot', 'Sedan — view this vehicle in our fleet', 'Limousine — Fahrzeug in unserer Flotte ansehen'),
    'First Class — voir le véhicule dans notre flotte': L('First Class — bekijk deze wagen in onze vloot', 'First Class — view this vehicle in our fleet', 'First Class — Fahrzeug in unserer Flotte ansehen'),
    'Van — voir le véhicule dans notre flotte': L('Van — bekijk deze wagen in onze vloot', 'Van — view this vehicle in our fleet', 'Van — Fahrzeug in unserer Flotte ansehen'),
    'Minibus — voir le véhicule dans notre flotte': L('Minibus — bekijk deze wagen in onze vloot', 'Minibus — view this vehicle in our fleet', 'Minibus — Fahrzeug in unserer Flotte ansehen'),
    'Autocar — voir le véhicule dans notre flotte': L('Autocar — bekijk deze wagen in onze vloot', 'Coach — view this vehicle in our fleet', 'Reisebus — Fahrzeug in unserer Flotte ansehen'),
    'Berline': L('Sedan', 'Sedan', 'Limousine'),
    'Autocar': L('Autocar', 'Coach', 'Reisebus'),
    'Berline noire chauffeur privé Prestigia dans une rue pavée au cœur d\'un quartier historique européen': L(
      'Zwarte sedan van Prestigia in een kasseistraat in een historische Europese wijk',
      'Black Prestigia chauffeur-driven sedan on a cobbled street in a historic European quarter',
      'Schwarze Limousine von Prestigia in einer gepflasterten Straße eines historischen europäischen Viertels'),
    'Mercedes Classe S noire garée devant une façade classique — véhicule First Class de la flotte Prestigia': L(
      'Zwarte Mercedes S-Klasse voor een klassieke gevel — First Class-wagen van de Prestigia-vloot',
      'Black Mercedes S-Class parked in front of a classical façade — First Class vehicle in the Prestigia fleet',
      'Schwarze Mercedes S-Klasse vor einer klassischen Fassade — First-Class-Fahrzeug der Prestigia-Flotte'),
    'Mercedes Classe V noire portière ouverte en ville — véhicule Van de la flotte Prestigia': L(
      'Zwarte Mercedes V-Klasse met open deur in de stad — Van van de Prestigia-vloot',
      'Black Mercedes V-Class with its door open in the city — Van in the Prestigia fleet',
      'Schwarze Mercedes V-Klasse mit geöffneter Tür in der Stadt — Van der Prestigia-Flotte'),
    'Minibus noir Mercedes Sprinter du service chauffeur privé Prestigia pour le transport de groupes': L(
      'Zwarte Mercedes Sprinter-minibus van Prestigia voor groepsvervoer',
      'Black Mercedes Sprinter minibus from Prestigia for group transport',
      'Schwarzer Mercedes-Sprinter-Minibus von Prestigia für Gruppenfahrten'),
    'Sièges en cuir confortables à bord d\'un autocar Prestigia pour le transport de grands groupes': L(
      'Comfortabele lederen zetels aan boord van een Prestigia-autocar voor grote groepen',
      'Comfortable leather seats aboard a Prestigia coach for large groups',
      'Bequeme Ledersitze an Bord eines Prestigia-Reisebusses für große Gruppen'),
    'Mercedes Classe E · 1-3 pers.': L('Mercedes E-Klasse · 1-3 pers.', 'Mercedes E-Class · 1-3 pax', 'Mercedes E-Klasse · 1-3 Pers.'),
    'Mercedes Classe S · 1-3 pers.': L('Mercedes S-Klasse · 1-3 pers.', 'Mercedes S-Class · 1-3 pax', 'Mercedes S-Klasse · 1-3 Pers.'),
    'Mercedes Classe V · 1-7 pers.': L('Mercedes V-Klasse · 1-7 pers.', 'Mercedes V-Class · 1-7 pax', 'Mercedes V-Klasse · 1-7 Pers.'),
    'Mercedes Sprinter · 7-20 pers.': L('Mercedes Sprinter · 7-20 pers.', 'Mercedes Sprinter · 7-20 pax', 'Mercedes Sprinter · 7-20 Pers.'),
    'Grand tourisme · 20-50 pers.': L('Touringcar · 20-50 pers.', 'Luxury coach · 20-50 pax', 'Komfortklasse · 20-50 Pers.'),
    'Véhicule précédent': L('Vorige wagen', 'Previous vehicle', 'Vorheriges Fahrzeug'),
    'Véhicule suivant': L('Volgende wagen', 'Next vehicle', 'Nächstes Fahrzeug'),

    // ----- Identité -----
    'Pourquoi choisir Prestigia': L('Waarom kiezen voor Prestigia', 'Why choose Prestigia', 'Warum Prestigia'),
    'Une exigence d\'excellence': L('Een streven naar excellentie', 'Uncompromising excellence', 'Höchste Ansprüche'),
    'Chauffeur privé Prestigia aux côtés d\'un véhicule de luxe à Bruxelles': L(
      'Privéchauffeur van Prestigia naast een luxewagen in Brussel',
      'Prestigia private chauffeur beside a luxury vehicle in Brussels',
      'Privatchauffeur von Prestigia neben einem Luxusfahrzeug in Brüssel'),
    'Pourquoi Prestigia': L('Waarom Prestigia', 'Why Prestigia', 'Warum Prestigia'),
    'Un standard d\'excellence': L('Een standaard van excellentie', 'A standard of excellence', 'Ein Standard der Exzellenz'),
    'Service premium fondé sur la rigueur, l\'élégance et la fiabilité — en Belgique et en Europe.': L(
      'Een premium service, gebouwd op nauwgezetheid, elegantie en betrouwbaarheid — in België en Europa.',
      'A premium service built on precision, elegance and reliability — in Belgium and across Europe.',
      'Ein Premium-Service, der auf Sorgfalt, Eleganz und Zuverlässigkeit beruht — in Belgien und Europa.'),
    'Notre mission': L('Onze missie', 'Our mission', 'Unsere Mission'),
    'Bien plus qu\'un transport': L('Veel meer dan vervoer', 'Far more than transport', 'Weit mehr als Transport'),
    'Simplifier l\'organisation de vos déplacements tout en garantissant confort et excellence — transfert aéroport, rendez-vous professionnel ou service entièrement sur mesure en Belgique et en Europe.': L(
      'Uw verplaatsingen eenvoudiger maken, met de garantie van comfort en excellentie — luchthaventransfer, zakelijke afspraak of een volledig op maat gemaakte service in België en Europa.',
      'Making every journey effortless while guaranteeing comfort and excellence — whether an airport transfer, a business meeting or an entirely bespoke service in Belgium and Europe.',
      'Ihre Reiseorganisation vereinfachen und dabei Komfort und Exzellenz garantieren — ob Flughafentransfer, Geschäftstermin oder ein ganz auf Sie zugeschnittener Service in Belgien und Europa.'),
    'Chauffeurs multilingues': L('Meertalige chauffeurs', 'Multilingual chauffeurs', 'Mehrsprachige Chauffeure'),
    'Accueil en plusieurs langues.': L('Onthaal in meerdere talen.', 'Welcomed in your language.', 'Empfang in mehreren Sprachen.'),
    'Service discret': L('Discrete service', 'Discreet service', 'Diskreter Service'),
    'Confidentialité à chaque trajet.': L('Vertrouwelijkheid bij elke rit.', 'Confidentiality on every journey.', 'Vertraulichkeit auf jeder Fahrt.'),
    'Suivi en temps réel, sans retard.': L('Realtime opvolging, zonder vertraging.', 'Real-time tracking, never late.', 'Echtzeit-Verfolgung, ohne Verspätung.'),
    'Couverture européenne +15 pays': L('Actief in 15+ Europese landen', 'Coverage in 15+ European countries', 'Im Einsatz in über 15 Ländern Europas'),
    'De Bruxelles à toute l\'Europe.': L('Van Brussel naar heel Europa.', 'From Brussels to all of Europe.', 'Von Brüssel in ganz Europa.'),

    // ----- Destinations -----
    'Depuis et vers la Belgique': L('Van en naar België', 'To and from Belgium', 'Von und nach Belgien'),
    'Vos destinations': L('Uw bestemmingen', 'Your destinations', 'Ihre Reiseziele'),
    'Transfert en chauffeur privé Bruxelles ↔ Paris': L('Transfer met privéchauffeur Brussel ↔ Parijs', 'Private chauffeur transfer Brussels ↔ Paris', 'Transfer mit Privatchauffeur Brüssel ↔ Paris'),
    'Transfert en chauffeur privé Bruxelles ↔ Amsterdam': L('Transfer met privéchauffeur Brussel ↔ Amsterdam', 'Private chauffeur transfer Brussels ↔ Amsterdam', 'Transfer mit Privatchauffeur Brüssel ↔ Amsterdam'),
    'Transfert en chauffeur privé Bruxelles ↔ Anvers': L('Transfer met privéchauffeur Brussel ↔ Antwerpen', 'Private chauffeur transfer Brussels ↔ Antwerp', 'Transfer mit Privatchauffeur Brüssel ↔ Antwerpen'),
    'Transfert en chauffeur privé Bruxelles ↔ Gand': L('Transfer met privéchauffeur Brussel ↔ Gent', 'Private chauffeur transfer Brussels ↔ Ghent', 'Transfer mit Privatchauffeur Brüssel ↔ Gent'),
    'Transfert en chauffeur privé Bruxelles ↔ Bruges': L('Transfer met privéchauffeur Brussel ↔ Brugge', 'Private chauffeur transfer Brussels ↔ Bruges', 'Transfer mit Privatchauffeur Brüssel ↔ Brügge'),
    'France · ~320 km': L('Frankrijk · ~320 km', 'France · ~320 km', 'Frankreich · ~320 km'),
    'Pays-Bas · ~210 km': L('Nederland · ~210 km', 'Netherlands · ~210 km', 'Niederlande · ~210 km'),
    'Belgique · ~45 km': L('België · ~45 km', 'Belgium · ~45 km', 'Belgien · ~45 km'),
    'Belgique · ~55 km': L('België · ~55 km', 'Belgium · ~55 km', 'Belgien · ~55 km'),
    'Belgique · ~95 km': L('België · ~95 km', 'Belgium · ~95 km', 'Belgien · ~95 km'),
    'Votre destination n\'est pas listée ? Nous couvrons toute l\'Europe.': L(
      'Staat uw bestemming er niet bij? Wij rijden in heel Europa.',
      'Destination not listed? We cover the whole of Europe.',
      'Ihr Ziel ist nicht dabei? Wir fahren in ganz Europa.'),
    'Demander un devis personnalisé →': L('Persoonlijke offerte aanvragen →', 'Request a tailored quote →', 'Individuelles Angebot anfordern →'),

    // ----- Événements (le grand bloc est mis à jour par script.js) -----
    'Circuit de course sinueux vu du ciel — chauffeur privé Prestigia pour le Grand Prix de Belgique': L(
      'Bochtig racecircuit vanuit de lucht — privéchauffeur van Prestigia voor de Grote Prijs van België',
      'Winding race circuit seen from above — Prestigia private chauffeur for the Belgian Grand Prix',
      'Kurvenreiche Rennstrecke aus der Luft — Privatchauffeur von Prestigia zum Großen Preis von Belgien'),
    'Grand Prix de F1 de Belgique': L('Formule 1 Grote Prijs van België', 'Belgian F1 Grand Prix', 'Formel-1-Grand-Prix von Belgien'),
    'Spa-Francorchamps · Août': L('Spa-Francorchamps · Augustus', 'Spa-Francorchamps · August', 'Spa-Francorchamps · August'),
    'Foule de festival en liesse sous les projecteurs — transfert privé Prestigia pour Tomorrowland': L(
      'Uitgelaten festivalpubliek onder de spots — privétransfer van Prestigia naar Tomorrowland',
      'Euphoric festival crowd under the spotlights — Prestigia private transfer to Tomorrowland',
      'Ausgelassene Festivalmenge im Scheinwerferlicht — Privattransfer von Prestigia zum Tomorrowland'),
    'Boom · Juillet': L('Boom · Juli', 'Boom · July', 'Boom · Juli'),
    'Galerie d\'art avec tableaux encadrés — chauffeur privé Prestigia pour la Brafa à Bruxelles': L(
      'Kunstgalerij met ingelijste schilderijen — privéchauffeur van Prestigia voor de Brafa in Brussel',
      'Art gallery with framed paintings — Prestigia private chauffeur for Brafa in Brussels',
      'Kunstgalerie mit gerahmten Gemälden — Privatchauffeur von Prestigia zur Brafa in Brüssel'),
    'Bruxelles · Janvier': L('Brussel · Januari', 'Brussels · January', 'Brüssel · Januar'),
    'Couple élégant en tenue de soirée — chauffeur privé Prestigia pour le Red Cross Ball': L(
      'Elegant koppel in avondkledij — privéchauffeur van Prestigia voor het Red Cross Ball',
      'Elegant couple in evening dress — Prestigia private chauffeur for the Red Cross Ball',
      'Elegantes Paar in Abendgarderobe — Privatchauffeur von Prestigia zum Red Cross Ball'),
    'Voir tous les événements': L('Alle evenementen bekijken', 'View all events', 'Alle Veranstaltungen ansehen'),
    'Sport · Art · Galas · Festivals &amp; concerts': L('Sport · Kunst · Gala\'s · Festivals &amp; concerten', 'Sport · Art · Galas · Festivals &amp; concerts', 'Sport · Kunst · Galas · Festivals &amp; Konzerte'),

    // ----- Avis -----
    'Ce qu\'ils disent de nous': L('Wat onze klanten zeggen', 'What our clients say', 'Was unsere Kunden sagen'),
    'Avis clients': L('Klantenreviews', 'Client reviews', 'Kundenbewertungen'),
    '120+ avis': L('120+ reviews', '120+ reviews', '120+ Bewertungen'),
    '85+ avis': L('85+ reviews', '85+ reviews', '85+ Bewertungen'),
    '60+ avis': L('60+ reviews', '60+ reviews', '60+ Bewertungen'),
    '"Service impeccable pour notre transfert Bruxelles-Zaventem. Chauffeur ponctuel, véhicule parfait, discrétion totale. Exactement ce qu\'on attend d\'un service premium."': L(
      '"Onberispelijke service voor onze transfer Brussel-Zaventem. Stipte chauffeur, perfecte wagen, volledige discretie. Precies wat je van een premium service verwacht."',
      '"Impeccable service for our Brussels–Zaventem transfer. Punctual chauffeur, flawless vehicle, complete discretion. Exactly what you expect from a premium service."',
      '"Tadelloser Service für unseren Transfer Brüssel–Zaventem. Pünktlicher Chauffeur, perfektes Fahrzeug, absolute Diskretion. Genau das, was man von einem Premium-Service erwartet."'),
    'Directeur Commercial': L('Commercieel directeur', 'Sales Director', 'Vertriebsleiter'),
    '"Nous utilisons Prestigia pour tous nos déplacements corporate. Fiabilité et professionnalisme à chaque fois. Nos clients internationaux sont toujours impressionnés."': L(
      '"Voor al onze zakelijke verplaatsingen doen we een beroep op Prestigia. Elke keer betrouwbaar en professioneel. Onze internationale klanten zijn steeds onder de indruk."',
      '"We use Prestigia for all our corporate travel. Reliable and professional every single time. Our international clients are always impressed."',
      '"Wir nutzen Prestigia für alle unsere Geschäftsfahrten. Jedes Mal zuverlässig und professionell. Unsere internationalen Kunden sind immer beeindruckt."'),
    'CEO, Bruxelles': L('CEO, Brussel', 'CEO, Brussels', 'CEO, Brüssel'),
    '"Transfert CDG → Bruxelles sans aucun souci. Le chauffeur attendait à l\'heure, véhicule luxueux, trajet confortable. Je recommande vivement."': L(
      '"Transfer CDG → Brussel zonder enig probleem. De chauffeur stond stipt klaar, luxueuze wagen, comfortabele rit. Een echte aanrader."',
      '"CDG → Brussels transfer without a hitch. The chauffeur was waiting on time, luxurious vehicle, comfortable ride. Highly recommended."',
      '"Transfer CDG → Brüssel völlig problemlos. Der Chauffeur wartete pünktlich, luxuriöses Fahrzeug, angenehme Fahrt. Sehr zu empfehlen."'),
    'Voyageur d\'affaires': L('Zakenreiziger', 'Business traveller', 'Geschäftsreisender'),
    '"Expérience vraiment haut de gamme pour notre événement privé. Organisation parfaite, chauffeur discret et attentionné. Nous referons appel à Prestigia sans hésitation."': L(
      '"Een echte topervaring voor ons privéevenement. Perfecte organisatie, discrete en attente chauffeur. We doen zonder aarzelen opnieuw een beroep op Prestigia."',
      '"A truly high-end experience for our private event. Flawless organisation, a discreet and attentive chauffeur. We will not hesitate to call on Prestigia again."',
      '"Ein wirklich erstklassiges Erlebnis für unsere private Veranstaltung. Perfekte Organisation, ein diskreter und aufmerksamer Chauffeur. Wir buchen Prestigia jederzeit wieder."'),
    'Organisatrice d\'événements': L('Evenementenorganisator', 'Event organiser', 'Eventplanerin'),
    '"Réservation simple, réponse rapide, chauffeur professionnel. Le véhicule était impeccable. Un service qui mérite vraiment son positionnement premium."': L(
      '"Eenvoudig reserveren, snel antwoord, professionele chauffeur. De wagen was onberispelijk. Een service die zijn premiumreputatie echt waarmaakt."',
      '"Easy booking, quick response, professional chauffeur. The vehicle was immaculate. A service that truly lives up to its premium positioning."',
      '"Einfache Buchung, schnelle Antwort, professioneller Chauffeur. Das Fahrzeug war makellos. Ein Service, der seinem Premium-Anspruch wirklich gerecht wird."'),
    'Consultant, Anvers': L('Consultant, Antwerpen', 'Consultant, Antwerp', 'Berater, Antwerpen'),
    '"Tour touristique à Bruges absolument parfait. Chauffeur cultivé, ponctuel et de bon conseil. Une façon élégante de découvrir la Belgique."': L(
      '"Een absoluut perfecte tour in Brugge. Belezen en stipte chauffeur, met goede tips. Een elegante manier om België te ontdekken."',
      '"An absolutely perfect sightseeing tour of Bruges. A cultured, punctual chauffeur full of good advice. An elegant way to discover Belgium."',
      '"Eine absolut perfekte Tour durch Brügge. Gebildeter, pünktlicher Chauffeur mit guten Tipps. Eine elegante Art, Belgien zu entdecken."'),
    'Touriste, Paris': L('Toerist, Parijs', 'Tourist, Paris', 'Touristin, Paris'),

    // ----- L'essentiel -----
    'L\'essentiel en un coup d\'œil': L('Alles in één oogopslag', 'At a glance', 'Auf einen Blick'),
    'Transferts aéroport': L('Luchthaventransfers', 'Airport transfers', 'Flughafentransfers'),
    'Événements &amp; VIP': L('Evenementen &amp; VIP', 'Events &amp; VIP', 'Veranstaltungen &amp; VIP'),
    '24h/7j': L('24/7', '24/7', '24/7'),
    'Chauffeurs professionnels': L('Professionele chauffeurs', 'Professional chauffeurs', 'Professionelle Chauffeure'),
    'Discrétion garantie': L('Gegarandeerde discretie', 'Guaranteed discretion', 'Garantierte Diskretion')
  }
};
