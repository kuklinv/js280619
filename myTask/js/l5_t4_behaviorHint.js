// let body = document.querySelector('body');
// let targetDiv = document.querySelector('div');

// document.addEventListener('mouseover', function (e) {
//     let target = e.target;
//     if (target.tagName != 'button') return;
//     let  tooltip = target.getAttribute('data-tooltip');
//     // targetDiv.innerHTML = tooltip;
//     // targetDiv.setAttribute('display', 'block');
//     let toolTipElem = document.createElement('div');
//     toolTipElem.innerHTML = tooltip;
//     toolTipElem.classList.add('floatTip');
//     document.body.appendChild(toolTipElem);
//
//     let coords = target.getBoundingClientRect();
//     let left = coords.left + (target.offsetWidth - toolTipElem.offsetWidth) / 2;
//     if (left < 0) left = 0; // не вылезать за левую границу окна
//
//     let top = coords.top - toolTipElem.offsetHeight - 5;
//     if (top < 0) { // не вылезать за верхнюю границу окна
//         top = coords.top + target.offsetHeight + 5;
//     }
//     toolTipElem.style.left = left + 'px';
//     toolTipElem.style.top = top + 'px';
//
//     showingTooltip = toolTipElem;
// });

var showingTooltip;

document.onmouseover = function(e) {
    var target = e.target;

    var tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) return;

    var tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    var coords = target.getBoundingClientRect();

    var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не вылезать за левую границу окна

    var top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    showingTooltip = tooltipElem;
};

document.onmouseout = function(e) {

    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
    }

};


