
// TODO импорт debonce

let main = document.querySelector('main');
main.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName != 'BUTTON') {
        return;
    }
    if (target.name = 'trottle') {
        alert('its trottle');

    } else if (target.name = 'debounce') {    //TODO сюда не заходит код!
        alert('its debonce');
    debugger
    }
    // else return;
    // alert('trolle execute' + trottle(#))
});
//
// function trottle() {
//
// }

