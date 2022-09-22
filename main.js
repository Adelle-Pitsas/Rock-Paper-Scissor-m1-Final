//query selectors
var classicGameButton = document.querySelector('#classicGameButton');
var deluxeGameButton = document.querySelector('#deluxeGameButton');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var challengerView = document.querySelector('#challengerView');
var modeView = document.querySelector('#modeView');

//Event Listeners

classicGameButton.addEventListener('click', chooseClassicMode);


//Functions
function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}

function chooseClassicMode() { /*updating the Data Model*/
  gameType = 'classic';
  determineGameType(gameType);
  displayChallengers();
}

function displayChallengers() { /*updating the DOM*/
  hide(modeView);
  show(challengerView);
}
