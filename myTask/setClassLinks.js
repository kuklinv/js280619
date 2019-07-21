let linksElements = [...document.querySelectorAll('a[class="forTask"]')];
linksElements.forEach(function (elem) {
  if (elem.matches('a[href^="http"]') || elem.matches('a[href^="ftp"]')) {
    elem.classList.add('external');
  }
  if (elem.matches('a[href*="internal"]')) {
    elem.classList.remove('external');
  }
});
