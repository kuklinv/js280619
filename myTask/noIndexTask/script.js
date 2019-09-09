

function showCircle(cx, cy, radius, cb) {
    let baseEl = document.querySelector('.base');
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    baseEl.append(div);
    cb(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
    }, 0);


}

let startButton = document.querySelector('.start');
startButton.addEventListener('click', function () {
    showCircle(200, 200, 100, function (div) {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
});