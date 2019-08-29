class Clock {
    constructor(element) {
        this.element = element;
        // this.now = new Date();
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        this.startRender();
        // this.element.querySelector('.start').addEventListener('click', this.start.bind(this));
        // this.element.querySelector('.stop').addEventListener('click', this.stop.bind(this));
    }

    start() {
        this.now = new Date();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.seconds = this.now.getSeconds();
        this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
    }

    stop() {
        this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
    }

    startRender() {
        this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
    }
}

let clock = new Clock(document.querySelector('.time'));
console.log(clock);

// clock.start(); // старт
// clock.stop(); // стоп