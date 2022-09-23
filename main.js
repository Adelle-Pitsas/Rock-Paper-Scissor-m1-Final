//Global Variables
var rock = "./images/rock-hand.png";
var scissors = "./images/scissor-hand.png";
var paper = "./images/Paper-hand.png";
var fingerGun = "./images/fingergun2.png";
var kowabunga = "./images/hang-loose2.png";
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
var faceoffArea = document.querySelector('#faceoffArea');

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
    console.log(event)
    newGame.player1.challenger = event.target.src;
    newGame.player2.takeTurn(challengerArray);
    newGame.gameChallengers = []; /*this should go in the reset game function*/
    newGame.gameChallengers.push(newGame.player1.challenger);
    newGame.gameChallengers.push(newGame.player2.challenger);
    getWinner();
    renderFaceoff();
  }
}

function getWinner() { /*the datamodel*/
  newGame.filterGameType();
}


function renderFaceoff() {
  hide(challengerView);
  faceoffArea.innerHTML='';
  faceoffArea.innerHTML+=`
  <img class="rock challenger" src=${newGame.gameChallengers[0]}>
  <img class="vs" src="./images/vs-image.png">
  <img class="rock challenger" src=${newGame.gameChallengers[1]}>
  `
}
