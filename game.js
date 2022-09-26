
class Game {
  constructor() {
    this.player1 = new Player('Human', '🦊');
    this.player2 = new Player('Computer', '🖥');
    // this.player1Challenger = this.player1.challenger;
    // this.player2Challenger = this.player2.challenger;
    this.gameChallengers = [];
    this.gameIconChallengers = [];
    this.challengerWinner = '';
    this.gameType = gameType;
    this.winner = '';
    this.winnerIcon = '';
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

  determineDeluxeWinner() {
    if (this.gameChallengers.includes('rock') && this.gameChallengers.includes('paper')) {
      this.challengerWinner = 'paper'
    } else if (this.gameChallengers.includes('paper') && this.gameChallengers.includes('scissors')) {
      this.challengerWinner = 'scissors'
    } else if (this.gameChallengers.includes('scissors') && this.gameChallengers.includes('rock')) {
      this.challengerWinner = 'rock'
    } else if (this.gameChallengers.includes('rock') && this.gameChallengers.includes('fingerGun')) {
      this.challengerWinner = 'rock'
    } else if (this.gameChallengers.includes('kowabunga') && this.gameChallengers.includes('fingerGun')) {
      this.challengerWinner = 'fingerGun'
    } else if (this.gameChallengers.includes('kowabunga') && this.gameChallengers.includes('rock')) {
      this.challengerWinner = 'kowabunga'
    } else if (this.gameChallengers.includes('scissors') && this.gameChallengers.includes('kowabunga')) {
      this.challengerWinner = 'kowabunga'
    } else if (this.gameChallengers.includes('fingerGun') && this.gameChallengers.includes('paper')) {
      this.challengerWinner = 'fingerGun'
    } else if (this.gameChallengers.includes('scissors') && this.gameChallengers.includes('fingerGun')) {
      this.challengerWinner = 'scissors'
    } else if (this.gameChallengers.includes('kowabunga') && this.gameChallengers.includes('paper')) {
      this.challengerWinner = 'paper'
    } else {
      this.challengerWinner = "Draw"
    } this.declareWinner();
  }


  declareWinner() {
    if (this.player1.challenger === this.challengerWinner){
      this.winner = this.player1;
      this.player1.wins++;
    } else if (this.player2.challenger === this.challengerWinner) {
      this.winner = this.player2;
      this.player2.wins++;
    } else if (this.challengerWinner === "Draw") {
      return;
    }
  }

  resetGame() {
    this.player1.challenger = '';
    this.player2.challenger = '';
    this.gameChallengers = [];
    this.gameIconChallengers = [];
    this.challengerWinner = '';
    this.winner = '';
    this.winnerIcon = '';
  }
}
