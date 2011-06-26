test('is the game board full ?', function() {
    equals(isGameOver("XXOOXXXOO"), true);
    equals(isGameOver("XXOOXXXO."), false);
    equals(isGameOver("........."), false);
})

test('has a player won by row', function() {
    equals(isGameOver("XXX......"), true);
    equals(isGameOver("...XXX..."), true);
    equals(isGameOver("......XXX"), true);
    equals(isGameOver(".....XXX."), false);
})

test('has a player won by col', function() {
    equals(isGameOver("X..X..X.."), true);
    equals(isGameOver(".X..X..X."), true);
    equals(isGameOver("..X..X..X"), true);
})

test('has a player won by diagonal', function() {
    equals(isGameOver("X...X...X"), true);
    equals(isGameOver("..X.X.X.."), true);
})

test('Can a player play at a board', function() {
    equals(isCellEmpty(0, 0, "X........"), false);
    equals(isCellEmpty(0, 0, "........."), true);
    equals(isCellEmpty(1, 0, "...X....."), false);
    equals(isCellEmpty(2, 2, "........X"), false);
    equals(isCellEmpty(2, 2, ".......X."), true);
})

test('player take turn', function() {
    equals(isItMyTurn("O"), false);
    equals(isItMyTurn("X"), true);
    play(0, 0, ".........", "X");
    equals(isItMyTurn("X"), false);
    equals(isItMyTurn("O"), true);
    play(1, 0, "X........", "O");
    equals(isItMyTurn("X"), true);
    equals(isItMyTurn("O"), false);
})

test('playing', function() {
    var board = play(0, 0, ".........", "X");
    equals(board, "X........");
    board = play(0, 1, board, "O");
    equals(board, "XO.......");
    board = play(1, 0, board, "X");
    equals(board, "XO.X.....");
    board = play(1, 1, board, "O");
    equals(board, "XO.XO....");
    board = play(2, 0, board, "X");
    equals(board, "XO.XO.X..");
    equals(play(2, 2, board, "O"), false);
})

