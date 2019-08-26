
class Component {
    constructor(element) {
        this._element = element;
    }
}
class Cell extends Component {
    constructor(element, sign) {
        super(element);
        this.sign = sign;
        Cell.cellCounter ++;
    }
    clear() {
        this._element.innerHTML = '';
    }
    renderCross() {
        this._element.innerHTML = `
        <span><img src="../../pic/cross.png"/></span>
        `;
    }

    renderZero() {
        this._element.innerHTML = `
        <span><img src="../../pic/zero.png"/></span>
        `;
    }
}

Cell.cellCounter = 0;
let cellArray = [];
let numberOfCell = 9;
makeCellArray(cellArray);
start(cellArray);
setTimeout(function () {
    return clearAll(cellArray);
}, 2000);


////// functions declaration
function makeCellArray (arr) {
    for (let i = 1; i <= numberOfCell ; i += 1 ) {
        arr.push(new Cell(document.querySelector(`.d${i}`)));
    }
    return arr;
}
function start (arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (i === 0 || i % 2 === 0) {
                arr[i].renderZero();
            } else {
                arr[i].renderCross();
            }
        }
}

function clearAll (arr) {
 for (let i = 0; i < arr.length; i += 1) {
   arr[i].clear();
 }
}

// function game() {
//
// }

