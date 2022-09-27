class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.challenger = '';
    this.wins = 0;
  }

  takeTurn(challengerArray) {
      var randomIndex = Math.floor(Math.random() * challengerArray.length)
      var randomChallenger = challengerArray[randomIndex];
      this.challenger = randomChallenger;
  }
}
