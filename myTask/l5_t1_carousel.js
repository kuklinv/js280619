let btnPrev = document.querySelector('button[class="arrow prev"]');
let  btnNext = document.querySelector('button[class="arrow next"]');
let targetUl = document.querySelector('ul[class="images"]');
let listElems = targetUl.querySelectorAll('li');
let position = 0;
let imageWidth = 130;
let imagCount = 3;
btnPrev.onclick = function () {
    position = Math.min(position + imageWidth * imagCount, 0);
    targetUl.style.marginLeft = position + 'px';
};
btnNext.onclick = function () {
    position = Math.max(position - imageWidth * imagCount, -imageWidth * (listElems.length - imagCount));
    targetUl.style.marginLeft = position + 'px';
};
