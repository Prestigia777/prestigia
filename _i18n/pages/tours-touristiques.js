/* tours-touristiques.html (+ textes communs aux pages de tours : carte, bloc à deux formules)
   Règles du CLAUDE.md dans chaque langue : billets jamais « toujours inclus », chauffeur jamais présenté comme guide,
   aucun repas inclus. Formule A = Transport privé, formule B = Visite clé en main. */
const L = (nl, en, de) => ({ nl, en, de });
module.exports = { seg: {
  // ----- Textes Google raccourcis (22/11/2026) -----
  'Tours privés en Belgique avec chauffeur : Bruxelles, Bruges, Gand, Anvers et tourisme de mémoire. Transport privé ou visite clé en main, sur devis.': L('Privétours in België met chauffeur: Brussel, Brugge, Gent, Antwerpen en herinneringstoerisme. Privévervoer of kant-en-klaar bezoek, op offerte.', 'Private tours in Belgium with a chauffeur: Brussels, Bruges, Ghent, Antwerp and remembrance tourism. Private transport or turnkey visit, on quotation.', 'Private Touren in Belgien mit Chauffeur: Brüssel, Brügge, Gent, Antwerpen und Erinnerungstourismus. Privattransport oder Rundum-Besuch, auf Anfrage.'),
  'Tours Touristiques en Belgique | Chauffeur privé PRESTIGIA': L('Toeristische tours in België | Privéchauffeur PRESTIGIA', 'Private Sightseeing Tours in Belgium | PRESTIGIA', 'Sightseeing-Touren in Belgien | Privatchauffeur PRESTIGIA'),
  'Chauffeur privé pour visiter les attractions touristiques de Belgique : Grand-Place et Atomium à Bruxelles, Beffroi de Bruges, Gravensteen à Gand — et les sites historiques des deux guerres mondiales : Ypres, Bastogne, plages du Débarquement en Normandie, Dunkerque, opération Market Garden aux Pays-Bas, Luxembourg. Tours sur-mesure avec Prestigia.': L(
    'Privéchauffeur om de toeristische trekpleisters van België te bezoeken: Grote Markt en Atomium in Brussel, Belfort van Brugge, Gravensteen in Gent — en de historische plaatsen van de twee wereldoorlogen: Ieper, Bastenaken, de landingsstranden in Normandië, Duinkerke, operatie Market Garden in Nederland, Luxemburg. Tours op maat met Prestigia.',
    'Private chauffeur to visit Belgium\'s top attractions: the Grand-Place and Atomium in Brussels, the Belfry of Bruges, the Gravensteen in Ghent — and the historic sites of both World Wars: Ypres, Bastogne, the D-Day beaches in Normandy, Dunkirk, Operation Market Garden in the Netherlands, Luxembourg. Bespoke tours with Prestigia.',
    'Privatchauffeur für die Sehenswürdigkeiten Belgiens: Grand-Place und Atomium in Brüssel, Belfried von Brügge, Gravensteen in Gent — und die historischen Stätten beider Weltkriege: Ypern, Bastogne, die Landungsstrände der Normandie, Dünkirchen, Operation Market Garden in den Niederlanden, Luxemburg. Maßgeschneiderte Touren mit Prestigia.'),
  'Tours Touristiques en Belgique | PRESTIGIA': L('Toeristische tours in België | PRESTIGIA', 'Private Sightseeing Tours in Belgium | PRESTIGIA', 'Sightseeing-Touren in Belgien | PRESTIGIA'),
  'Découvrez les attractions incontournables de Belgique et les sites historiques des deux guerres mondiales, avec un chauffeur privé qui vous dépose et vous reprend aux points convenus — Bruxelles, Bruges, Ypres, Bastogne, Normandie, Pays-Bas, Luxembourg.': L(
    'Ontdek de mooiste trekpleisters van België en de historische plaatsen van de twee wereldoorlogen, met een privéchauffeur die u afzet en weer ophaalt op de afgesproken plaatsen — Brussel, Brugge, Ieper, Bastenaken, Normandië, Nederland, Luxemburg.',
    'Discover Belgium\'s must-see attractions and the historic sites of both World Wars, with a private chauffeur who drops you off and picks you up at agreed points — Brussels, Bruges, Ypres, Bastogne, Normandy, the Netherlands, Luxembourg.',
    'Entdecken Sie die schönsten Sehenswürdigkeiten Belgiens und die historischen Stätten beider Weltkriege — mit einem Privatchauffeur, der Sie an vereinbarten Punkten absetzt und wieder abholt: Brüssel, Brügge, Ypern, Bastogne, Normandie, Niederlande, Luxemburg.'),
  'Tours touristiques en Belgique, avec chauffeur privé': L('Toeristische tours in België, met privéchauffeur', 'Private sightseeing tours in Belgium, with your own chauffeur', 'Sightseeing-Touren in Belgien, mit Privatchauffeur'),
  'Découvrez les lieux incontournables de Belgique — Bruxelles, Bruges, Gand, Anvers — ainsi que les grands sites historiques de la Première et de la Seconde Guerre mondiale, de Ypres à Bastogne jusqu\'à la côte française, conduit par un chauffeur privé qui connaît la région, avec dépose et reprise aux points convenus (guide professionnel en option). Une façon élégante de visiter, à votre rythme, sans les contraintes des transports en commun ni de la conduite.': L(
    'Ontdek de mooiste plekken van België — Brussel, Brugge, Gent, Antwerpen — en de grote historische plaatsen van de Eerste en Tweede Wereldoorlog, van Ieper tot Bastenaken en de Franse kust, met een privéchauffeur die de regio kent en u afzet en weer ophaalt op de afgesproken plaatsen (professionele gids optioneel). Een elegante manier om te bezoeken, op uw tempo, zonder de beperkingen van het openbaar vervoer of zelf te moeten rijden.',
    'Discover Belgium\'s must-see places — Brussels, Bruges, Ghent, Antwerp — and the great historic sites of the First and Second World Wars, from Ypres to Bastogne and on to the French coast, with a private chauffeur who knows the region, dropping you off and picking you up at agreed points (professional guide available as an option). An elegant way to explore at your own pace, free from public transport and driving.',
    'Entdecken Sie die schönsten Orte Belgiens — Brüssel, Brügge, Gent, Antwerpen — sowie die großen historischen Stätten des Ersten und Zweiten Weltkriegs, von Ypern über Bastogne bis zur französischen Küste, mit einem Privatchauffeur, der die Region kennt und Sie an vereinbarten Punkten absetzt und wieder abholt (professioneller Fremdenführer optional). Eine elegante Art zu reisen, in Ihrem Tempo, ohne öffentliche Verkehrsmittel und ohne selbst zu fahren.'),
  'Nos formules': L('Onze formules', 'Our options', 'Unsere Varianten'),
  'Une tournée pensée pour votre programme': L('Een rondrit afgestemd op uw programma', 'A tour designed around your programme', 'Eine Tour nach Ihrem Programm'),
  'Transfert aller-retour': L('Transfer heen en terug', 'Return transfer', 'Hin- und Rücktransfer'),
  'Une ville, un aller-retour dans la journée — simple et direct.': L('Eén stad, heen en terug op één dag — eenvoudig en rechtstreeks.', 'One city, there and back in a day — simple and direct.', 'Eine Stadt, hin und zurück an einem Tag — einfach und direkt.'),
  'Tournée multi-villes': L('Rondrit langs meerdere steden', 'Multi-city tour', 'Rundfahrt durch mehrere Städte'),
  'Bruxelles, Bruges, Gand et Anvers enchaînées en une seule sortie.': L('Brussel, Brugge, Gent en Antwerpen in één uitstap.', 'Brussels, Bruges, Ghent and Antwerp in a single outing.', 'Brüssel, Brügge, Gent und Antwerpen in einem einzigen Ausflug.'),
  'Formule multi-jours': L('Meerdaagse formule', 'Multi-day package', 'Mehrtägige Variante'),
  'Un même chauffeur pour toute la durée de votre séjour touristique.': L('Dezelfde chauffeur voor de hele duur van uw toeristische verblijf.', 'The same chauffeur for the whole of your stay.', 'Derselbe Chauffeur für Ihren gesamten Aufenthalt.'),
  'Le chauffeur attend à chaque étape, sans contrainte d\'horaire.': L('De chauffeur wacht bij elke etappe, zonder tijdsdruk.', 'The chauffeur waits at every stop, with no time constraints.', 'Der Chauffeur wartet an jeder Etappe, ganz ohne Zeitdruck.'),
  'Réservez votre tour touristique': L('Reserveer uw toeristische tour', 'Book your private sightseeing tour', 'Buchen Sie Ihre Sightseeing-Tour'),
  'Indiquez-nous les villes souhaitées et la durée — nous vous proposons un itinéraire sur mesure.': L('Geef ons de gewenste steden en de duur door — wij stellen u een route op maat voor.', 'Tell us the cities you would like to see and the duration — we will propose a bespoke itinerary.', 'Nennen Sie uns die gewünschten Städte und die Dauer — wir schlagen Ihnen eine individuelle Route vor.'),
  'Toutes nos destinations touristiques': L('Al onze toeristische bestemmingen', 'All our sightseeing destinations', 'Alle unsere touristischen Ziele'),
  'Tours sur mesure : transport privé seul ou visite clé en main (billets et réservations par nos soins), guide en option': L(
    'Tours op maat: enkel privévervoer of kant-en-klaar bezoek (tickets en reserveringen door ons), gids optioneel',
    'Bespoke tours: private transport only or a turnkey visit (tickets and bookings handled by us), guide optional',
    'Maßgeschneiderte Touren: nur Privattransport oder Besuch aus einer Hand (Tickets und Reservierungen durch uns), Fremdenführer optional'),
  'Détail doré de la Grand-Place de Bruxelles': L('Verguld detail van de Grote Markt van Brussel', 'Gilded detail on the Grand-Place in Brussels', 'Vergoldetes Detail der Grand-Place in Brüssel'),
  'Grand-Place · Atomium · Manneken Pis': L('Grote Markt · Atomium · Manneken Pis', 'Grand-Place · Atomium · Manneken Pis', 'Grand-Place · Atomium · Manneken Pis'),
  'Canal illuminé au coucher du soleil à Bruges': L('Verlichte reitje bij zonsondergang in Brugge', 'Illuminated canal at sunset in Bruges', 'Beleuchteter Kanal bei Sonnenuntergang in Brügge'),
  'Canaux · Béguinage · Markt': L('Reien · Begijnhof · Markt', 'Canals · Beguinage · Markt', 'Kanäle · Beginenhof · Markt'),
  'Quais historiques de Gand au coucher du soleil': L('Historische kaaien van Gent bij zonsondergang', 'Ghent\'s historic quays at sunset', 'Historische Kais von Gent bei Sonnenuntergang'),
  'Gravensteen · Graslei · Beffroi': L('Gravensteen · Graslei · Belfort', 'Gravensteen · Graslei · Belfry', 'Gravensteen · Graslei · Belfried'),
  'Architecture historique d\'Anvers de nuit': L('Historische architectuur van Antwerpen bij nacht', 'Antwerp\'s historic architecture by night', 'Historische Architektur Antwerpens bei Nacht'),
  'Cathédrale · MAS · Diamants': L('Kathedraal · MAS · Diamant', 'Cathedral · MAS · Diamonds', 'Kathedrale · MAS · Diamanten'),
  'Citadelle de Dinant illuminée la nuit, surplombant la Meuse': L('Verlichte citadel van Dinant bij nacht, hoog boven de Maas', 'Dinant citadel lit up at night, overlooking the Meuse', 'Beleuchtete Zitadelle von Dinant bei Nacht, hoch über der Maas'),
  'Autres villes': L('Andere steden', 'Other cities', 'Weitere Städte'),
  'Dinant · Namur · Durbuy · Waterloo': L('Dinant · Namen · Durbuy · Waterloo', 'Dinant · Namur · Durbuy · Waterloo', 'Dinant · Namur · Durbuy · Waterloo'),
  'Champ de coquelicots en Flandre, symbole de la mémoire de la Première Guerre mondiale': L('Klaprozenveld in Vlaanderen, symbool van de herinnering aan de Eerste Wereldoorlog', 'Poppy field in Flanders, symbol of the remembrance of the First World War', 'Mohnfeld in Flandern, Symbol der Erinnerung an den Ersten Weltkrieg'),
  'Tourisme de mémoire': L('Herinneringstoerisme', 'Remembrance tourism', 'Erinnerungstourismus'),
  'Ypres · Bastogne · Normandie · Dunkerque': L('Ieper · Bastenaken · Normandië · Duinkerke', 'Ypres · Bastogne · Normandy · Dunkirk', 'Ypern · Bastogne · Normandie · Dünkirchen'),
  'Catégories à explorer': L('Categorieën om te verkennen', 'Categories to explore', 'Kategorien entdecken'),
  'Attractions &amp; sites de mémoire': L('Trekpleisters &amp; herinneringsplaatsen', 'Attractions &amp; remembrance sites', 'Sehenswürdigkeiten &amp; Gedenkstätten'),

  // ----- Communs aux pages de tours : carte-itinéraire et bloc à deux formules -----
  'Itinéraire privé': L('Privéroute', 'Private itinerary', 'Private Route'),
  'N': L('N', 'N', 'N'),
  'Itinéraire indicatif, adaptable à votre programme': L('Indicatieve route, aanpasbaar aan uw programma', 'Indicative itinerary, adaptable to your programme', 'Richtroute, an Ihr Programm anpassbar'),
  'Schéma illustratif, hors échelle': L('Illustratief schema, niet op schaal', 'Illustrative diagram, not to scale', 'Schematische Darstellung, nicht maßstabsgetreu'),
  'Classé UNESCO': L('UNESCO-werelderfgoed', 'UNESCO-listed', 'UNESCO-Welterbe'),
  'Classé au patrimoine mondial de l\'UNESCO': L('Erkend als UNESCO-werelderfgoed', 'A UNESCO World Heritage Site', 'Zum UNESCO-Welterbe gehörend'),
  'Vous choisissez, nous organisons': L('U kiest, wij organiseren', 'You choose, we organise', 'Sie wählen, wir organisieren'),
  'Transport privé': L('Privévervoer', 'Private transport', 'Privattransport'),
  'Chauffeur et véhicule premium, dépose et reprise aux points convenus. Vous gérez vos billets.': L(
    'Chauffeur en premium wagen, afzet en ophaling op de afgesproken plaatsen. U regelt zelf uw tickets.',
    'Chauffeur and premium vehicle, drop-off and pick-up at agreed points. You handle your own tickets.',
    'Chauffeur und Premium-Fahrzeug, Absetzen und Abholen an vereinbarten Punkten. Ihre Tickets besorgen Sie selbst.'),
  'Visite clé en main': L('Kant-en-klaar bezoek', 'Turnkey visit', 'Besuch aus einer Hand'),
  'Transport privé, plus billets d\'entrée et créneaux réservés par nos soins. Seuls vos repas et vos dépenses personnelles restent à votre charge.': L(
    'Privévervoer, plus toegangstickets en tijdsloten die wij voor u reserveren. Enkel uw maaltijden en persoonlijke uitgaven blijven voor uw rekening.',
    'Private transport, plus entrance tickets and time slots booked by us. Only your meals and personal expenses remain at your own expense.',
    'Privattransport, dazu Eintrittskarten und Zeitfenster, die wir für Sie reservieren. Nur Ihre Mahlzeiten und persönlichen Ausgaben tragen Sie selbst.'),
  'Dans les deux cas : itinéraire modifiable, livret de visite remis à chaque client, guide professionnel en option sur devis.': L(
    'In beide gevallen: aanpasbare route, bezoekersboekje voor elke klant, professionele gids optioneel op offerte.',
    'In both cases: adjustable itinerary, a visit booklet for every client, professional guide available as an option on request.',
    'In beiden Fällen: anpassbare Route, Besuchsheft für jeden Gast, professioneller Fremdenführer optional auf Anfrage.'),
  'Demander ce tour': L('Deze tour aanvragen', 'Request this tour', 'Diese Tour anfragen'),
  'Tarif forfaitaire sur devis, selon le nombre de personnes et la formule choisie.': L(
    'Forfaitair tarief op offerte, volgens het aantal personen en de gekozen formule.',
    'Flat rate on quotation, depending on the number of people and the option chosen.',
    'Pauschalpreis auf Anfrage, je nach Personenzahl und gewählter Variante.'),
  'Les autres tours touristiques': L('De andere toeristische tours', 'Other private sightseeing tours', 'Weitere Sightseeing-Touren'),
  'Indiquez-nous les lieux souhaités et la durée — nous vous proposons un itinéraire sur mesure.': L('Geef ons de gewenste plaatsen en de duur door — wij stellen u een route op maat voor.', 'Tell us the places you would like to see and the duration — we will propose a bespoke itinerary.', 'Nennen Sie uns die gewünschten Orte und die Dauer — wir schlagen Ihnen eine individuelle Route vor.'),
  'Beffroi': L('Belfort', 'Belfry', 'Belfried')
} };
