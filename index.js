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
    gameBoard[input[0]][input[1]] = `X`;
    // isDiagonal(input);
};

function checkRows(){
    if(checkRow(0) || checkRow(1) || checkRow(2)){
        return true;
    } else {
        return false;
    }
}

function checkRow(rowNumber){
    return gameBoard[rowNumber][0] == `X` && gameBoard[rowNumber][1] == `X` && gameBoard[rowNumber][2] == `X`;
}

while(!checkRows()) {
    writeToGameBoard();
    console.log(gameBoard)
}

// function isDiagonal(input) {
//     if(checkInput(input,0,1)) {
//         return false;
//     }
//     if(checkInput(input,1,0)) {
//         return false;
//     }
//     if(checkInput(input,1,2)) {
//         return false;
//     }
//     if(checkInput(input,2,1)) {
//         return false;
//     }
//     return true;
// }

// function checkInput(input,row,col) {
//     return input[0] == row && input[1] == col;
// }

