'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var indexRows = 0; indexRows < numberOfRows; indexRows++) {
        var row = [];
        for (var indexColumns = 0; indexColumns < numberOfColumns; indexColumns++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var indexRows = 0; indexRows < numberOfRows; indexRows++) {
        var row = [];
        for (var indexColumns = 0; indexColumns < numberOfColumns; indexColumns++) {
            row.push(null);
        }
        board.push(row);
    }

    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs.
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced += 1;
    }

    return board;
};

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board:');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);