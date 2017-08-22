const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = []
    for (let indexRows = 0; indexRows < numberOfRows; indexRows++) {
        let row = []
        for (let indexColumns = 0; indexColumns < numberOfColumns; indexColumns++) {
            row.push(' ')
        }
        board.push(row)
    }
    return board
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = []
    for (let indexRows = 0; indexRows < numberOfRows; indexRows++) {
        let row = []
        for (let indexColumns = 0; indexColumns < numberOfColumns; indexColumns++) {
            row.push(null)
        }
        board.push(row)
    }

    let numberOfBombsPlaced = 0
    while (numberOfBombsPlaced < numberOfBombs) {
        // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs.
        let randomRowIndex = Math.floor(Math.random() * numberOfRows)
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns)

        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced += 1
    }

    return board
}

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'))
}

let playerBoard = generatePlayerBoard(3, 4)
let bombBoard = generateBombBoard(3, 4, 5)

console.log('Player Board:')
printBoard(playerBoard)

console.log('Bomb Board: ')
printBoard(bombBoard)