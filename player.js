

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.challenger = "";
    this.wins = 0;
  }

  takeTurn(challengerArray) {
    if (this.name = 'computer') {
      var randomIndex = Math.floor(Math.random() * challengerArray.length)
      this.challenger = choicesArray[randomIndex];
    } else if (this.name = 'human') {
      this.challenger = challengerChoice /*this will be defined in main*/
    }
  }
}
