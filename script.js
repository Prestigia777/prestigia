  // header background on scroll
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // mobile nav
  var mobileNav = document.getElementById('mobileNav');
  document.getElementById('burgerBtn').addEventListener('click', function(){
    mobileNav.classList.add('open');
  });
  document.getElementById('mobileNavClose').addEventListener('click', function(){
    mobileNav.classList.remove('open');
  });
  mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  });

  // reveal on scroll
  var revealEls = document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0, rootMargin:'0px 0px -60px 0px'});  /* dès que le haut du bloc entre à l'écran, même pour une très longue liste */
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  // ---------- ÉVÉNEMENT MIS EN AVANT (rotation automatique) ----------
  // Met en avant le prochain grand événement à venir : dès qu'une date est dépassée,
  // l'événement suivant dans la liste prend automatiquement sa place.
  // ⚠️ Dates estimées sur le rythme habituel de chaque événement (les éditions 2026 de
  // plusieurs d'entre eux sont déjà passées) — à corriger avec les dates officielles dès
  // qu'elles sont publiées.
  var MAJOR_EVENTS = [
    {
      id: 'memorial-van-damme',
      title: 'Memorial Van Damme',
      location: 'Bruxelles',
      periodLabel: 'Septembre',
      date: '2026-09-05',
      img: 'https://images.pexels.com/photos/18502968/pexels-photo-18502968.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/18502968/pexels-photo-18502968.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Gros plan sur les lignes blanches d\'un couloir de piste d\'athlétisme',
      altHome: 'Piste d\'athlétisme — chauffeur privé Prestigia pour le Memorial Van Damme à Bruxelles',
      paragraph: 'Le rendez-vous belge de la Diamond League réunit l\'élite mondiale de l\'athlétisme au Stade Roi Baudouin. Profitez d\'un transfert privé jusqu\'au stade, sans stress de stationnement ni de transports en commun bondés.'
    },
    {
      id: 'marche-de-noel',
      title: 'Marché de Noël · Winter Wonders',
      location: 'Bruxelles',
      periodLabel: 'Nov-Janvier',
      date: '2026-11-28',
      img: 'https://images.pexels.com/photos/30085177/pexels-photo-30085177.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/30085177/pexels-photo-30085177.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Ambiance de marché de Noël illuminé la nuit',
      altHome: 'Marché de Noël illuminé — chauffeur privé Prestigia pour Winter Wonders à Bruxelles',
      paragraph: 'Le marché de Noël bruxellois illumine le centre-ville de novembre à janvier. Profitez d\'une soirée sans souci de stationnement, avec un chauffeur qui vous attend le temps voulu.'
    },
    {
      id: 'motor-show',
      title: 'Brussels Motor Show',
      location: 'Bruxelles Expo',
      periodLabel: 'Janvier',
      date: '2027-01-09',
      img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/AR01jOEGPpI5k0KP/img_0041-FEbpsAIbC3OQOXvq.jpeg',
      imgHome: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/AR01jOEGPpI5k0KP/img_0041-FEbpsAIbC3OQOXvq.jpeg',
      alt: 'Chauffeur privé Prestigia pour le Brussels Motor Show à Bruxelles',
      altHome: 'Chauffeur privé Prestigia pour le Brussels Motor Show à Bruxelles',
      paragraph: 'Le plus grand salon automobile de Belgique réunit les dernières nouveautés sous un même toit. Prestigia vous dépose directement à l\'entrée de Bruxelles Expo, sans recherche de parking.'
    },
    {
      id: 'brafa',
      title: 'Brafa',
      location: 'Brussels Expo',
      periodLabel: 'Janvier',
      date: '2027-01-23',
      img: 'https://images.pexels.com/photos/14595876/pexels-photo-14595876.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/14595876/pexels-photo-14595876.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Galerie d\'art classique avec tableaux encadrés exposés sur un mur',
      altHome: 'Galerie d\'art avec tableaux encadrés — chauffeur privé Prestigia pour la Brafa à Bruxelles',
      paragraph: 'La Brussels Art Fair rassemble antiquaires et galeries d\'art parmi les plus prestigieux d\'Europe. Arrivez sereinement, sans les contraintes de stationnement du quartier.'
    },
    {
      id: 'batibouw',
      title: 'Batibouw',
      location: 'Bruxelles Expo',
      periodLabel: 'Février-Mars',
      date: '2027-02-20',
      img: 'https://images.pexels.com/photos/31737862/pexels-photo-31737862.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/31737862/pexels-photo-31737862.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Entrée d\'une maison contemporaine élégante illuminée le soir',
      altHome: 'Maison contemporaine illuminée — chauffeur privé Prestigia pour Batibouw à Bruxelles',
      paragraph: 'Le rendez-vous incontournable de la construction et de la rénovation en Belgique. Un transfert privé simplifie vos allers-retours, surtout si vous visitez plusieurs stands avec des collaborateurs.'
    },
    {
      id: 'tour-des-flandres',
      title: 'Tour des Flandres',
      location: 'Flandre',
      periodLabel: 'Avril',
      date: '2027-04-04',
      img: 'https://images.pexels.com/photos/33356459/pexels-photo-33356459.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/33356459/pexels-photo-33356459.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Route de campagne bordée d\'arbres au milieu de champs plats, lumière de fin de journée',
      altHome: 'Route de campagne en Flandre — chauffeur privé Prestigia pour le Tour des Flandres',
      paragraph: 'L\'une des classiques cyclistes les plus prestigieuses, à travers les monts emblématiques de Flandre. Prestigia vous positionne aux meilleurs points de vue, en toute liberté de mouvement le long du parcours.'
    },
    {
      id: 'premier-padel',
      title: 'Brussels Premier Padel',
      location: 'Tour & Taxis',
      periodLabel: 'Avril',
      date: '2027-04-19',
      img: 'padel_bruxelles.jpg',
      imgHome: 'padel_bruxelles.jpg',
      alt: 'Match de padel en soirée à Tour & Taxis, Bruxelles Premier Padel',
      altHome: 'Match de padel à Tour & Taxis — chauffeur privé Prestigia pour le Brussels Premier Padel',
      paragraph: 'Le padel version Premier Padel s\'installe à Tour & Taxis pour une semaine de compétition internationale. Un transfert privé vous évite les contraintes de stationnement dans ce quartier très fréquenté.'
    },
    {
      id: 'roland-garros',
      title: 'Roland-Garros',
      location: 'Paris',
      periodLabel: 'Mai-Juin',
      date: '2027-05-23',
      img: 'Roland_garros.jpg',
      imgHome: 'Roland_garros.jpg',
      alt: 'Court de tennis en terre battue vu du ciel, entouré d\'arbres — Roland-Garros',
      altHome: 'Court de tennis en terre battue — chauffeur privé Prestigia pour Roland-Garros à Paris',
      paragraph: 'Le tournoi du Grand Chelem sur terre battue réunit chaque année l\'élite mondiale du tennis à Paris. Prestigia organise votre transfert privé entre Bruxelles et le Stade Roland-Garros, pour vivre l\'événement sans penser au trajet.'
    },
    {
      id: 'art-brussels',
      title: 'Art Brussels',
      location: 'Bruxelles',
      periodLabel: 'Avril',
      date: '2027-04-24',
      img: 'https://images.pexels.com/photos/34453118/pexels-photo-34453118.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/34453118/pexels-photo-34453118.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Intérieur de galerie d\'art contemporain avec sculptures',
      altHome: 'Galerie d\'art contemporain — chauffeur privé Prestigia pour Art Brussels',
      paragraph: 'La grande foire d\'art contemporain de Bruxelles attire collectionneurs et curieux du monde entier. Prestigia vous accompagne d\'une galerie à l\'autre, à votre rythme.'
    },
    {
      id: '24h-francorchamps',
      title: '24 Heures de Francorchamps',
      location: 'Spa-Francorchamps',
      periodLabel: 'Juillet',
      date: '2027-06-26',
      img: 'https://images.pexels.com/photos/1679719/pexels-photo-1679719.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/1679719/pexels-photo-1679719.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Traînées de lumière abstraites de nuit évoquant la vitesse d\'une course d\'endurance',
      altHome: 'Traînées de lumière de nuit — chauffeur privé Prestigia pour les 24 Heures de Francorchamps',
      paragraph: 'Une course d\'endurance mythique, 24 heures de vitesse et de stratégie sur le circuit de Spa-Francorchamps. Prestigia vous conduit directement aux abords du circuit, pour vivre l\'événement sans logistique à gérer.'
    },
    {
      id: 'tomorrowland',
      title: 'Tomorrowland',
      location: 'Boom',
      periodLabel: 'Juillet',
      date: '2027-07-23',
      img: 'https://images.pexels.com/photos/36257830/pexels-photo-36257830.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/36257830/pexels-photo-36257830.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Foule de festival en liesse sous les lumières de scène et jets de flammes la nuit',
      altHome: 'Foule de festival en liesse sous les projecteurs — transfert privé Prestigia pour Tomorrowland',
      paragraph: 'Le festival électronique le plus connu au monde transforme Boom en épicentre mondial de la musique. Un transfert privé vous évite les longues files d\'attente aux navettes officielles.'
    },
    {
      id: 'f1-belgique',
      title: 'Grand Prix de F1 de Belgique',
      location: 'Spa-Francorchamps',
      periodLabel: 'Août',
      date: '2027-08-27',
      img: 'https://images.pexels.com/photos/12532099/pexels-photo-12532099.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imgHome: 'https://images.pexels.com/photos/12532099/pexels-photo-12532099.jpeg?auto=compress&cs=tinysrgb&w=1024',
      alt: 'Circuit de course sinueux vu du ciel, entouré de verdure — Grand Prix de Belgique',
      altHome: 'Circuit de course sinueux vu du ciel — chauffeur privé Prestigia pour le Grand Prix de Belgique',
      paragraph: 'Chaque été, le circuit de Spa-Francorchamps devient l\'épicentre du sport automobile mondial. Prestigia accompagne une clientèle exigeante avec des transferts privés entre Bruxelles, vos hébergements dans les Ardennes et le circuit.'
    }
  ];

  // ---------- Langues (NL / EN / DE) ----------
  // La langue vient de <html lang>. Les chemins d'images locales sont relatifs à la racine du site :
  // depuis /en/ ou /evenements/galas/, on les préfixe avec le chemin qui mène à script.js.
  var SITE_LANG = (document.documentElement.lang || 'fr').slice(0, 2).toLowerCase();
  var SITE_ROOT = (function(){
    var s = document.querySelector('script[src*="script.js"]');
    return s ? s.getAttribute('src').replace(/script\.js.*$/, '') : '';
  })();
  function siteAsset(u){ return /^(https?:)?\/\//.test(u) ? u : SITE_ROOT + u; }
  var EVENT_WORDS = {   // lieux et périodes
    'Bruxelles': {nl:'Brussel', en:'Brussels', de:'Brüssel'},
    'Bruxelles Expo': {nl:'Brussels Expo', en:'Brussels Expo', de:'Brussels Expo'},
    'Flandre': {nl:'Vlaanderen', en:'Flanders', de:'Flandern'},
    'Septembre': {nl:'September', en:'September', de:'September'},
    'Nov-Janvier': {nl:'Nov-januari', en:'Nov-January', de:'Nov-Januar'},
    'Janvier': {nl:'Januari', en:'January', de:'Januar'},
    'Février-Mars': {nl:'Februari-maart', en:'February-March', de:'Februar-März'},
    'Avril': {nl:'April', en:'April', de:'April'},
    'Mai-Juin': {nl:'Mei-juni', en:'May-June', de:'Mai-Juni'},
    'Juillet': {nl:'Juli', en:'July', de:'Juli'},
    'Août': {nl:'Augustus', en:'August', de:'August'}
  };
  var EVENT_I18N = {
    'memorial-van-damme': {
      nl: {alt:'Close-up van de witte lijnen van een atletiekbaan', altHome:'Atletiekbaan — privéchauffeur van Prestigia voor de Memorial Van Damme in Brussel',
        paragraph:'De Belgische etappe van de Diamond League brengt de wereldtop van de atletiek samen in het Koning Boudewijnstadion. Geniet van een privétransfer tot aan het stadion, zonder parkeerstress of overvol openbaar vervoer.'},
      en: {alt:'Close-up of the white lane lines on an athletics track', altHome:'Athletics track — Prestigia private chauffeur for the Memorial Van Damme in Brussels',
        paragraph:'The Belgian leg of the Diamond League brings the world\'s athletics elite to the King Baudouin Stadium. Enjoy a private transfer right to the stadium, with no parking worries and no crowded public transport.'},
      de: {alt:'Nahaufnahme der weißen Bahnlinien einer Leichtathletikbahn', altHome:'Leichtathletikbahn — Privatchauffeur von Prestigia zum Memorial Van Damme in Brüssel',
        paragraph:'Das belgische Meeting der Diamond League vereint die Weltelite der Leichtathletik im König-Baudouin-Stadion. Genießen Sie einen Privattransfer bis zum Stadion — ohne Parkplatzsuche und ohne überfüllte öffentliche Verkehrsmittel.'}
    },
    'marche-de-noel': {
      nl: {title:'Kerstmarkt · Winter Wonders', alt:'Sfeer van een verlichte kerstmarkt bij nacht', altHome:'Verlichte kerstmarkt — privéchauffeur van Prestigia voor Winter Wonders in Brussel',
        paragraph:'De Brusselse kerstmarkt zet het stadscentrum van november tot januari in feestverlichting. Geniet van een zorgeloze avond zonder parkeerzorgen, met een chauffeur die op u wacht zolang als nodig.'},
      en: {title:'Christmas Market · Winter Wonders', alt:'Illuminated Christmas market atmosphere at night', altHome:'Illuminated Christmas market — Prestigia private chauffeur for Winter Wonders in Brussels',
        paragraph:'The Brussels Christmas market lights up the city centre from November to January. Enjoy a carefree evening with no parking to worry about and a chauffeur waiting for you as long as you wish.'},
      de: {title:'Weihnachtsmarkt · Winter Wonders', alt:'Stimmung eines beleuchteten Weihnachtsmarkts bei Nacht', altHome:'Beleuchteter Weihnachtsmarkt — Privatchauffeur von Prestigia für Winter Wonders in Brüssel',
        paragraph:'Der Brüsseler Weihnachtsmarkt bringt die Innenstadt von November bis Januar zum Leuchten. Genießen Sie einen sorglosen Abend ohne Parkplatzsuche — Ihr Chauffeur wartet, so lange Sie möchten.'}
    },
    'motor-show': {
      nl: {alt:'Privéchauffeur van Prestigia voor het Autosalon van Brussel', altHome:'Privéchauffeur van Prestigia voor het Autosalon van Brussel',
        paragraph:'Het grootste autosalon van België brengt de nieuwste modellen samen onder één dak. Prestigia zet u rechtstreeks af aan de ingang van Brussels Expo, zonder een parkeerplaats te moeten zoeken.'},
      en: {alt:'Prestigia private chauffeur for the Brussels Motor Show', altHome:'Prestigia private chauffeur for the Brussels Motor Show',
        paragraph:'Belgium\'s largest motor show gathers the latest models under one roof. Prestigia drops you right at the entrance of Brussels Expo — no need to search for a parking space.'},
      de: {alt:'Privatchauffeur von Prestigia zum Brussels Motor Show', altHome:'Privatchauffeur von Prestigia zum Brussels Motor Show',
        paragraph:'Die größte Automesse Belgiens zeigt die neuesten Modelle unter einem Dach. Prestigia setzt Sie direkt am Eingang von Brussels Expo ab — ganz ohne Parkplatzsuche.'}
    },
    'brafa': {
      nl: {alt:'Klassieke kunstgalerij met ingelijste schilderijen aan de muur', altHome:'Kunstgalerij met ingelijste schilderijen — privéchauffeur van Prestigia voor de Brafa in Brussel',
        paragraph:'De Brussels Art Fair brengt enkele van de meest prestigieuze antiquairs en kunstgalerijen van Europa samen. Kom ontspannen aan, zonder de parkeerperikelen van de wijk.'},
      en: {alt:'Classic art gallery with framed paintings on display', altHome:'Art gallery with framed paintings — Prestigia private chauffeur for Brafa in Brussels',
        paragraph:'The Brussels Art Fair brings together some of Europe\'s most prestigious antique dealers and art galleries. Arrive at ease, free from the parking constraints of the area.'},
      de: {alt:'Klassische Kunstgalerie mit gerahmten Gemälden an der Wand', altHome:'Kunstgalerie mit gerahmten Gemälden — Privatchauffeur von Prestigia zur Brafa in Brüssel',
        paragraph:'Die Brussels Art Fair vereint einige der renommiertesten Antiquitätenhändler und Kunstgalerien Europas. Kommen Sie entspannt an, ohne die Parkplatzprobleme des Viertels.'}
    },
    'batibouw': {
      nl: {alt:'Ingang van een elegante, hedendaagse woning, \'s avonds verlicht', altHome:'Verlichte hedendaagse woning — privéchauffeur van Prestigia voor Batibouw in Brussel',
        paragraph:'Dé afspraak voor bouwen en renoveren in België. Een privétransfer maakt uw heen-en-terugritten eenvoudig, zeker als u met collega\'s meerdere stands bezoekt.'},
      en: {alt:'Entrance of an elegant contemporary house lit up in the evening', altHome:'Illuminated contemporary house — Prestigia private chauffeur for Batibouw in Brussels',
        paragraph:'Belgium\'s unmissable building and renovation fair. A private transfer makes coming and going effortless, especially when visiting several stands with colleagues.'},
      de: {alt:'Eingang eines eleganten, modernen Hauses am Abend beleuchtet', altHome:'Beleuchtetes modernes Haus — Privatchauffeur von Prestigia zur Batibouw in Brüssel',
        paragraph:'Die wichtigste Messe für Bauen und Renovieren in Belgien. Ein Privattransfer vereinfacht Ihre Hin- und Rückfahrten, vor allem wenn Sie mit Kollegen mehrere Stände besuchen.'}
    },
    'tour-des-flandres': {
      nl: {title:'Ronde van Vlaanderen', alt:'Landweg met bomen tussen vlakke velden, in het licht van de late namiddag', altHome:'Landweg in Vlaanderen — privéchauffeur van Prestigia voor de Ronde van Vlaanderen',
        paragraph:'Een van de meest prestigieuze wielerklassiekers, over de iconische hellingen van Vlaanderen. Prestigia brengt u naar de beste uitkijkpunten, met alle vrijheid langs het parcours.'},
      en: {title:'Tour of Flanders', alt:'Tree-lined country road through flat fields in late-afternoon light', altHome:'Country road in Flanders — Prestigia private chauffeur for the Tour of Flanders',
        paragraph:'One of cycling\'s most prestigious classics, across the iconic climbs of Flanders. Prestigia takes you to the best vantage points, with complete freedom of movement along the route.'},
      de: {title:'Flandern-Rundfahrt', alt:'Baumgesäumte Landstraße zwischen flachen Feldern im Licht des späten Nachmittags', altHome:'Landstraße in Flandern — Privatchauffeur von Prestigia zur Flandern-Rundfahrt',
        paragraph:'Einer der renommiertesten Radsport-Klassiker, über die legendären Anstiege Flanderns. Prestigia bringt Sie zu den besten Aussichtspunkten — mit voller Bewegungsfreiheit entlang der Strecke.'}
    },
    'premier-padel': {
      nl: {alt:'Padelwedstrijd \'s avonds op Tour & Taxis, Brussels Premier Padel', altHome:'Padelwedstrijd op Tour & Taxis — privéchauffeur van Prestigia voor de Brussels Premier Padel',
        paragraph:'Premier Padel strijkt een week lang neer op Tour & Taxis voor internationale competitie. Een privétransfer bespaart u de parkeerzorgen in deze drukke wijk.'},
      en: {alt:'Evening padel match at Tour & Taxis, Brussels Premier Padel', altHome:'Padel match at Tour & Taxis — Prestigia private chauffeur for the Brussels Premier Padel',
        paragraph:'Premier Padel comes to Tour & Taxis for a week of international competition. A private transfer spares you the parking hassle in this busy district.'},
      de: {alt:'Padel-Match am Abend in Tour & Taxis, Brussels Premier Padel', altHome:'Padel-Match in Tour & Taxis — Privatchauffeur von Prestigia zum Brussels Premier Padel',
        paragraph:'Premier Padel gastiert eine Woche lang mit internationalem Wettbewerb in Tour & Taxis. Ein Privattransfer erspart Ihnen die Parkplatzsuche in diesem belebten Viertel.'}
    },
    'roland-garros': {
      nl: {alt:'Gravelbaan vanuit de lucht, omringd door bomen — Roland-Garros', altHome:'Gravelbaan — privéchauffeur van Prestigia voor Roland-Garros in Parijs', location:'Parijs',
        paragraph:'Het grandslamtoernooi op gravel brengt elk jaar de wereldtop van het tennis samen in Parijs. Prestigia verzorgt uw privétransfer tussen Brussel en het Stade Roland-Garros, zodat u zorgeloos van het evenement geniet.'},
      en: {alt:'Clay tennis court seen from above, surrounded by trees — Roland-Garros', altHome:'Clay tennis court — Prestigia private chauffeur for Roland-Garros in Paris',
        paragraph:'The clay-court Grand Slam brings the world\'s tennis elite to Paris every year. Prestigia arranges your private transfer between Brussels and Stade Roland-Garros, so you can enjoy the event without a thought for the journey.'},
      de: {alt:'Sandplatz aus der Luft, umgeben von Bäumen — Roland-Garros', altHome:'Tennis-Sandplatz — Privatchauffeur von Prestigia zu Roland-Garros in Paris',
        paragraph:'Das Grand-Slam-Turnier auf Sand vereint jedes Jahr die Tennis-Weltelite in Paris. Prestigia organisiert Ihren Privattransfer zwischen Brüssel und dem Stade Roland-Garros — damit Sie das Event genießen, ohne an die Fahrt zu denken.'}
    },
    'art-brussels': {
      nl: {alt:'Interieur van een galerij voor hedendaagse kunst met beelden', altHome:'Galerij voor hedendaagse kunst — privéchauffeur van Prestigia voor Art Brussels',
        paragraph:'De grote Brusselse beurs voor hedendaagse kunst trekt verzamelaars en liefhebbers uit de hele wereld aan. Prestigia brengt u van galerij naar galerij, op uw eigen tempo.'},
      en: {alt:'Interior of a contemporary art gallery with sculptures', altHome:'Contemporary art gallery — Prestigia private chauffeur for Art Brussels',
        paragraph:'Brussels\' major contemporary art fair draws collectors and art lovers from around the world. Prestigia takes you from one gallery to the next, at your own pace.'},
      de: {alt:'Innenraum einer Galerie für zeitgenössische Kunst mit Skulpturen', altHome:'Galerie für zeitgenössische Kunst — Privatchauffeur von Prestigia zur Art Brussels',
        paragraph:'Die große Brüsseler Messe für zeitgenössische Kunst zieht Sammler und Kunstinteressierte aus aller Welt an. Prestigia begleitet Sie von Galerie zu Galerie, in Ihrem Tempo.'}
    },
    '24h-francorchamps': {
      nl: {title:'24 Uur van Francorchamps', alt:'Abstracte lichtsporen bij nacht die de snelheid van een uithoudingsrace oproepen', altHome:'Lichtsporen bij nacht — privéchauffeur van Prestigia voor de 24 Uur van Francorchamps',
        paragraph:'Een legendarische uithoudingsrace: 24 uur snelheid en strategie op het circuit van Spa-Francorchamps. Prestigia brengt u tot vlak bij het circuit, zodat u het evenement beleeft zonder logistieke zorgen.'},
      en: {title:'Spa 24 Hours', alt:'Abstract light trails at night evoking the speed of an endurance race', altHome:'Light trails at night — Prestigia private chauffeur for the Spa 24 Hours',
        paragraph:'A legendary endurance race: 24 hours of speed and strategy at the Spa-Francorchamps circuit. Prestigia drives you right to the circuit, so you can enjoy the event with no logistics to handle.'},
      de: {title:'24 Stunden von Spa', alt:'Abstrakte Lichtspuren bei Nacht, die an die Geschwindigkeit eines Langstreckenrennens erinnern', altHome:'Lichtspuren bei Nacht — Privatchauffeur von Prestigia zu den 24 Stunden von Spa',
        paragraph:'Ein legendäres Langstreckenrennen: 24 Stunden Tempo und Strategie auf dem Circuit de Spa-Francorchamps. Prestigia bringt Sie direkt an die Strecke — ohne jede Logistik für Sie.'}
    },
    'tomorrowland': {
      nl: {alt:'Uitgelaten festivalpubliek onder het podiumlicht en vuurfonteinen bij nacht', altHome:'Uitgelaten festivalpubliek onder de spots — privétransfer van Prestigia naar Tomorrowland',
        paragraph:'Het bekendste elektronische festival ter wereld maakt van Boom het wereldwijde epicentrum van de muziek. Met een privétransfer ontloopt u de lange wachtrijen voor de officiële shuttles.'},
      en: {alt:'Euphoric festival crowd under stage lights and flame jets at night', altHome:'Euphoric festival crowd under the spotlights — Prestigia private transfer to Tomorrowland',
        paragraph:'The world\'s best-known electronic music festival turns Boom into the global epicentre of music. A private transfer spares you the long queues for the official shuttles.'},
      de: {alt:'Ausgelassene Festivalmenge unter Bühnenlicht und Flammenfontänen bei Nacht', altHome:'Ausgelassene Festivalmenge im Scheinwerferlicht — Privattransfer von Prestigia zum Tomorrowland',
        paragraph:'Das bekannteste Elektro-Festival der Welt macht Boom zum globalen Epizentrum der Musik. Ein Privattransfer erspart Ihnen die langen Warteschlangen an den offiziellen Shuttles.'}
    },
    'f1-belgique': {
      nl: {title:'Formule 1 Grote Prijs van België', alt:'Bochtig racecircuit vanuit de lucht, omringd door groen — Grote Prijs van België', altHome:'Bochtig racecircuit vanuit de lucht — privéchauffeur van Prestigia voor de Grote Prijs van België',
        paragraph:'Elke zomer wordt het circuit van Spa-Francorchamps het epicentrum van de internationale autosport. Prestigia begeleidt een veeleisende clientèle met privétransfers tussen Brussel, uw verblijf in de Ardennen en het circuit.'},
      en: {title:'Belgian F1 Grand Prix', alt:'Winding race circuit seen from above, surrounded by greenery — Belgian Grand Prix', altHome:'Winding race circuit seen from above — Prestigia private chauffeur for the Belgian Grand Prix',
        paragraph:'Every summer, the Spa-Francorchamps circuit becomes the epicentre of world motorsport. Prestigia looks after discerning clients with private transfers between Brussels, your accommodation in the Ardennes and the circuit.'},
      de: {title:'Formel-1-Grand-Prix von Belgien', alt:'Kurvenreiche Rennstrecke aus der Luft, umgeben von Grün — Großer Preis von Belgien', altHome:'Kurvenreiche Rennstrecke aus der Luft — Privatchauffeur von Prestigia zum Großen Preis von Belgien',
        paragraph:'Jeden Sommer wird der Circuit de Spa-Francorchamps zum Epizentrum des internationalen Motorsports. Prestigia begleitet anspruchsvolle Kunden mit Privattransfers zwischen Brüssel, Ihrer Unterkunft in den Ardennen und der Rennstrecke.'}
    }
  };
  // Renvoie l'événement dans la langue de la page (le français reste la base)
  function localizeEvent(e){
    var o = {}, k;
    for(k in e) o[k] = e[k];
    o.img = siteAsset(e.img); o.imgHome = siteAsset(e.imgHome);
    if(SITE_LANG === 'fr') return o;
    var tr = (EVENT_I18N[e.id] || {})[SITE_LANG] || {};
    for(k in tr) o[k] = tr[k];
    if(!tr.location && EVENT_WORDS[e.location]) o.location = EVENT_WORDS[e.location][SITE_LANG];
    if(EVENT_WORDS[e.periodLabel]) o.periodLabel = EVENT_WORDS[e.periodLabel][SITE_LANG];
    return o;
  }

  function pickFeaturedEvent(){
    var today = new Date();
    today.setHours(0,0,0,0);
    var sorted = MAJOR_EVENTS.slice().sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    });
    var upcoming = sorted.filter(function(e){ return new Date(e.date) >= today; });
    return upcoming.length ? upcoming[0] : sorted[0];
  }

  var featured = localizeEvent(pickFeaturedEvent());

  // Bloc magazine (page Événements)
  var featuredImg = document.getElementById('featuredImg');
  var featuredTitle = document.getElementById('featuredTitle');
  var featuredParagraphs = document.getElementById('featuredParagraphs');
  var featuredLieu = document.getElementById('featuredLieu');
  var featuredPeriode = document.getElementById('featuredPeriode');
  if(featuredTitle){
    featuredImg.src = featured.img;
    featuredImg.alt = featured.alt;
    featuredTitle.textContent = featured.title;
    featuredParagraphs.innerHTML = '<p>' + featured.paragraph + '</p>';
    featuredLieu.textContent = featured.location;
    featuredPeriode.textContent = featured.periodLabel;
  }

  // Grande card "événement" de la page d'accueil
  var homeFeaturedImg = document.getElementById('homeFeaturedImg');
  var homeFeaturedTitle = document.getElementById('homeFeaturedTitle');
  var homeFeaturedMeta = document.getElementById('homeFeaturedMeta');
  if(homeFeaturedImg){
    homeFeaturedImg.src = featured.imgHome;
    homeFeaturedImg.alt = featured.altHome;
    homeFeaturedTitle.textContent = featured.title;
    homeFeaturedMeta.textContent = featured.location + ' · ' + featured.periodLabel;
  }

// Accueil : carrousel « Notre flotte » en boucle infinie (flèches, défilement automatique lent, pause au survol)
// Principe : la piste contient [copies des 5 cartes] [5 vraies cartes] [copies des 5 cartes].
// On montre les vraies cartes ; quand le défilement s'arrête sur une copie, on se replace sans animation
// sur la vraie carte identique (même image à l'écran, donc aucun saut visible).
(function(){
  var root = document.querySelector('.fleet-carousel');
  if(!root) return;
  var track = root.querySelector('.fleet-carousel-track');
  var DELAY = 4500;   // une carte toutes les 4,5 s
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timer = null, paused = false;

  // --- Copies au début et à la fin (cachées aux lecteurs d'écran, hors tabulation, mais cliquables) ---
  var real = Array.prototype.slice.call(track.children);
  var N = real.length;
  if(N < 2) return;
  function makeClone(card){
    var c = card.cloneNode(true);
    c.classList.add('is-clone');
    c.setAttribute('aria-hidden', 'true');
    c.querySelectorAll('a, button, [tabindex]').forEach(function(el){ el.setAttribute('tabindex', '-1'); });
    return c;
  }
  var before = document.createDocumentFragment(), after = document.createDocumentFragment();
  real.forEach(function(card){ before.appendChild(makeClone(card)); after.appendChild(makeClone(card)); });
  track.insertBefore(before, track.firstChild);
  track.appendChild(after);
  var cards = track.children;          // 3 × N cartes : copies [0, N[, vraies [N, 2N[, copies [2N, 3N[

  // Position de défilement qui cale la carte i au début de la zone visible
  function pos(i){ return cards[i].offsetLeft - cards[0].offsetLeft; }
  function period(){ return pos(N) - pos(0); }
  function currentIndex(){
    var s = track.scrollLeft, best = 0, d = Infinity;
    for(var i = 0; i < cards.length; i++){ var k = Math.abs(pos(i) - s); if(k < d){ d = k; best = i; } }
    return best;
  }
  function jump(left){                 // repositionnement instantané (sans animation)
    root.classList.add('is-jumping');  // pas de fondu sur les cartes pendant le saut
    track.style.scrollBehavior = 'auto';
    track.scrollLeft = left;
    track.style.scrollBehavior = '';
    refreshActive();
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ root.classList.remove('is-jumping'); }); });
  }
  // Cartes entièrement visibles = nettes ; cartes coupées sur les bords = atténuées (calcul sur la mise en page)
  function refreshActive(){
    var view = track.clientWidth, s = track.scrollLeft, pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    for(var i = 0; i < cards.length; i++){
      var x = pos(i) + pad - s, w = cards[i].offsetWidth;
      var seenW = Math.min(x + w, view) - Math.max(x, 0);
      cards[i].classList.toggle('is-active', seenW / w >= 0.9);
    }
  }
  // Si on est arrêté sur une copie, se replacer sur la vraie carte identique
  function normalize(){
    var i = currentIndex();
    if(i < N) jump(track.scrollLeft + period());
    else if(i >= 2 * N) jump(track.scrollLeft - period());
  }

  var target = null;                   // carte visée pendant une animation (clics rapides)
  function go(dir){
    if(target === null){ normalize(); target = currentIndex(); }
    target = Math.max(0, Math.min(cards.length - 1, target + dir));
    track.scrollTo({left: pos(target), behavior: 'smooth'});
  }

  // Fin de défilement (flèches, automatique, doigt, trackpad) : on se recale
  var settle = null, touching = false;
  track.addEventListener('scroll', function(){
    clearTimeout(settle);
    settle = setTimeout(function(){
      if(touching) return;
      target = null;
      normalize();
    }, 160);
  }, {passive:true});

  function stop(){ clearInterval(timer); timer = null; }
  function start(){
    stop();
    if(reduce || paused || document.hidden) return;
    timer = setInterval(function(){ go(1); }, DELAY);
  }

  root.querySelectorAll('.fleet-carousel-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ go(+btn.getAttribute('data-dir')); start(); });
  });
  // Pause au survol, quand on navigue au clavier dedans, et pendant un glissement au doigt
  root.addEventListener('mouseenter', function(){ paused = true; stop(); });
  root.addEventListener('mouseleave', function(){ paused = false; start(); });
  root.addEventListener('focusin', function(){ paused = true; stop(); });
  root.addEventListener('focusout', function(){ paused = false; start(); });
  track.addEventListener('touchstart', function(){ touching = true; target = null; paused = true; stop(); }, {passive:true});
  track.addEventListener('touchend', function(){
    touching = false; paused = false;
    track.dispatchEvent(new Event('scroll'));   // relance le recalage si le défilement est déjà fini
    setTimeout(start, 3000);
  }, {passive:true});
  document.addEventListener('visibilitychange', start);
  // Redimensionnement : garder la même carte calée
  var resizeTimer = null;
  window.addEventListener('resize', function(){
    var i = currentIndex();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){ jump(pos(i)); normalize(); refreshActive(); }, 120);
  });

  // Départ calé sur la première vraie carte (Berline)
  jump(pos(N));

  // Mise à jour nette / atténuée pendant le défilement (une fois par image)
  var raf = null;
  track.addEventListener('scroll', function(){
    if(raf) return;
    raf = requestAnimationFrame(function(){ raf = null; refreshActive(); });
  }, {passive:true});
  refreshActive();
  root.classList.add('is-ready');

  // Un glissement (souris ou doigt) sur la piste ne doit pas ouvrir la carte sous le pointeur
  var downX = null, dragged = false;
  track.addEventListener('pointerdown', function(e){ downX = e.clientX; dragged = false; });
  track.addEventListener('pointermove', function(e){ if(downX !== null && Math.abs(e.clientX - downX) > 8) dragged = true; });
  track.addEventListener('pointerup', function(){ downX = null; });
  track.addEventListener('pointercancel', function(){ downX = null; });   // le navigateur a pris la main pour faire défiler : pas de clic
  track.addEventListener('click', function(e){ if(dragged){ e.preventDefault(); e.stopPropagation(); dragged = false; } }, true);
  start();
})();

// Accueil (charte showroom) : léger parallax de la photo de fond du hero
(function(){
  var card = document.querySelector('.hero-card');
  if(!card) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ticking = false;
  function update(){
    ticking = false;
    var r = card.getBoundingClientRect();
    if(r.bottom < 0 || r.top > window.innerHeight) return;   // hors écran : rien à faire
    var shift = Math.max(-40, Math.min(40, -r.top * 0.12));   // la photo défile un peu moins vite que la carte
    card.style.setProperty('--hero-parallax', shift.toFixed(1) + 'px');
  }
  window.addEventListener('scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
  update();
})();

// Accueil : cadrage de la photo du hero (Classe S) selon la taille réelle de la carte
// La hauteur de la carte suit celle de l'écran : un pourcentage fixe ferait monter ou descendre la voiture.
// On calcule donc le décalage pour que le bas de la voiture arrive vers 92 % de la hauteur de la carte
// (au-dessus du fondu blanc des 24 % inférieurs, voir .hero-card::after dans showroom.css).
(function(){
  var card = document.querySelector('.hero-card');
  var img = card && card.querySelector('.hero-photo img');
  if(!img) return;
  var CAR_BOTTOM = 0.712;   // bas de la voiture (pneus et bouclier), en fraction de la hauteur de la photo
  var TARGET = 0.92;        // position souhaitée du bas de la voiture, en fraction de la hauteur de la carte
  function fit(){
    var iw = img.naturalWidth || 2400, ih = img.naturalHeight || 3000;
    var bw = img.clientWidth, bh = img.clientHeight;
    if(!bw || !bh) return;
    var s = Math.max(bw / iw, bh / ih);       // échelle de object-fit: cover
    var rh = ih * s, slack = rh - bh;          // hauteur affichée et marge de recadrage verticale
    var boxTop = img.offsetTop + img.parentNode.offsetTop;
    if(slack < 2){
      // Photo calée sur la hauteur (mobile, tablette) : on agrandit l'image juste assez,
      // ancrée en haut, pour que le bas de la voiture arrive aussi vers 92 % de la carte.
      var boxH = img.parentNode.clientHeight;
      var k = (TARGET * card.clientHeight - boxTop) / (CAR_BOTTOM * boxH);
      img.style.height = (Math.max(1, k) * 100).toFixed(2) + '%';
      img.style.objectPosition = '50% 0%';
      return;
    }
    img.style.height = '';   // -40 px : l'image déborde en haut (offsetTop ignore le décalage du parallax)
    var offset = CAR_BOTTOM * rh - (TARGET * card.clientHeight - boxTop);
    var p = Math.min(1, Math.max(0, offset / slack));
    img.style.objectPosition = '50% ' + (p * 100).toFixed(2) + '%';
  }
  var t = null;
  window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(fit, 80); });
  if(img.complete) fit(); else img.addEventListener('load', fit);
  fit();
})();
