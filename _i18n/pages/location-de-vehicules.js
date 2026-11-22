/* location-de-vehicules.html */
const L = (nl, en, de) => ({ nl, en, de });
module.exports = { seg: {
  // ----- Textes Google raccourcis (22/11/2026) -----
  'Louez un véhicule Prestigia avec ou sans chauffeur à Bruxelles : journée, mariage, tournage, week-end ou séjour complet. Un véhicule réservé pour vous.': L('Huur een wagen van Prestigia met of zonder chauffeur in Brussel: een dag, huwelijk, filmopname, weekend of volledig verblijf. Alleen voor u.', 'Rent a Prestigia vehicle with or without a chauffeur in Brussels: a day, a wedding, a film shoot, a weekend or a whole stay. Reserved just for you.', 'Mieten Sie ein Prestigia-Fahrzeug mit oder ohne Chauffeur in Brüssel: für einen Tag, Hochzeit, Dreh, Wochenende oder Aufenthalt. Nur für Sie.'),
  'Location de Véhicules avec ou sans Chauffeur | PRESTIGIA': L('Voertuigverhuur met of zonder chauffeur | PRESTIGIA', 'Car Rental with or without a Chauffeur | PRESTIGIA', 'Fahrzeugvermietung mit oder ohne Chauffeur | PRESTIGIA'),
  'Louez un véhicule Prestigia avec ou sans chauffeur à Bruxelles : pour une journée, un mariage, un tournage, un week-end ou un séjour complet — un véhicule réservé pour vous.': L(
    'Huur een Prestigia-wagen met of zonder chauffeur in Brussel: voor een dag, een huwelijk, een filmopname, een weekend of een volledig verblijf — een wagen exclusief voor u.',
    'Hire a Prestigia vehicle with or without a chauffeur in Brussels: for a day, a wedding, a film shoot, a weekend or an entire stay — a vehicle reserved just for you.',
    'Mieten Sie ein Prestigia-Fahrzeug mit oder ohne Chauffeur in Brüssel: für einen Tag, eine Hochzeit, einen Dreh, ein Wochenende oder einen ganzen Aufenthalt — ein Fahrzeug nur für Sie.'),
  'Un véhicule Prestigia réservé pour vous, avec ou sans chauffeur, le temps d\'un événement ou d\'un séjour.': L(
    'Een Prestigia-wagen voor u gereserveerd, met of zonder chauffeur, voor een evenement of een verblijf.',
    'A Prestigia vehicle reserved for you, with or without a chauffeur, for an event or a stay.',
    'Ein Prestigia-Fahrzeug für Sie reserviert, mit oder ohne Chauffeur, für eine Veranstaltung oder einen Aufenthalt.'),
  'Location de véhicules avec ou sans chauffeur': L('Voertuigverhuur met of zonder chauffeur', 'Car rental with or without a chauffeur', 'Fahrzeugvermietung mit oder ohne Chauffeur'),
  'Un véhicule Prestigia réservé exclusivement pour vous, conduit par l\'un de nos chauffeurs ou par vous-même, le temps d\'un mariage, d\'un tournage, d\'un week-end ou d\'un séjour complet.': L(
    'Een Prestigia-wagen exclusief voor u, bestuurd door een van onze chauffeurs of door uzelf, voor een huwelijk, een filmopname, een weekend of een volledig verblijf.',
    'A Prestigia vehicle reserved exclusively for you, driven by one of our chauffeurs or by yourself, for a wedding, a film shoot, a weekend or an entire stay.',
    'Ein Prestigia-Fahrzeug exklusiv für Sie, gefahren von einem unserer Chauffeure oder von Ihnen selbst — für eine Hochzeit, einen Dreh, ein Wochenende oder einen ganzen Aufenthalt.'),
  'Deux formules, un même standard': L('Twee formules, één standaard', 'Two options, one standard', 'Zwei Varianten, ein Standard'),
  'Avec ou sans chauffeur, à vous de choisir': L('Met of zonder chauffeur, u kiest', 'With or without a chauffeur — the choice is yours', 'Mit oder ohne Chauffeur — Sie haben die Wahl'),
  'Un chauffeur professionnel prend le volant : vous profitez du trajet, pour un mariage, un tournage ou un séjour complet.': L(
    'Een professionele chauffeur neemt het stuur: u geniet van de rit, voor een huwelijk, een filmopname of een volledig verblijf.',
    'A professional chauffeur takes the wheel: you enjoy the ride, for a wedding, a film shoot or an entire stay.',
    'Ein professioneller Chauffeur übernimmt das Steuer: Sie genießen die Fahrt — bei einer Hochzeit, einem Dreh oder einem ganzen Aufenthalt.'),
  'Vous prenez vous-même le volant d\'un véhicule Prestigia entretenu avec soin, pour une journée, un week-end ou plus longtemps.': L(
    'U neemt zelf het stuur van een zorgvuldig onderhouden Prestigia-wagen, voor een dag, een weekend of langer.',
    'You take the wheel of a carefully maintained Prestigia vehicle yourself, for a day, a weekend or longer.',
    'Sie fahren selbst ein sorgfältig gepflegtes Prestigia-Fahrzeug — für einen Tag, ein Wochenende oder länger.'),
  'Sur la durée choisie': L('Voor de gekozen duur', 'For the duration you choose', 'Für die gewählte Dauer'),
  'Quelques heures, une journée ou plusieurs jours : le véhicule vous est réservé, sans partage avec d\'autres clients.': L(
    'Enkele uren, een dag of meerdere dagen: de wagen is voor u gereserveerd, zonder delen met andere klanten.',
    'A few hours, a day or several days: the vehicle is reserved for you alone, never shared with other clients.',
    'Einige Stunden, ein Tag oder mehrere Tage: Das Fahrzeug ist für Sie reserviert und wird nicht mit anderen Kunden geteilt.'),
  'Réservez votre véhicule, avec ou sans chauffeur': L('Reserveer uw wagen, met of zonder chauffeur', 'Book your vehicle, with or without a chauffeur', 'Buchen Sie Ihr Fahrzeug, mit oder ohne Chauffeur'),
  'Indiquez-nous la durée, l\'occasion, le véhicule souhaité et si vous voulez un chauffeur — nous revenons vers vous avec une proposition adaptée.': L(
    'Laat ons de duur, de gelegenheid, de gewenste wagen weten en of u een chauffeur wenst — wij komen bij u terug met een voorstel op maat.',
    'Tell us the duration, the occasion, the vehicle you would like and whether you want a chauffeur — we will come back to you with a tailored proposal.',
    'Nennen Sie uns Dauer, Anlass, gewünschtes Fahrzeug und ob Sie einen Chauffeur möchten — wir melden uns mit einem passenden Vorschlag.'),
  'Comment ça marche': L('Hoe werkt het?', 'How it works', 'So funktioniert es'),
  'Vous conduisez, ou nous conduisons pour vous': L('U rijdt, of wij rijden voor u', 'You drive, or we drive for you', 'Sie fahren — oder wir fahren für Sie'),
  'Avec chauffeur, vous réservez le véhicule et la disponibilité d\'un chauffeur professionnel : nous assurons la conduite, la ponctualité et la discrétion. Sans chauffeur, vous prenez vous-même le volant d\'un véhicule de la flotte Prestigia.': L(
    'Met chauffeur reserveert u de wagen en een professionele chauffeur: wij zorgen voor het rijden, de stiptheid en de discretie. Zonder chauffeur neemt u zelf het stuur van een wagen uit de Prestigia-vloot.',
    'With a chauffeur, you book the vehicle and a professional chauffeur: we handle the driving, punctuality and discretion. Self-drive, you take the wheel of a vehicle from the Prestigia fleet yourself.',
    'Mit Chauffeur buchen Sie das Fahrzeug und einen professionellen Chauffeur: Wir sorgen für Fahrt, Pünktlichkeit und Diskretion. Ohne Chauffeur fahren Sie selbst ein Fahrzeug der Prestigia-Flotte.'),
  'Dans les deux cas, le véhicule reste exclusivement à votre service pendant toute la durée convenue. Les conditions de la location sans chauffeur vous sont précisées avec le devis.': L(
    'In beide gevallen blijft de wagen gedurende de hele afgesproken periode exclusief tot uw dienst. De voorwaarden voor huur zonder chauffeur ontvangt u samen met de offerte.',
    'In both cases, the vehicle remains exclusively at your service for the entire agreed period. The terms for self-drive hire are set out with your quote.',
    'In beiden Fällen steht Ihnen das Fahrzeug während der gesamten vereinbarten Dauer exklusiv zur Verfügung. Die Bedingungen für die Miete ohne Chauffeur erhalten Sie mit dem Angebot.'),
  'Avec chauffeur : véhicule et chauffeur dédiés sur la durée choisie': L('Met chauffeur: vaste wagen en chauffeur voor de gekozen duur', 'With chauffeur: dedicated vehicle and chauffeur for the chosen duration', 'Mit Chauffeur: Fahrzeug und Chauffeur exklusiv für die gewählte Dauer'),
  'Sans chauffeur : vous conduisez, à votre rythme': L('Zonder chauffeur: u rijdt zelf, op uw tempo', 'Self-drive: you drive, at your own pace', 'Ohne Chauffeur: Sie fahren selbst, in Ihrem Tempo'),
  'Adapté aux événements privés comme professionnels': L('Geschikt voor privé- én zakelijke evenementen', 'Suited to private and professional events alike', 'Für private wie geschäftliche Anlässe'),
  'Devis personnalisé selon la durée et le véhicule souhaité': L('Persoonlijke offerte volgens duur en gewenste wagen', 'Tailored quote based on duration and vehicle', 'Individuelles Angebot nach Dauer und Fahrzeug'),
  'Véhicule de luxe Prestigia prêt pour une mise à disposition prolongée': L('Luxewagen van Prestigia klaar voor een langere terbeschikkingstelling', 'Prestigia luxury vehicle ready for extended hire', 'Luxusfahrzeug von Prestigia bereit für eine längere Miete')
} };
