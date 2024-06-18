const DOMgameBoard = document.querySelector(`.container`);

let turnMark = `O`;

let gameBoard = [[0,0,0],
                 [0,0,0],
                 [0,0,0]];

function getTargetCoords(target){
    switch(target.id){
        case `1`:
            return [0,0];
        break;
        case `2`:
            return [0,1];
        break;
        case `3`:
            return [0,2];
        break;
        case `4`:
            return [1,0];
        break;
        case `5`:
            return [1,1];
        break;
        case `6`:
            return [1,2];
        break;
        case `7`:
            return [2,0];
        break;
        case `8`:
            return [2,1];
        break;
        case `9`:
            return [2,2];
        break;
        default:
            return false;
    }
}

function writeToGameBoard(target, mark) {
    let input = getTargetCoords(target);
    if(gameBoard[input[0]][input[1]] == `X` || `O`) {
        return false;
    } else {
        gameBoard[input[0]][input[1]] = mark;
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

DOMgameBoard.addEventListener(`click`, writeToGameBoard(e.target, changeTurnMark()));


while(!checkRows() && !checkColumns() && !checkDiagonals()) {
    writeToGameBoard();
    console.log(gameBoard)
}