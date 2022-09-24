//Global Variables
var classicChallengers = ['rock', 'paper', 'scissors'];
var deluxeChallengers = ['rock', 'paper', 'scissors', 'fingerGun', 'kowabunga'];
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
var faceoffView = document.querySelector('#faceoffView');
var changeModeButton = document.querySelector('#changeModeButton');
var winnerDisplay = document.querySelector('#winnerDisplay');

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
  show(changeModeButton);
  if(gameType === 'classic') {
    show(classicChallengersSection);
  } else {
    show(deluxeChallengersSection);
  }
}

function chooseChallengers(event) { /*updating data model*/
  if(event.target.classList[1] === 'challenger') {
    console.log(event.target.id)
    newGame.player1.challenger = event.target.id;
    newGame.player2.takeTurn(challengerArray);
    newGame.gameChallengers = []; /*this should go in the reset game function*/
    newGame.gameChallengers.push(newGame.player1.challenger);
    newGame.gameChallengers.push(newGame.player2.challenger);
    getWinner();
  }
}

function getWinner() { /*the datamodel*/
  newGame.filterGameType();
  getChallengerImages();
  getWinnerImage();
}


function getChallengerImages(){
  newGame.gameIconChallengers = [];
  for (var i = 0; i < newGame.gameChallengers.length; i++) {
    if(newGame.gameChallengers[i] === 'rock') {
      newGame.gameIconChallengers.push("./images/rock-hand.png")
    } else if (newGame.gameChallengers[i] === 'paper') {
      newGame.gameIconChallengers.push("./images/Paper-hand.png")
    } else if (newGame.gameChallengers[i] === 'scissors') {
      newGame.gameIconChallengers.push("./images/scissor-hand.png")
    } else if (newGame.gameChallengers[i] === 'fingerGun') {
      newGame.gameIconChallengers.push("./images/fingergun2.png")
    } else if (newGame.gameChallengers[i] === 'kowabunga') {
      newGame.gameIconChallengers.push("./images/hang-loose2.png")
    }
  }
}

function getWinnerImage() {
  newGame.winnerIcon = '';
  if(newGame.challengerWinner === 'rock') {
    newGame.winnerIcon = "./images/rock-hand.png"
  } else if (newGame.challengerWinner === 'paper') {
    newGame.winnerIcon = "./images/Paper-hand.png"
  } else if (newGame.challengerWinner === 'scissors') {
    newGame.winnerIcon = "./images/scissor-hand.png"
  } else if (newGame.challengerWinner === 'fingerGun') {
    newGame.winnerIcon = "./images/fingergun2.png"
  } else if (newGame.challengerWinner === 'kowabunga') {
    newGame.winnerIcon = "./images/hang-loose2.png"
  }
  renderFaceoff();
}

function renderFaceoff() {
  hide(challengerView);
  faceoffView.innerHTML='';
  faceoffView.innerHTML+=`
    <section class="faceoff-area">
      <img class="faceoff-challenger" src=${newGame.gameIconChallengers[0]}>
      <img class="vs" src="./images/vs-image.png">
      <img class="faceoff-challenger" src=${newGame.gameIconChallengers[1]}>
    </section>
  `
  setTimeout(function(){displayWinner();}, 2500)
}


function displayWinner() {
  hide(faceoffView)
  winnerDisplay.innerHTML='';
  winnerDisplay.innerHTML+= `
    <section class="winner">
      <img class="faceoff-winner" src=${newGame.winnerIcon}>
    </section>
  `
}
