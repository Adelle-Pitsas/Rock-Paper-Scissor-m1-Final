var player1 = new Player(); /*this will be declared and clarified in the main.js file*/
var player2 = new Player();

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Challenger = player1.challenger;
    this.player2Challenger = player2.challenger;
    this.gameChallengers = [player1.challenger, player2.challenger]
    this.challengerWinner = null
    this.gameType = null;
    this.classicChallengers = [rock, paper, scissors];
    this.deluxeChallengers = [rock, paper, scissors, fingerGun, llama]
  }

  determineGameType() {
    if (this.gameType === 'classic') {
      deterimineClassicWinner()
    } else if (this.gameType === 'deluxe') {
      determineDeluxeWinner()
    }
  }

  deterimineClassicWinner() {
    if (this.gameChallengers.includes(rock && paper)) {
      this.challengerWinner = paper
    } else if (this.gameChallengers.includes(paper && scissors)) {
      this.challengerWinner = scissors
    } else if (this.gameChallengers.includes(scissors && rock)) {
      this.challengerWinner = rock
    }
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
    } else if (this.gameChallengers.includes(llama && gun)) {
      this.challengerWinner = gun
    } else if (this.gameChallengers.includes(llama && rock)) {
      this.challengerWinner = llama
    } else if (this.gameChallengers.includes(scissors && llama)) {
      this.challengerWinner = llama
    } else if (this.gameChallengers.includes(gun && paper)) {
      this.challengerWinner = gun
    } else if (this.gameChallengers.includes(scissors && gun)) {
      this.challengerWinner = scissors
    } else if (this.gameChallengers.includes(llama && paper)) {
      this.challengerWinner = paper
    }
    declareWinner();
  }


  declareWinner() {
    if (this.player1Challenger === this.challengerWinner){
      this.player1.isWinner = true;
      this.player1.wins++;
    } else if (this.player2Challenger === this.challengerWinner) {
      this.player2.isWinner = true;
      this.player2.wins++;
    }
  }
}
