class Clock {
    constructor(element) {
        this.element = element;
        // this.now = new Date();
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        this.startRender();
        document.querySelector('.start').addEventListener('click', this.start.bind(this));
        document.querySelector('.stop').addEventListener('click', this.stop.bind(this));
    }

    start() {
        // this.noFormatednow = new Date();
        // let formatter = new Intl.DateTimeFormat("ru", {
        //     hour: "numeric",
        //     minute: "numeric",
        //     second: "numeric"
        // });
        // this.now = formatter.format(this.noFormatednow);
        // https://learn.javascript.ru/intl
        this.now = new Date();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.seconds = this.now.getSeconds();
        this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
        setTimeout('start.apply(this, arguments)', 1000); // TODO not work
    }

    stop() {
        this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
    }

    startRender() {
        this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
    }
}

let clock = new Clock(document.querySelector('.time'));
// let t = setTimeout('clock.start()', 500);
// console.log(clock);

clock.start(); // старт
// clock.stop(); // стоп

// function startTime()
// {
//     var tm=new Date();
//     var h=tm.getHours();
//     var m=tm.getMinutes();
//     var s=tm.getSeconds();
//     m=checkTime(m);
//     s=checkTime(s);
//     document.getElementById('txt').innerHTML=h+":"+m+":"+s;
//     t=setTimeout('startTime()',500);
// }
// function checkTime(i)
// {
//     if (i<10)
//     {
//         i="0" + i;
//     }
//     return i;
// }

// function Timer() {
//     var dt=new Date()
//     document.getElementById('time').innerHTML=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
//     setTimeout("Timer()",1000);
// }
// Timer();