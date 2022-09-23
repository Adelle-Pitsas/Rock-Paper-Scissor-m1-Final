

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.challenger = '';
    this.wins = 0;
  }

  takeTurn(challengerArray) {
    // if (this.name === 'computer') {
      var randomIndex = Math.floor(Math.random() * challengerArray.length)
      var randomChallenger = challengerArray[randomIndex];
      this.challenger = randomChallenger;
    // } else if (this.name === 'human') {
    //   this.player1Challenger = challengerChoice /*this will be defined in main*/
    // }
  }
}
