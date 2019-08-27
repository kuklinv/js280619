
let gameStep = 0;
let newGameButton = document.querySelector('BUTTON');
newGameButton.addEventListener('click', () => clearAll(cellArray));
// let cellsInGame = document.querySelector('.dall');   TODO не работает листенер на ячейках и собственно сама игра
// cellsInGame.addEventListener('click', function (e) {
//     let target = e.target;
//     if (gameStep == 0 || gameStep % 2 == 0) {
//         target.renderCross();
//     } else {
//         target.renderZero();
//     }
//     gameStep ++;
// });

class Component {
    constructor(element) {
        this._element = element;
    }
}
class Cell extends Component {
    constructor(element) {
        super(element);
        this.sign = '';
        this.busy = false;
        Cell.cellCounter ++;
        // this._element.addEventListener('click', game(this._element));
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
    }

    renderZero() {
        this._element.innerHTML = `
        <span><img src="../../pic/zero.png"/></span>
        `;
        this.busy = true;
        this.sign = 'zero';
    }
}

Cell.cellCounter = 0;
let cellArray = [];
let numberOfCell = 9;
makeCellArray(cellArray);
start(cellArray);

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
   gameStep = 0;
 }
}

// function game (e) {
//     let target = e.target;
//  if (gameStep == 0 || gameStep % 2 == 0) {
//      target.renderCross();
//  } else {
//      target.renderZero();
//  }
//     gameStep ++;
// }

