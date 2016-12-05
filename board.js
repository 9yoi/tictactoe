var Board  = function () {
  this.board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
  };
}
 
Board.prototype.markBoard = function (position, mark) {
    this.board[position] = mark.toUpperCase();
}

Board.prototype.printBoard = function () {
  var board = this.board;

    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

Board.prototype.eval = function () {
  var board = this.board;

  var lines = [[1,2,3], [4,5,6], [7,8,9], 
              [1,4,7], [2,5,8], [3,6,9],
              [1,5,8], [3,5,7]];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (board[line[0]] === 'X' && board[line[1]=== 'X' && board[line[2]]] === 'X') {
      return true;
    }
    if (board[line[0]] === 'O' && board[line[1]=== 'O' && board[line[2]]] === 'O') {
      return true;
    }
  }

  
}

var board = new Board ();
module.exports = board;