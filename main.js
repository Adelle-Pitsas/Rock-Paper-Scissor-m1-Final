var rock = 'rock'
var paper = 'paper'
var scissors = 'scissors'

var player1 = new Player("human", "hi", 0)

var player2 = new Player("computer", "hi2", 0)

var newGame = new Game(player1, player2)

newGame.gameType = 'classic'
