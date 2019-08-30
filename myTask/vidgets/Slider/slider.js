class Slider {
    constructor(element) {
        this.element = element;
        this.render();
    }
    render() {
        this.element.innerHTML = `
            <input type="range" id="slider2" name="bgcolor2">
            <label for="bgcolor2">background color</label>
            `
    }
}

let slider = new Slider(document.querySelector('#slider'));
console.log(slider);