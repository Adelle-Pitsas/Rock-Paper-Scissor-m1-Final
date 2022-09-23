//Global Variables
var rock = 'rock';
var scissors = 'scissors';
var paper = 'paper';
var fingerGun = 'finger-gun';
var kowabunga = 'kowabunga';
var classicChallengers = [rock, paper, scissors];
var deluxeChallengers = [rock, paper, scissors, fingerGun, kowabunga];
var challengerArray
var gameType
var newGame = new Game(gameType);



//query selectors
var classicGameButton = document.querySelector('#classicGameButton');
var deluxeGameButton = document.querySelector('#deluxeGameButton');
var rockIcon = document.querySelector('#rock');
var paperIcon = document.querySelector('#paper');
var scissorsIcon = document.querySelector('#scissors');
var challengerView = document.querySelector('#challengerView');
var modeView = document.querySelector('#modeView');
var classicChallengersSection = document.querySelector('#classicChallengers');
var deluxeChallengersSection = document.querySelector('#deluxeChallengers');

//Event Listeners
classicGameButton.addEventListener('click', chooseClassicMode);
deluxeGameButton.addEventListener('click', chooseDeluxeMode);
classicChallengersSection.addEventListener('click', chooseChallengers);

//Functions
function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}

function chooseClassicMode() { /*updating the Data Model*/
  gameType = 'classic';
  newGame.gameType = 'classic';
  determineGameType(gameType);
  displayChallengers(gameType);
}

function chooseDeluxeMode() { /*updating the Data Model*/
  gameType = 'deluxe';
  newGame.gameType = 'deluxe';
  determineGameType(gameType);
  displayChallengers(gameType);
}

function determineGameType(type) {
  challengerArray = ''
  if (gameType === type) {
    challengerArray = classicChallengers;
  } else {
    challengerArray = deluxeChallengers;
  }
}

function displayChallengers(gameType) { /*updating the DOM*/
  hide(modeView);
  show(challengerView);
  if(gameType === 'classic') {
    show(classicChallengersSection);
  } else {
    show(deluxeChallengersSection);
  }
}

function chooseChallengers(event) {
  if(event.target.classList[1] === 'challenger') {
    console.log(event.target.id)
    newGame.player1.challenger = event.target.id;
    newGame.player2.takeTurn(challengerArray);
  }
}
