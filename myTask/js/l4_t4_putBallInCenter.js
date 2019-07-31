let  field = document.querySelector('#field2');
let ball = document.querySelector('#ball');
// window.innerWidth = field.offsetWidth;
// window.innerHeight = field.offsetHeight;
ball.style.width = ball.style.height = "40px";

setTimeout(() => {
    let centerBall = getComputedStyle(ball).width.slice(0, -2)/2;
    ball.style.marginLeft = (field.clientWidth/2 - centerBall) + 'px';
    ball.style.marginTop = (field.clientHeight/2 - centerBall) + 'px';
}, 2000);