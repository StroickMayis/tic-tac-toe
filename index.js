const DOMgameBoard = document.querySelector(`.container`);

let turnMark = `O`;

let turnCounter = 0;

let gameBoard = [[0,0,0],
                 [0,0,0],
                 [0,0,0]];

function getTargetCoords(target){
    let targetCoords = [];
    switch(target.id){
        case `1`:
            targetCoords = [0,0];
        break;
        case `2`:
            targetCoords = [0,1];
        break;
        case `3`:
            targetCoords = [0,2];
        break;
        case `4`:
            targetCoords = [1,0];
        break;
        case `5`:
            targetCoords = [1,1];
        break;
        case `6`:
            targetCoords = [1,2];
        break;
        case `7`:
            targetCoords = [2,0];
        break;
        case `8`:
            targetCoords = [2,1];
        break;
        case `9`:
            targetCoords = [2,2];
        break;
        default:
            return false;
    }
    return targetCoords;
}

function writeToGameBoard(target, mark) {
    let input = getTargetCoords(target);
    if(gameBoard[input[0]][input[1]] === `X` || gameBoard[input[0]][input[1]] === `O` || input == false) {
        changeTurnMark();
        return false;
    } else {
        gameBoard[input[0]][input[1]] = mark;
        turnCounter++;
        if(checkWin()) {
            turnCounter = 0;
            console.log(`${checkWin()} WINS!`);
            gameBoard = [[0,0,0],
                         [0,0,0],
                         [0,0,0]];
        }
        if(turnCounter >= 9) {
            turnCounter = 0;
            console.log(`TIE!`);
            gameBoard = [[0,0,0],
                         [0,0,0],
                         [0,0,0]];
        }
        console.log(gameBoard)
        return true;
    }
    
};

function checkRows(){
    function checkRow(rowNumber){
        if( gameBoard[rowNumber][0] == `X` 
         && gameBoard[rowNumber][1] == `X`
         && gameBoard[rowNumber][2] == `X`) {
            return `X`;
        }else if( gameBoard[rowNumber][0] == `O` 
               && gameBoard[rowNumber][1] == `O`
               && gameBoard[rowNumber][2] == `O`) {
                   return `O`;
        }else {
            return false;
        }
    }
    if(checkRow(0) == `X` || checkRow(1) == `X` || checkRow(2) == `X`) {
        return `X`;
    } else if(checkRow(0) == `O` || checkRow(1) == `O` || checkRow(2) == `O`) {
        return `O`;
    } else {
        return false;
    }
}

function checkColumns(){
    function checkColumn(columnNumber) {
        if( gameBoard[0][columnNumber] == `X` 
         && gameBoard[1][columnNumber] == `X` 
         && gameBoard[2][columnNumber] == `X` ) {
            return `X`;
        }else if( gameBoard[0][columnNumber] == `O` 
               && gameBoard[1][columnNumber] == `O` 
               && gameBoard[2][columnNumber] == `O`) {
                return `O`;
        }else {
            return false;
        }
    }
    if(checkColumn(0) == `X` || checkColumn(1) == `X` || checkColumn(2) == `X`) {
        return `X`;
    } else if(checkColumn(0) == `O` || checkColumn(1) == `O` || checkColumn(2) == `O`) {
        return `O`;
    } else {
        return false;
    }
}

function checkDiagonals(){
    if(gameBoard[0][0] == `X` && gameBoard[1][1] == `X` && gameBoard[2][2] == `X`|| 
       gameBoard[0][2] == `X` && gameBoard[1][1] == `X` && gameBoard[2][0] == `X`) {
         return `X`;
    } else if(gameBoard[0][0] == `O` && gameBoard[1][1] == `O` && gameBoard[2][2] == `O`|| 
              gameBoard[0][2] == `O` && gameBoard[1][1] == `O` && gameBoard[2][0] == `O`) {
                return `O`;
    } else {
        return false;
    }
}

function checkWin() {
    if(checkRows() != false) {
        return checkRows();
    } else if(checkColumns() != false) {
        return checkColumns();
    } else if(checkDiagonals() != false) {
        return checkDiagonals();
    } else {
        return false;
    }
}

function changeTurnMark() {
    if(turnMark == `O`) {
        turnMark = `X`;
    } else {
        turnMark = `O`;
    }
    return turnMark;
}

DOMgameBoard.addEventListener(`click`, (e) => {writeToGameBoard(e.target, changeTurnMark())});
// DOMgameBoard.addEventListener(`click`, (e) => {console.log(e.target)});
