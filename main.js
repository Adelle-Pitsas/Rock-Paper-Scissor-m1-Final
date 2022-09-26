//Global Variables
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
var humanWinCounter = document.querySelector('#humanWinCounter');
var computerWinCounter = document.querySelector('#computerWinCounter');

//Event Listeners
classicGameButton.addEventListener('click', chooseClassicMode);
deluxeGameButton.addEventListener('click', chooseDeluxeMode);
classicChallengersSection.addEventListener('click', chooseChallengers);
deluxeChallengersSection.addEventListener('click', chooseChallengers);
changeModeButton.addEventListener('click', goToModeChoice);

//Functions
function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}

function chooseClassicMode() { /*updating the Data Model*/
  gameType = ''
  gameType = 'classic';
  newGame.gameType = 'classic';
  determineChallengers(gameType);
  displayChallengers(gameType);
}

function chooseDeluxeMode() { /*updating the Data Model*/
  gameType = '';
  gameType = 'deluxe';
  newGame.gameType = 'deluxe';
  determinechallengers(gameType);
  displayChallengers(gameType);
}

function determineChallengers(type) {
  if (gameType === 'classic') {
    newGame.challengerOptions = newGame.classicChallengers;
  } else {
    newGame.challengerOptions = newGame.deluxeChallengers;
  }
}

function displayChallengers(gameType) { /*updating the DOM*/
  hide(modeView);
  show(challengerView);
  show(changeModeButton);
  if(gameType === 'classic') {
    show(classicChallengersSection);
    hide(deluxeChallengersSection);
  } else {
    show(deluxeChallengersSection);
    hide(classicChallengersSection);
  }
}

function chooseChallengers(event) { /*updating data model*/
  if(event.target.classList[1] === 'challenger') {
    console.log(event.target.id)
    newGame.player1.challenger = event.target.id;
    newGame.player2.takeTurn(newGame.challengerOptions);
    rallyTheTroops();
  }
}

function rallyTheTroops() {
    newGame.gameChallengers.push(newGame.player1.challenger);
    newGame.gameChallengers.push(newGame.player2.challenger);
    updateChallengers();
}

function updateChallengers() { /*the datamodel*/
  newGame.filterGameType();
  getChallengerImages();
  renderFaceoff();
}


function getChallengerImages() {
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

function renderFaceoff() {
  hide(challengerView);
  faceoffView.innerHTML='';
  show(faceoffView);
  faceoffView.innerHTML+=`
    <section class="faceoff-area">
      <img class="faceoff-challenger" src=${newGame.gameIconChallengers[0]}>
      <img class="vs" src="./images/vs-image.png">
      <img class="faceoff-challenger" src=${newGame.gameIconChallengers[1]}>
    </section>
  `
  getWinnerImage();
  setTimeout(function(){displayWinner();}, 2500)
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
}


function displayWinner() {
  hide(faceoffView)
  winnerDisplay.innerHTML='';
  show(winnerDisplay);
  if (newGame.challengerWinner === 'Draw') {
    winnerDisplay.innerHTML+= `
      <section class="winner">
        <p class='draw'>It's a draw!</p>
      </section>
    `
  } else {
    winnerDisplay.innerHTML+= `
      <section class="winner">
        <img class="faceoff-winner" src=${newGame.winnerIcon}>
        <p class='winner-text'>${newGame.winner.name} wins!</p>
      </section>
    `
  }
  displayWins(humanWinCounter, newGame.player1.wins);
  displayWins(computerWinCounter, newGame.player2.wins);
  displayNewGame();
}

function displayNewGame() {
  setTimeout (function() {hide(winnerDisplay);}, 2500)
  if (newGame.gameType === 'classic') {
    setTimeout (function() {chooseClassicMode();}, 2500)
  } else {
    setTimeout (function() {chooseDeluxeMode();}, 2500)
  }
  newGame.resetGameInfo();
}

function displayWins(counter, playerWins) {
  counter.innerText = ''
  counter.innerText += `
    Wins: ${playerWins}
  `
}


function goToModeChoice() {
  hide(winnerDisplay);
  hide(faceoffView);
  hide(challengerView);
  show(modeView);
  hide(changeModeButton);
}
