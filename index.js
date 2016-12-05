var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var morgan = require ('morgan');
var board = require('./board')
var prompt = require ('prompt');

app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, "/../../client")));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

board.printBoard();

var bool = true;

function promptPlayer () {
  prompt.start();

  var markers = ['O', 'X'];
  var marker = '';

  bool ? console.log('Your turn. Where do you want to mark ' + 'O?') :
  console.log('Your turn. Where do you want to mark ' + 'X?')

  prompt.get(['index'], function (err, result) {
    // Log the results.
    bool ? marker = markers[0] : marker = markers [1];
    console.log('You selected: ' + result.index + 'to mark ' + marker);
    board.markBoard(result.index, marker)
    console.log('New Board :')
    board.printBoard();
    
    //change turn
    bool = !bool;
    console.log(bool);

    board.eval() ? console.log(marker + ' won!') : promptPlayer()
    
  });

}

promptPlayer();


