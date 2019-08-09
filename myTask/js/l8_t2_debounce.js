let main = document.querySelector('main');
main.addEventListener('click', (e) => {
    let target = e.target;
    if (target.name != 'debounce') {
        return;
    }
    alert('its debonce');
    // alert('trolle execute' + debounce(#))
});

// function debounce() {
//
// }

// TODO export debonce