// task 1

let linksElements = [...document.querySelectorAll('a')];
linksElements.forEach(function(elem) {
  if (elem.matches('a[href^=http]')) {
    elem.classList.add('external');
  }
});


//  'a[href^=http]'


