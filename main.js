//Global Variables
var gameType
var newGame = new Game(gameType);

//Query Selectors
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
};

function show(element) {
  element.classList.remove('hidden')
};

function chooseClassicMode() {
  gameType = 'classic';
  newGame.gameType = 'classic';
  determineChallengers(gameType);
  displayChallengers(gameType);
};

function chooseDeluxeMode() {
  gameType = 'deluxe';
  newGame.gameType = 'deluxe';
  determineChallengers(gameType);
  displayChallengers(gameType);
};

function determineChallengers(type) {
  if (gameType === 'classic') {
    newGame.challengerOptions = newGame.classicChallengers;
  } else {
    newGame.challengerOptions = newGame.deluxeChallengers;
  }
};

function displayChallengers(gameType) {
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
};

function chooseChallengers(event) {
  if(event.target.classList[1] === 'challenger') {
    newGame.player1.challenger = event.target.id;
    newGame.player2.takeTurn(newGame.challengerOptions);
    compileChallengers();
  }
};

function compileChallengers() {
    newGame.gameChallengers.push(newGame.player1.challenger);
    newGame.gameChallengers.push(newGame.player2.challenger);
    updateChallengers();
};

function updateChallengers() {
  newGame.filterGameType();
  getChallengerImages();
  renderFaceoff();
};


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
};

function renderFaceoff() {
  hide(challengerView);
  hide(changeModeButton)
  faceoffView.innerHTML='';
  show(faceoffView);
  faceoffView.innerHTML+=`
    <section class="faceoff-area">
      <img class="faceoff-challenger" src=${newGame.gameIconChallengers[0]} alt="${newGame.player1.challenger}">
      <img class="vs" src="./images/vs-image.png" alt="versus">
      <img class="faceoff-challenger" src=${newGame.gameIconChallengers[1]} alt="${newGame.player2.challenger}">
    </section>
  `
  getWinnerImage();
  setTimeout(function(){displayWinner();}, 2000)
};


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
};


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
        <img class="faceoff-winner" src=${newGame.winnerIcon} alt=${newGame.challengerWinner}>
        <p class='winner-text'>${newGame.winner.name} wins!</p>
      </section>
    `
  }
  displayWins(humanWinCounter, newGame.player1.wins);
  displayWins(computerWinCounter, newGame.player2.wins);
  displayNewGame();
};

function displayNewGame() {
  setTimeout (function() {hide(winnerDisplay);}, 2000)
  if (newGame.gameType === 'classic') {
    setTimeout (function() {chooseClassicMode();}, 2000)
  } else {
    setTimeout (function() {chooseDeluxeMode();}, 2000)
  }
  newGame.resetGameInfo();
};

function displayWins(counter, playerWins) {
  counter.innerText = ''
  counter.innerText += `
    Wins: ${playerWins}
  `
};

function goToModeChoice() {
  hide(winnerDisplay);
  hide(faceoffView);
  hide(challengerView);
  show(modeView);
  hide(changeModeButton);
};
