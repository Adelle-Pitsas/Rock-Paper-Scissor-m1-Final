class Game {
  constructor(gameType) {
    this.player1 = new Player('Player', '🦊');
    this.player2 = new Player('Computer', '🖥');
    this.gameChallengers = [];
    this.gameIconChallengers = [];
    this.challengerWinner = '';
    this.gameType = '';
    this.challengerOptions = '';
    this.classicChallengers = ['rock', 'paper', 'scissors'];
    this.deluxeChallengers = ['rock', 'paper', 'scissors', 'fingerGun', 'kowabunga'];
    this.winner = '';
    this.winnerIcon = '';
  }

  filterGameType() {
    if (this.gameType === 'classic') {
      this.deterimineClassicWinner()
    } else if (this.gameType === 'deluxe') {
      this.determineDeluxeWinner()
    }
  };

  deterimineClassicWinner() {
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
  };

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
  };


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
  };

  resetGameInfo() {
    this.challengerOptions = '';
    this.player1.challenger = '';
    this.player2.challenger = '';
    this.gameChallengers = [];
    this.gameIconChallengers = [];
    this.challengerWinner = '';
    this.winner = '';
    this.winnerIcon = '';
  }
};
