let gameStep = 0;
let newGameButton = document.querySelector('BUTTON');
newGameButton.addEventListener('click', () => clearAll(cellArray));


class Component {
    constructor(element) {
        this._element = element;
    }

    clear() {
        this._element.innerHTML = '';
        this.busy = false;
        this.sign = '';
    }

    renderCross() {
        this._element.innerHTML = `
        <span><img src="../../pic/cross.png"/></span>
        `;
        this.busy = true;
        this.sign = 'cross';
        gameStep++;
    }

    renderZero() {
        this._element.innerHTML = `
        <span><img src="../../pic/zero.png"/></span>
        `;
        this.busy = true;
        this.sign = 'zero';
        gameStep++;
    }
}

class Cell extends Component {
    constructor(element) {
        super(element);
        this.sign = '';
        this.busy = false;
        this._element.addEventListener('click', game.bind(this));
        Cell.cellCounter++;
    }

}

Cell.cellCounter = 0;
let cellArray = [];
let numberOfCell = 9;  // for start array
makeCellArray(cellArray);
start(cellArray);

////// functions declaration
function makeCellArray(arr) {
    for (let i = 1; i <= numberOfCell; i += 1) {
        arr.push(new Cell(document.querySelector(`.d${i}`)));
    }
    return arr;
}

function start(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (i === 0 || i % 2 === 0) {
            arr[i].renderZero();
        } else {
            arr[i].renderCross();
        }
    }
}

function clearAll(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].clear();
        gameStep = 0;
    }
}

function game() {                                //  TODO game algorithm
    this.renderCross();
    while (!checkVictory()) {
    aiStep();
    this.renderCross();
    }
    return
    // if (gameStep == 0 || gameStep % 2 == 0)  this.renderCross();
    // else  this.renderZero();
}

function aiStep() {

}

function checkVictory() {

}



