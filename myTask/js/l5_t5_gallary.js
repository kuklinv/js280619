let largeImg = document.querySelector('#largeImg');
let ulTumbs = document.querySelector('#tumbs');
// console.log(ulTumbs);
// console.log(largeImg);

ulTumbs.addEventListener('click', function (e) {
    e.preventDefault(); //TODO сейчас остановлен вопрос по поводу дефолтного поведенич при нажатии - кгда убираем галлерею. но во первых пропадает галлерея. во вторых выводиться один большой имадж
   if (target.tagName != 'IMG') {
       return;
   }
   largeImg.setAttribute('src', 'target.src')
});