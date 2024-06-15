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
        return gameBoard[rowNumber][0] == `X` 
            && gameBoard[rowNumber][1] == `X`
            && gameBoard[rowNumber][2] == `X`;
    }

    if(checkRow(0) || checkRow(1) || checkRow(2)){
        return true;
    } else {
        return false;
    }
}

function checkColumns(){
    function checkColumn(columnNumber) {
        return gameBoard[0][columnNumber] == `X` 
            && gameBoard[1][columnNumber] == `X` 
            && gameBoard[2][columnNumber] == `X`;
    
    }
    if(checkColumn(0) || checkColumn(1) || checkColumn(2)){
        return true;
    } else {
        return false;
    }
}

function checkDiagonals(){
    return gameBoard[0][0] == `X` && gameBoard[1][1] == `X` && gameBoard[2][2] == `X`|| 
           gameBoard[0][2] == `X` && gameBoard[1][1] == `X` && gameBoard[2][0] == `X`;
}

while(!checkRows() && !checkColumns() && !checkDiagonals()) {
    writeToGameBoard();
    console.log(gameBoard)
}