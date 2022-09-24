
class Game {
  constructor(gametype/*this will be def in main*/) {
    this.player1 = new Player('human', '🦊');
    this.player2 = new Player('computer', '🖥');
    this.player1Challenger = this.player1.challenger;
    this.player2Challenger = this.player2.challenger;
    this.gameChallengers = [];
    this.gameIconChallengers = [];
    this.challengerWinner = ''
    this.gameType = gameType;
    this.winner = '';
  }

  filterGameType() {
    if (this.gameType === 'classic') {
      this.deterimineClassicWinner()
    } else if (this.gameType === 'deluxe') {
      this.determineDeluxeWinner()
    }
  }

  deterimineClassicWinner() {
    this.challengerWinner = ''; /*this should go in the reset gane function*/
    if (this.gameChallengers.includes('rock') && this.gameChallengers.includes('paper')) {
      this.challengerWinner = 'paper'
    } else if (this.gameChallengers.includes('paper') && this.gameChallengers.includes('scissors')) {
      this.challengerWinner = 'scissors'
    } else if (this.gameChallengers.includes('scissors') && this.gameChallengers.includes('rock')) {
      this.challengerWinner = 'rock'
    } else {
      this.challengerWinner = "Draw"
    }
    this.declareWinner();
  }

  deterimineDeluxeWinner() {
    if (this.gameChallengers.includes(rock && paper)) {
      this.challengerWinner = paper
    } else if (this.gameChallengers.includes(paper && scissors)) {
      this.challengerWinner = scissors
    } else if (this.gameChallengers.includes(scissors && rock)) {
      this.challengerWinner = rock
    } else if (this.gameChallengers.includes(rock && gun)) {
      this.challengerWinner = rock
    } else if (this.gameChallengers.includes(kowabunga && gun)) {
      this.challengerWinner = gun
    } else if (this.gameChallengers.includes(kowabunga && rock)) {
      this.challengerWinner = kowabunga
    } else if (this.gameChallengers.includes(scissors && kowabunga)) {
      this.challengerWinner = kowabunga
    } else if (this.gameChallengers.includes(gun && paper)) {
      this.challengerWinner = gun
    } else if (this.gameChallengers.includes(scissors && gun)) {
      this.challengerWinner = scissors
    } else if (this.gameChallengers.includes(kowabunga && paper)) {
      this.challengerWinner = paper
    } else {
      this.challengerWinner = "Draw"
    } this.declareWinner();
  }


  declareWinner() {
    if (this.player1Challenger === this.challengerWinner){
      this.winner = this.player1;
      this.player1.wins++;
    } else if (this.player2Challenger === this.challengerWinner) {
      this.winner = this.player2;
      this.player2.wins++;
    } else if (this.challengerWinner === "Draw") {
      return;
    }
  }
}
