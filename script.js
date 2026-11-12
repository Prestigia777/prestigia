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
    }, {threshold:0.15});
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

  function pickFeaturedEvent(){
    var today = new Date();
    today.setHours(0,0,0,0);
    var sorted = MAJOR_EVENTS.slice().sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    });
    var upcoming = sorted.filter(function(e){ return new Date(e.date) >= today; });
    return upcoming.length ? upcoming[0] : sorted[0];
  }

  var featured = pickFeaturedEvent();

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
