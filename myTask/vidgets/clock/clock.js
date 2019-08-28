class Clock {
    constructor(element) {
        this.element = element;
        this.now = new Date();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.seconds = this.now.getSeconds();
        // this.outputDiv = document.querySelector('.time');
        this._render();
        // this.outputH = document.querySelector('.hours');
        // this.outputM = document.querySelector('.minutes');
        // this.outputS = document.querySelector('.sec');
    }
    start () {

    }
    stop () {

    }
    _render () {             //TODO not rendering
        this.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">${this.minutes}</output><output class="sec">${this.seconds}</output>`;
    }
}
let clock = new Clock(document.querySelector('.time'));

clock.start(); // старт
clock.stop(); // стоп