/* paris.html (+ textes communs aux 5 pages de villes) */
const L = (nl, en, de) => ({ nl, en, de });
module.exports = { seg: {
  'Chauffeur Privé Bruxelles → Paris | PRESTIGIA': L('Privéchauffeur Brussel → Parijs | PRESTIGIA', 'Private Chauffeur Brussels → Paris | PRESTIGIA', 'Privatchauffeur Brüssel → Paris | PRESTIGIA'),
  'Transfert privé Bruxelles-Paris avec Prestigia : prix fixe, prise en charge porte-à-porte, chauffeur bilingue. Idéal pour affaires, shopping ou événements.': L(
    'Privétransfer Brussel-Parijs met Prestigia: vaste prijs, van deur tot deur, tweetalige chauffeur. Ideaal voor zaken, shopping of evenementen.',
    'Private Brussels–Paris transfer with Prestigia: fixed price, door-to-door pick-up, bilingual chauffeur. Ideal for business, shopping or events.',
    'Privattransfer Brüssel–Paris mit Prestigia: Festpreis, Abholung von Tür zu Tür, zweisprachiger Chauffeur. Ideal für Geschäftsreisen, Shopping oder Events.'),
  'Transfert privé Bruxelles-Paris avec Prestigia — prix fixe, porte-à-porte, chauffeur bilingue.': L(
    'Privétransfer Brussel-Parijs met Prestigia — vaste prijs, van deur tot deur, tweetalige chauffeur.',
    'Private Brussels–Paris transfer with Prestigia — fixed price, door to door, bilingual chauffeur.',
    'Privattransfer Brüssel–Paris mit Prestigia — Festpreis, von Tür zu Tür, zweisprachiger Chauffeur.'),
  'Paris, destination desservie par Prestigia depuis Bruxelles': L('Parijs, bestemming van Prestigia vanuit Brussel', 'Paris, a destination served by Prestigia from Brussels', 'Paris, ein Ziel von Prestigia ab Brüssel'),
  'Destination': L('Bestemming', 'Destination', 'Reiseziel'),
  'Chauffeur privé Bruxelles → Paris': L('Privéchauffeur Brussel → Parijs', 'Private chauffeur Brussels → Paris', 'Privatchauffeur Brüssel → Paris'),
  'Un transfert privé confortable entre Bruxelles et Paris, porte-à-porte, sans les contraintes d\'une gare ou d\'un aéroport.': L(
    'Een comfortabele privétransfer tussen Brussel en Parijs, van deur tot deur, zonder de beperkingen van een station of luchthaven.',
    'A comfortable private transfer between Brussels and Paris, door to door, without the constraints of a station or airport.',
    'Ein komfortabler Privattransfer zwischen Brüssel und Paris, von Tür zu Tür, ohne die Zwänge von Bahnhof oder Flughafen.'),
  '~320 km': L('~320 km', '~320 km', '~320 km'), '~210 km': L('~210 km', '~210 km', '~210 km'), '~45 km': L('~45 km', '~45 km', '~45 km'),
  '~55 km': L('~55 km', '~55 km', '~55 km'), '~95 km': L('~95 km', '~95 km', '~95 km'),
  '~3h00': L('~3u00', '~3h00', '~3 Std.'), '~2h15': L('~2u15', '~2h15', '~2 Std. 15'), '~40 min': L('~40 min', '~40 min', '~40 Min.'),
  '~45 min': L('~45 min', '~45 min', '~45 Min.'), '~1h15': L('~1u15', '~1h15', '~1 Std. 15'),
  'Distance depuis Bruxelles': L('Afstand vanuit Brussel', 'Distance from Brussels', 'Entfernung ab Brüssel'),
  'Durée moyenne du trajet': L('Gemiddelde reisduur', 'Average journey time', 'Durchschnittliche Fahrzeit'),
  'Réservez votre trajet vers Paris': L('Reserveer uw rit naar Parijs', 'Book your journey to Paris', 'Buchen Sie Ihre Fahrt nach Paris'),
  'Indiquez votre date et votre lieu de prise en charge — nous vous confirmons un prix fixe pour ce trajet.': L(
    'Geef uw datum en ophaalplaats door — wij bevestigen u een vaste prijs voor deze rit.',
    'Tell us your date and pick-up location — we will confirm a fixed price for this journey.',
    'Nennen Sie uns Datum und Abholort — wir bestätigen Ihnen einen Festpreis für diese Fahrt.'),
  'Un trajet pensé pour l\'efficacité': L('Een rit ontworpen voor efficiëntie', 'A journey designed for efficiency', 'Eine Fahrt, auf Effizienz ausgelegt'),
  'Que ce soit pour un rendez-vous d\'affaires, une session shopping ou un grand événement parisien comme le Grand Prix ou la Fashion Week, Prestigia vous conduit directement à destination, sans changement ni file d\'attente.': L(
    'Of het nu gaat om een zakelijke afspraak, een shoppingdag of een groot Parijs evenement zoals de Grand Prix of de Fashion Week: Prestigia brengt u rechtstreeks naar uw bestemming, zonder overstap of wachtrij.',
    'Whether for a business meeting, a shopping trip or a major Parisian event such as the Grand Prix or Fashion Week, Prestigia drives you straight to your destination, with no changes and no queues.',
    'Ob Geschäftstermin, Shoppingtag oder ein großes Pariser Event wie der Grand Prix oder die Fashion Week: Prestigia bringt Sie direkt ans Ziel, ohne Umsteigen und ohne Warteschlange.'),
  'Le trajet se fait à votre rythme : travaillez, reposez-vous ou profitez du paysage — votre chauffeur s\'occupe du reste.': L(
    'De rit verloopt op uw tempo: werk, rust uit of geniet van het landschap — uw chauffeur zorgt voor de rest.',
    'The journey runs at your pace: work, rest or enjoy the scenery — your chauffeur takes care of the rest.',
    'Die Fahrt verläuft in Ihrem Tempo: Arbeiten, entspannen oder die Landschaft genießen — Ihr Chauffeur kümmert sich um den Rest.'),
  'Prix fixe, sans surprise liée au trafic': L('Vaste prijs, zonder verrassingen door het verkeer', 'Fixed price, no surprises due to traffic', 'Festpreis, ohne Überraschungen durch den Verkehr'),
  'Prise en charge à l\'adresse de votre choix': L('Ophaling op het adres van uw keuze', 'Pick-up at the address of your choice', 'Abholung an der Adresse Ihrer Wahl'),
  'Chauffeur bilingue, discrétion assurée': L('Tweetalige chauffeur, discretie verzekerd', 'Bilingual chauffeur, discretion assured', 'Zweisprachiger Chauffeur, Diskretion garantiert'),
  'Véhicule haut de gamme, Wi-Fi et eau à bord': L('Topwagen, wifi en water aan boord', 'High-end vehicle, Wi-Fi and water on board', 'Premium-Fahrzeug, WLAN und Wasser an Bord'),
  'Intérieur soigné d\'un véhicule Prestigia': L('Verzorgd interieur van een Prestigia-wagen', 'Immaculate interior of a Prestigia vehicle', 'Gepflegter Innenraum eines Prestigia-Fahrzeugs')
} };
