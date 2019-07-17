// task 1

let linksElements = document.querySelectorAll('a');
for (let i = 0; i < linksElements.length; i += 1) {
  if (linksElements[i].matches('a[href^=""]')) {
  	linksElements[i].classList.add('external');
  }
}




