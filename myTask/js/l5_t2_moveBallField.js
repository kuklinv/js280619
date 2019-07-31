let  field = document.querySelector('#field');
let ball = document.querySelector('#ball');
field.addEventListener('click', function (e) {
    setTimeout(() => {
        let centerBall = getComputedStyle(ball).width.slice(0, -2)/2;
        ball.style.marginLeft = (e.offsetX - centerBall) + 'px';
        ball.style.marginTop = (e.offsetY - centerBall) + 'px';
    }, 0);
});


