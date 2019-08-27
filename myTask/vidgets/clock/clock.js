class Clock {
    constructor(element) {
        this.element = element;
        this.now = new Date();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.seconds = this.now.getSeconds();
        this.outputDiv = document.querySelector('.time');
        this._render();
        this.outputH = document.querySelector('.hours');
        this.outputM = document.querySelector('.minutes');
        this.outputS = document.querySelector('.sec');
    }
    start () {

    }
    stop () {

    }
    _render () {
        this.outputDiv.innerHTML = `
    <output class="hours">`${this.hours}`</output><output class="minutes">minutes</output><output class="sec">seconds</output>
    `;
    }
}

let clock = new Clock(document.querySelector('#clock'));

clock.start(); // старт
clock.stop(); // стоп