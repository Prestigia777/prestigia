/* transfert-aeroport-and-gare.html */
const L = (nl, en, de) => ({ nl, en, de });
module.exports = { seg: {
  // ----- Textes Google raccourcis (22/11/2026) -----
  'Transferts privés vers les aéroports de Zaventem, Charleroi et Liège et les gares belges : suivi de vol, accueil personnalisé, prix fixe garanti.': L('Privétransfers naar de luchthavens van Zaventem, Charleroi en Luik en de Belgische stations: vluchtopvolging, persoonlijk onthaal, vaste prijs.', 'Private transfers to Brussels, Charleroi and Liège airports and Belgian train stations: flight tracking, personal welcome, guaranteed fixed price.', 'Privattransfers zu den Flughäfen Zaventem, Charleroi und Lüttich und zu Belgiens Bahnhöfen: Flugverfolgung, persönlicher Empfang, Festpreis.'),
  'Transfert Aéroport &amp; Gare | Chauffeur privé PRESTIGIA': L('Luchthaven- &amp; stationstransfer | Privéchauffeur PRESTIGIA', 'Airport &amp; Train Station Transfers | PRESTIGIA', 'Flughafen- &amp; Bahnhofstransfer | Privatchauffeur PRESTIGIA'),
  'Transferts privés vers les aéroports belges (Zaventem, Charleroi, Liège) et les gares belges — suivi de vol en temps réel, accueil personnalisé, prix fixe garanti.': L(
    'Privétransfers naar de Belgische luchthavens (Zaventem, Charleroi, Luik) en stations — realtime vluchtopvolging, persoonlijk onthaal, gegarandeerde vaste prijs.',
    'Private transfers to Belgian airports (Zaventem, Charleroi, Liège) and railway stations — real-time flight tracking, personal welcome, guaranteed fixed price.',
    'Privattransfers zu den belgischen Flughäfen (Zaventem, Charleroi, Lüttich) und Bahnhöfen — Flugverfolgung in Echtzeit, persönlicher Empfang, garantierter Festpreis.'),
  'Transfert Aéroport &amp; Gare | PRESTIGIA': L('Luchthaven- &amp; stationstransfer | PRESTIGIA', 'Airport &amp; Train Station Transfers | PRESTIGIA', 'Flughafen- &amp; Bahnhofstransfer | PRESTIGIA'),
  'Suivi de vol en temps réel, accueil personnalisé, prix fixe garanti — les transferts aéroport &amp; gare Prestigia à Bruxelles.': L(
    'Realtime vluchtopvolging, persoonlijk onthaal, gegarandeerde vaste prijs — de luchthaven- en stationstransfers van Prestigia in Brussel.',
    'Real-time flight tracking, personal welcome, guaranteed fixed price — Prestigia airport &amp; train station transfers in Brussels.',
    'Flugverfolgung in Echtzeit, persönlicher Empfang, garantierter Festpreis — die Flughafen- und Bahnhofstransfers von Prestigia in Brüssel.'),
  'Salon aéroport au coucher du soleil avec vue sur les avions — transferts Prestigia': L('Luchthavenlounge bij zonsondergang met zicht op de vliegtuigen — transfers van Prestigia', 'Airport lounge at sunset overlooking the aircraft — Prestigia transfers', 'Flughafen-Lounge bei Sonnenuntergang mit Blick auf die Flugzeuge — Transfers von Prestigia'),
  'Transferts aéroport et gare, sans stress': L('Luchthaven- en stationstransfers, zonder stress', 'Stress-free airport and train station transfers', 'Flughafen- und Bahnhofstransfers ohne Stress'),
  'Zaventem, Charleroi, Bruxelles-Midi, Anvers, Liège — un chauffeur vous attend, où que vous arriviez, sans jamais penser à la logistique.': L(
    'Zaventem, Charleroi, Brussel-Zuid, Antwerpen, Luik — waar u ook aankomt, er wacht een chauffeur op u, zonder dat u aan de logistiek hoeft te denken.',
    'Zaventem, Charleroi, Brussels-Midi, Antwerp, Liège — wherever you arrive, a chauffeur is waiting for you, with no logistics to think about.',
    'Zaventem, Charleroi, Brüssel-Süd, Antwerpen, Lüttich — wo immer Sie ankommen, ein Chauffeur erwartet Sie, ganz ohne Gedanken an die Logistik.'),
  'L\'essentiel, sans imprévu': L('Het essentiële, zonder verrassingen', 'The essentials, without surprises', 'Das Wesentliche, ohne Überraschungen'),
  'Un transfert pensé pour votre tranquillité': L('Een transfer voor uw gemoedsrust', 'A transfer designed for your peace of mind', 'Ein Transfer für Ihre Gelassenheit'),
  'Suivi de vol en temps réel': L('Realtime vluchtopvolging', 'Real-time flight tracking', 'Flugverfolgung in Echtzeit'),
  'Votre chauffeur ajuste automatiquement l\'heure de prise en charge en cas de retard ou d\'avance — vous n\'attendez jamais inutilement.': L(
    'Uw chauffeur past het ophaaluur automatisch aan bij vertraging of vervroeging — u wacht nooit onnodig.',
    'Your chauffeur automatically adjusts the pick-up time if your flight is early or late — you never wait unnecessarily.',
    'Ihr Chauffeur passt die Abholzeit bei Verspätung oder früherer Ankunft automatisch an — Sie warten nie unnötig.'),
  'Accueil personnalisé': L('Persoonlijk onthaal', 'Personal welcome', 'Persönlicher Empfang'),
  'Votre chauffeur vous attend à l\'intérieur du terminal, pancarte à votre nom, pour une prise en charge fluide dès la sortie des bagages.': L(
    'Uw chauffeur wacht op u in de terminal, met een naambord, voor een vlotte ontvangst zodra u uw bagage hebt.',
    'Your chauffeur waits for you inside the terminal with a name sign, for a seamless pick-up as soon as you leave baggage reclaim.',
    'Ihr Chauffeur erwartet Sie im Terminal mit einem Namensschild — für einen reibungslosen Empfang direkt nach der Gepäckausgabe.'),
  'Le tarif est confirmé à la réservation : le trafic n\'a aucune incidence sur le prix final.': L(
    'Het tarief wordt bij de reservering bevestigd: het verkeer heeft geen invloed op de eindprijs.',
    'The fare is confirmed when you book: traffic has no effect on the final price.',
    'Der Preis wird bei der Buchung bestätigt: Der Verkehr hat keinen Einfluss auf den Endpreis.'),
  'Réservez votre transfert aéroport ou gare': L('Reserveer uw luchthaven- of stationstransfer', 'Book your airport or train station transfer', 'Buchen Sie Ihren Flughafen- oder Bahnhofstransfer'),
  'Indiquez votre vol, votre train ou votre horaire — nous nous occupons du reste.': L(
    'Geef uw vlucht, trein of uur door — wij zorgen voor de rest.',
    'Give us your flight, train or schedule — we will take care of the rest.',
    'Nennen Sie uns Ihren Flug, Ihren Zug oder Ihre Uhrzeit — um den Rest kümmern wir uns.'),
  'Comment ça se passe': L('Hoe het verloopt', 'How it works', 'So läuft es ab'),
  'De l\'aéroport ou de la gare à votre destination, sans rupture': L('Van luchthaven of station naar uw bestemming, zonder onderbreking', 'From the airport or station to your destination, seamlessly', 'Vom Flughafen oder Bahnhof nahtlos an Ihr Ziel'),
  'Que vous arriviez à Brussels Airport (Zaventem), à Brussels South Charleroi Airport, ou dans l\'une des grandes gares belges — Bruxelles-Midi, Anvers-Central, Liège-Guillemins et bien d\'autres — votre chauffeur est informé de votre horaire réel et vous attend au point convenu.': L(
    'Of u nu aankomt op Brussels Airport (Zaventem), Brussels South Charleroi Airport of in een van de grote Belgische stations — Brussel-Zuid, Antwerpen-Centraal, Luik-Guillemins en vele andere — uw chauffeur kent uw werkelijke aankomstuur en wacht op u op de afgesproken plaats.',
    'Whether you arrive at Brussels Airport (Zaventem), Brussels South Charleroi Airport or one of Belgium\'s major railway stations — Brussels-Midi, Antwerp-Central, Liège-Guillemins and many more — your chauffeur knows your actual arrival time and waits for you at the agreed meeting point.',
    'Ob Sie am Brussels Airport (Zaventem), am Brussels South Charleroi Airport oder an einem der großen belgischen Bahnhöfe ankommen — Brüssel-Süd, Antwerpen-Centraal, Lüttich-Guillemins und viele mehr —, Ihr Chauffeur kennt Ihre tatsächliche Ankunftszeit und erwartet Sie am vereinbarten Treffpunkt.'),
  'Assistance bagages, véhicule climatisé, trajet direct vers votre hôtel, bureau ou domicile : chaque détail est réglé avant votre arrivée.': L(
    'Hulp met de bagage, een wagen met airco, een rechtstreekse rit naar uw hotel, kantoor of woning: elk detail is geregeld vóór uw aankomst.',
    'Help with your luggage, an air-conditioned vehicle, a direct journey to your hotel, office or home: every detail is arranged before you arrive.',
    'Hilfe beim Gepäck, klimatisiertes Fahrzeug, direkte Fahrt zu Ihrem Hotel, Büro oder Zuhause: Jedes Detail ist vor Ihrer Ankunft geregelt.'),
  'Aéroports : Brussels Airport – Zaventem (BRU), Brussels South Charleroi Airport (CRL), Liège Airport (LGG)': L(
    'Luchthavens: Brussels Airport – Zaventem (BRU), Brussels South Charleroi Airport (CRL), Liège Airport (LGG)',
    'Airports: Brussels Airport – Zaventem (BRU), Brussels South Charleroi Airport (CRL), Liège Airport (LGG)',
    'Flughäfen: Brussels Airport – Zaventem (BRU), Brussels South Charleroi Airport (CRL), Liège Airport (LGG)'),
  'Gares : Bruxelles-Midi, Bruxelles-Central, Anvers-Central, Gand-Saint-Pierre, Liège-Guillemins': L(
    'Stations: Brussel-Zuid, Brussel-Centraal, Antwerpen-Centraal, Gent-Sint-Pieters, Luik-Guillemins',
    'Stations: Brussels-Midi, Brussels-Central, Antwerp-Central, Ghent-Sint-Pieters, Liège-Guillemins',
    'Bahnhöfe: Brüssel-Süd, Brüssel-Zentral, Antwerpen-Centraal, Gent-Sint-Pieters, Lüttich-Guillemins'),
  'Assistance bagages incluse': L('Hulp met de bagage inbegrepen', 'Luggage assistance included', 'Gepäckservice inklusive'),
  'Disponible 24h/7j, y compris vols et trains de nuit': L('24/7 beschikbaar, ook voor nachtvluchten en nachttreinen', 'Available 24/7, including night flights and trains', 'Rund um die Uhr verfügbar, auch bei Nachtflügen und -zügen'),
  'Horloge et train en gare d\'Anvers-Central — transferts gare Prestigia': L('Klok en trein in het station Antwerpen-Centraal — stationstransfers van Prestigia', 'Clock and train at Antwerp-Central station — Prestigia train station transfers', 'Uhr und Zug im Bahnhof Antwerpen-Centraal — Bahnhofstransfers von Prestigia'),
  '+15 pays': L('15+ landen', '15+ countries', 'Über 15 Länder'),
  'Couverture européenne': L('Europese dekking', 'European coverage', 'Europaweite Abdeckung')
} };
