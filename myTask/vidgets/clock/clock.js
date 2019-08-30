class Clock {
    constructor(element) {
        this.element = element;
        this.render();
        document.querySelector('.start').addEventListener('click', this.start());
    }

    formatTime(item) {
        if (item < 10) return "0" + item;
        else return item;
    }

    render() {
        this.now = new Date();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.seconds = this.now.getSeconds();
        let h = this.formatTime(this.hours);
        let min = this.formatTime(this.minutes);
        let sec = this.formatTime(this.seconds);
        this.element.innerHTML = `<output class="hours">${h}</output><output class="minutes">: ${min}</output><output class="sec">: ${sec}</output>`;
    }

    start() {
        setInterval('this.render()', 1000);
    }
}

let clock = new Clock(document.querySelector('.time'));

// class Clock {
//     constructor(element) {
//         this.element = element;
//         this.hours = '00';
//         this.minutes = '00';
//         this.seconds = '00';
//         this.startRender();
//         document.querySelector('.start').addEventListener('click', this.start.bind(this));
//         document.querySelector('.stop').addEventListener('click', this.stop.bind(this));
//     }
//
//     start() {
//         this.now = new Date();
//         this.hours = this.now.getHours();
//         this.minutes = this.now.getMinutes();
//         this.seconds = this.now.getSeconds();
//         let h = this.formatTime(this.hours);
//         let min = this.formatTime(this.minutes);
//         let sec = this.formatTime(this.seconds);
//         this.element.innerHTML = `<output class="hours">${h}</output><output class="minutes">: ${min}</output><output class="sec">: ${sec}</output>`;
//         setInterval('this.start', 1000); // TODO not work
//     }
//
//     stop() {
//
//     }
//
//     startRender() {
//         this.element.innerHTML = `<output class="hours">${this.hours}</output><output class="minutes">: ${this.minutes}</output><output class="sec">: ${this.seconds}</output>`;
//     }
//     formatTime(item) {
//         if (item < 10) return "0" + item;
//         else return item;
//     }
// }
//
// let clock = new Clock(document.querySelector('.time'));
//
// // clock.start(); // старт
// // clock.stop(); // стоп