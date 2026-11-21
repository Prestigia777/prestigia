/* 404.html — page d'erreur. La balise <base> fait partir tous les liens de la racine de chaque langue. */
const L = (nl, en, de) => ({ nl, en, de });
module.exports = {
  raw: [
    ['<base href="/">', L('<base href="/nl/">', '<base href="/en/">', '<base href="/de/">')]
  ],
  seg: {
    'Page introuvable | PRESTIGIA': L('Pagina niet gevonden | PRESTIGIA', 'Page not found | PRESTIGIA', 'Seite nicht gefunden | PRESTIGIA'),
    'Cette page n\'existe pas ou a été déplacée. Retrouvez les services de chauffeur privé Prestigia depuis l\'accueil.': L(
      'Deze pagina bestaat niet of werd verplaatst. Ontdek de privéchauffeurdiensten van Prestigia via de homepage.',
      'This page does not exist or has been moved. Find Prestigia\'s private chauffeur services from the home page.',
      'Diese Seite existiert nicht oder wurde verschoben. Entdecken Sie die Privatchauffeur-Services von Prestigia auf der Startseite.'),
    'Erreur 404': L('Fout 404', 'Error 404', 'Fehler 404'),
    'Cette page est introuvable': L('Deze pagina is niet gevonden', 'This page cannot be found', 'Diese Seite wurde nicht gefunden'),
    'La page que vous cherchez n\'existe pas ou a été déplacée. Vous pouvez revenir à l\'accueil ou accéder directement à nos services.': L(
      'De pagina die u zoekt bestaat niet of werd verplaatst. U kunt terugkeren naar de homepage of meteen naar onze diensten gaan.',
      'The page you are looking for does not exist or has been moved. You can return to the home page or go straight to our services.',
      'Die gesuchte Seite existiert nicht oder wurde verschoben. Sie können zur Startseite zurückkehren oder direkt zu unseren Leistungen gehen.'),
    'Retour à l\'accueil': L('Terug naar de homepage', 'Back to the home page', 'Zurück zur Startseite'),
    'Pages principales': L('Belangrijkste pagina\'s', 'Main pages', 'Wichtigste Seiten'),
    'Pages les plus consultées': L('Meest bezochte pagina\'s', 'Most visited pages', 'Meistbesuchte Seiten')
  }
};
