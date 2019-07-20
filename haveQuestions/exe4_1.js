// task 1

let linksElements = [...document.querySelectorAll('a')];
linksElements.forEach(function(elem) {
  if (elem.matches('a[href^="http"]') || elem.matches('a[href^="ftp"]'))  {
    elem.classList.add('external');
  }
  if (elem.matches('a[href*="internal"]')) {    // пытался вставить это в первый if как || !elem.matches('a[href*="internal"]')
    elem.classList.remove('external');          // но ничего не вышло, класс слетал у всех элементов
  }
});

