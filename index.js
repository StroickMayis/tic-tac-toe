let gameBoard = [[0,0,0],
                 [0,0,0],
                 [0,0,0]];

function promptUser(){
    let input = prompt(`enter a row number, and a column number.`);
    return input;
}

function convertInputToArray(input){
    input = input.split(``);
    input[0] = +input[0];
    input[1] = +input[1];
    return input;
}

function writeToGameBoard() {
    let input = convertInputToArray(promptUser());
    gameBoard[input[0]][input[1]] = input[2];
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

while(!checkRows() && !checkColumns() && !checkDiagonals()) {
    writeToGameBoard();
    console.log(gameBoard)
}