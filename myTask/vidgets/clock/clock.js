class Clock {
    constructor(element) {
        this.element = element;
        this.render();
        document.querySelector('.start').addEventListener('click', start.bind(this));
        document.querySelector('.stop').addEventListener('click', stop.bind(this));
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

}

let clock1 = new Clock(document.querySelector('.time'));
console.log(clock1);
let timer;

function start() {
    timer = setInterval(function () {
        clock1.render();
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

// document.querySelector('.alert').addEventListener('click', alert.bind('Iam test'));