function game() {

}

class Cell {
    constructor (element, sign) {
        this._element = element;
        this.sign = sign;
        // this.render();
        this._element.querySelector('span').addEventListener('click', game);
    }
    show () {
        this._element.setAttribute('hidden', true);
    }
    hide () {
        this._element.removeAttribute('hidden');
    }
    toggle() {
        this._element.toggle('hidden');
    }
    renderCross () {
        this._element.innerHTML = `
        <span><img src="../../pic/cross.png"/></span>
        `;
    }
    renderZero () {
        this._element.innerHTML = `
        <span><img src="../../pic/zero.png"/></span>
        `;
    }
}


let cell1 = new Cell {
    document.querySelector('.d1')
}
let cell2 = new Cell {
    document.querySelector('.d2')
}
let cell3 = new Cell {
    document.querySelector('.d3')
}
let cell4 = new Cell {
    document.querySelector('.d4')
}
let cell5 = new Cell {
    document.querySelector('.d5')
}
let cell6 = new Cell {
    document.querySelector('.d6')
}
let cell7 = new Cell {
    document.querySelector('.d7')
}
let cell8 = new Cell {
    document.querySelector('.d8')
}
let cell9 = new Cell {
    document.querySelector('.d9')
}

cell1.hide();

