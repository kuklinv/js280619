let gameStep = 0;
let newGameButton = document.querySelector('BUTTON');
newGameButton.addEventListener('click', () => clearAll(cellArray));
let gameResult = document.querySelector('OUTPUT');
let humanPlayer = 'cross';                                // default sign
let aiPlayer = 'zero';
let startBoard = [];                                      // start state of game board

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
        this._element.addEventListener('click', game.bind(this));   // !!!!!!!!!!!!!
        Cell.cellCounter++;
    }
}

Cell.cellCounter = 0;
let cellArray = [];    // array of Cell class object instants
let numberOfCell = 9;  // for start array
makeCellArray(cellArray);  // make array of Cell class object instants
start(cellArray);      // beautiful in start )) its only for start picture

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

function clearAll(arr) {                             // clear all and set state free
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].clear();
        gameStep = 0;
    }
}

function game() {                                //  TODO game algorithm
    while (checkVictory(cellArray)) {
        this.renderCross();                              // human move
        let emptyBoard = emptyCell(cellArray);
        console.log(emptyBoard);
        aiMove(emptyBoard);
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function aiMove(arr) {
    let number = randomInteger(1, arr.length - 1);
    arr[number].renderZero();
    startBoard.push(arr[number]);
}

function emptyCell(board) {
    return board.filter(item => item.busy === false);
}

//
function checkVictory(cellArray) {
    if (
        (cellArray[0].sign == 'cross' && cellArray[1].sign == 'cross' && cellArray[2].sign == 'cross') ||
        (cellArray[3].sign == 'cross' && cellArray[4].sign == 'cross' && cellArray[5].sign == 'cross') ||
        (cellArray[6].sign == 'cross' && cellArray[7].sign == 'cross' && cellArray[8].sign == 'cross') ||
        (cellArray[0].sign == 'cross' && cellArray[3].sign == 'cross' && cellArray[6].sign == 'cross') ||
        (cellArray[1].sign == 'cross' && cellArray[4].sign == 'cross' && cellArray[7].sign == 'cross') ||
        (cellArray[2].sign == 'cross' && cellArray[5].sign == 'cross' && cellArray[8].sign == 'cross') ||
        (cellArray[0].sign == 'cross' && cellArray[4].sign == 'cross' && cellArray[8].sign == 'cross') ||
        (cellArray[2].sign == 'cross' && cellArray[4].sign == 'cross' && cellArray[6].sign == 'cross')
    ) {
        gameResult.value = 'YOU WIN!';                 // winner output
        return true;
    } else if (
        (cellArray[0].sign == 'zero' && cellArray[1].sign == 'zero' && cellArray[2].sign == 'zero') ||
        (cellArray[3].sign == 'zero' && cellArray[4].sign == 'zero' && cellArray[5].sign == 'zero') ||
        (cellArray[6].sign == 'zero' && cellArray[7].sign == 'zero' && cellArray[8].sign == 'zero') ||
        (cellArray[0].sign == 'zero' && cellArray[3].sign == 'zero' && cellArray[6].sign == 'zero') ||
        (cellArray[1].sign == 'zero' && cellArray[4].sign == 'zero' && cellArray[7].sign == 'zero') ||
        (cellArray[2].sign == 'zero' && cellArray[5].sign == 'zero' && cellArray[8].sign == 'zero') ||
        (cellArray[0].sign == 'zero' && cellArray[4].sign == 'zero' && cellArray[8].sign == 'zero') ||
        (cellArray[2].sign == 'zero' && cellArray[4].sign == 'zero' && cellArray[6].sign == 'zero')
    ) {
        gameResult.value = 'AI WIN!';                 // winner output
        return true;
    } else {
        return false;
    }
}


// (board[0] == player && board[1] == player && board[2] == player) ||
// (board[3] == player && board[4] == player && board[5] == player) ||
// (board[6] == player && board[7] == player && board[8] == player) ||
// (board[0] == player && board[3] == player && board[6] == player) ||
// (board[1] == player && board[4] == player && board[7] == player) ||
// (board[2] == player && board[5] == player && board[8] == player) ||
// (board[0] == player && board[4] == player && board[8] == player) ||
// (board[2] == player && board[4] == player && board[6] == player)
//





