class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.challenger = [];
    this.wins = 0;
  }

  chooseRandom(choicesArray) {
    var randomIndex = Math.floor(Math.random() * choicesArray.length)
    //if its not the current players turn it the other players turn
    this.challenger = choicesArray[randomIndex];
  }
}

