class Clock {
    constructor(element) {
        this.element = element;
        this.render();
        let timer;
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

    stop() {
        clearInterval(timer);
    }

    start() {
        // debugger
        timer = setInterval('this.render', 1000);
    }
}

let clock = new Clock(document.querySelector('.time'));
document.querySelector('.start').addEventListener('click', clock.start());  // TODO not work

