var lastPlayer = ".";

function isGameOver(board) {
    return isGameBoardFull(board) || isThereAWinnerInARow(board) || isThereAWinnerInAColumn(board) || isThereAWinnerInFirstDiagonal(board) || isThereAWinnerInSecondDiagonal(board);
}

function isGameBoardFull(board) {
    return -1 == board.indexOf('.');
}

function isThereAWinnerInFirstDiagonal(board) {
    var diagonal = "";
    for (j = 0; j < 3; j++) {
        diagonal += board.charAt(j * 4);
    }
    return isWinning(diagonal)
}

function isThereAWinnerInSecondDiagonal(board) {
    var diagonal = "";
    for (j = 0; j < 3; j++) {
        diagonal += board.charAt(j * 2 + 2);
    }
    return isWinning(diagonal)
}

function isThereAWinnerInARow(board) {
    for (i = 0; i < 3; i++) {
        var row = board.substring(i * 3, i * 3 + 3);
        if (isWinning(row))
            return true;
    }
    return false;
}

function isThereAWinnerInAColumn(board) {
    for (i = 0; i < 3; i++) {
        var column = "";
        for (j = 0; j < 3; j++) {
            column += board.charAt(j * 3 + i);
        }
        if (isWinning(column))
            return true;
    }
    return false;
}

function isWinning(place) {
    return (place == "XXX" || place == "OOO");
}

function isCellEmpty(x, y, board) {
    return "." == board.charAt(3 * x + y);
}

function isItMyTurn(player) {
    return player == findNextPlayer();
}

function play(x, y, board, player) {
    if (isGameOver(board)) {
        return false;
    }
    if (!isItMyTurn(player)) {
        return false;
    }
    if (!isCellEmpty(x, y, board)) {
        return false;
    }
    lastPlayer = player;
    return board.substring(0, 3 * x + y) + player + board.substring(3 * x + y + 1, board.length);
}

function findNextPlayer() {
    if (lastPlayer != 'X') {
        return  'X';
    }
    return 'O';
}
