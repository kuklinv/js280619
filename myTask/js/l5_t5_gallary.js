let largeImg = document.querySelector('#largeImg');
let ulTumbs = document.querySelector('#tumbs');
ulTumbs.addEventListener('click', function (e) {
    e.preventDefault();
   let target = e.target;
    if (target.tagName != 'IMG') {
       return;
   }
    let targetHref = target.parentElement.href;
    largeImg.setAttribute('src', `${targetHref}`);
});