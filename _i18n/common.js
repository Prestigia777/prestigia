/* Textes communs à toutes les pages : menu, menu mobile, footer.
   Clé = texte français tel qu'il est écrit dans le HTML (entités comprises, ex. &amp;).
   nl = néerlandais de Belgique. « Prestigia » ne se traduit jamais. */
module.exports = { seg: {
  // ----- Header -----
  'Langue': { nl: 'Taal', en: 'Language', de: 'Sprache' },
  'Prestigia — chauffeur privé et limousine de luxe à Bruxelles': {
    nl: 'Prestigia — privéchauffeur en luxelimousine in Brussel',
    en: 'Prestigia — private chauffeur and luxury limousine in Brussels',
    de: 'Prestigia — Privatchauffeur und Luxuslimousine in Brüssel' },
  'Accueil': { nl: 'Home', en: 'Home', de: 'Startseite' },
  'Chauffeur privé': { nl: 'Privéchauffeur', en: 'Private chauffeur', de: 'Privatchauffeur' },
  'Transfert aéroport &amp; gare': { nl: 'Luchthaven- &amp; stationstransfer', en: 'Airport &amp; train station transfers', de: 'Flughafen- &amp; Bahnhofstransfer' },
  'Voyages ville à ville': { nl: 'Van stad tot stad', en: 'City-to-city transfers', de: 'Von Stadt zu Stadt' },
  'International': { nl: 'Internationaal', en: 'International transfers', de: 'International' },
  'Mise à disposition': { nl: 'Chauffeur ter beschikking', en: 'Chauffeur by the hour', de: 'Chauffeur auf Stundenbasis' },
  'Tours touristiques': { nl: 'Toeristische tours', en: 'Private tours', de: 'Sightseeing-Touren' },
  'Événements': { nl: 'Evenementen', en: 'Events', de: 'Veranstaltungen' },
  'Espace Entreprises': { nl: 'Bedrijven', en: 'Corporate clients', de: 'Geschäftskunden' },
  'Espace Agences de voyage': { nl: 'Reisbureaus', en: 'Travel agencies', de: 'Reisebüros' },
  'Flotte': { nl: 'Vloot', en: 'Fleet', de: 'Flotte' },
  'Services': { nl: 'Diensten', en: 'Services', de: 'Leistungen' },
  'Location de véhicules': { nl: 'Voertuigverhuur', en: 'Car rental', de: 'Fahrzeugvermietung' },
  'Esthétique Automobile': { nl: 'Autoverzorging', en: 'Car detailing', de: 'Fahrzeugaufbereitung' },
  'Service sur-mesure': { nl: 'Maatwerk', en: 'Bespoke service', de: 'Maßgeschneiderter Service' },
  'Devis': { nl: 'Offerte', en: 'Get a quote', de: 'Angebot' },
  'Contact': { nl: 'Contact', en: 'Contact', de: 'Kontakt' },
  'Réserver': { nl: 'Reserveren', en: 'Book', de: 'Buchen' },
  'Ouvrir le menu': { nl: 'Menu openen', en: 'Open menu', de: 'Menü öffnen' },
  'Fermer le menu': { nl: 'Menu sluiten', en: 'Close menu', de: 'Menü schließen' },

  // ----- Footer -----
  'Prestigia — chauffeur privé et limousine à Bruxelles': {
    nl: 'Prestigia — privéchauffeur en limousine in Brussel',
    en: 'Prestigia — private chauffeur and limousine in Brussels',
    de: 'Prestigia — Privatchauffeur und Limousine in Brüssel' },
  'Chauffeur privé et limousine premium à Bruxelles, opérant en Europe. Service sur-mesure pour une clientèle exigeante.': {
    nl: 'Privéchauffeur en premium limousineservice in Brussel, actief in heel Europa. Een service op maat voor een veeleisende clientèle.',
    en: 'Private chauffeur and premium limousine service in Brussels, operating across Europe. A bespoke service for the most discerning clients.',
    de: 'Privatchauffeur und Premium-Limousinenservice in Brüssel, europaweit im Einsatz. Maßgeschneiderter Service für anspruchsvolle Kunden.' },
  'Chauffeur privé et limousine premium à Bruxelles, opérant en Europe.': {
    nl: 'Privéchauffeur en premium limousineservice in Brussel, actief in heel Europa.',
    en: 'Private chauffeur and premium limousine service in Brussels, operating across Europe.',
    de: 'Privatchauffeur und Premium-Limousinenservice in Brüssel, europaweit im Einsatz.' },
  'Navigation': { nl: 'Navigatie', en: 'Navigation', de: 'Navigation' },
  'Nous contacter': { nl: 'Contacteer ons', en: 'Get in touch', de: 'Kontakt aufnehmen' },
  'Email': { nl: 'E-mail', en: 'Email', de: 'E-Mail' },
  'WhatsApp / Téléphone': { nl: 'WhatsApp / Telefoon', en: 'WhatsApp / Phone', de: 'WhatsApp / Telefon' },
  'Suivez-nous': { nl: 'Volg ons', en: 'Follow us', de: 'Folgen Sie uns' },
  '&copy; 2026 Prestigia. Tous droits réservés.': {
    nl: '&copy; 2026 Prestigia. Alle rechten voorbehouden.',
    en: '&copy; 2026 Prestigia. All rights reserved.',
    de: '&copy; 2026 Prestigia. Alle Rechte vorbehalten.' },
  'Bruxelles, Belgique': { nl: 'Brussel, België', en: 'Brussels, Belgium', de: 'Brüssel, Belgien' },
  'Conditions générales': { nl: 'Algemene voorwaarden', en: 'Terms and conditions', de: 'Allgemeine Geschäftsbedingungen' },
  'Confidentialité': { nl: 'Privacy', en: 'Privacy', de: 'Datenschutz' },
  'Mentions légales': { nl: 'Wettelijke vermeldingen', en: 'Legal notice', de: 'Impressum' },

  // ----- Noms de lieux fréquents -----
  'Bruxelles': { nl: 'Brussel', en: 'Brussels', de: 'Brüssel' },
  'Paris': { nl: 'Parijs', en: 'Paris', de: 'Paris' },
  'Anvers': { nl: 'Antwerpen', en: 'Antwerp', de: 'Antwerpen' },
  'Gand': { nl: 'Gent', en: 'Ghent', de: 'Gent' },
  'Bruges': { nl: 'Brugge', en: 'Bruges', de: 'Brügge' },
  'Demander un devis': { nl: 'Offerte aanvragen', en: 'Request a quote', de: 'Angebot anfordern' },
  'En savoir plus': { nl: 'Meer weten', en: 'Discover more', de: 'Mehr erfahren' }
} };
