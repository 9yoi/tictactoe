var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var morgan = require ('morgan');
var board = require('./board')

app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, "/../../client")));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

board.printBoard();
