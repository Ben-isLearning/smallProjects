const team = {
  _players: [
    { firstName: "Mike", lastName: "Jordan", age: 21 },
    { firstName: "Lee", lastName: "James", age: 23 },
    { firstName: "Don", lastName: "Brune", age: 17 },
  ],
  _games: [
    { opponent: "Tigers", teamPoints: 12, opponentPoints: 3 },
    { opponent: "Bears", teamPoints: 6, opponentPoints: 12 },
    { opponent: "Wolves", teamPoints: 14, opponentPoints: 14 },
  ],

  get players() {
    if (this._players) {
      return this._players;
    }
  },

  get games() {
    if (this._games) {
      return this._games;
    }
  },

  addPlayer(newFirstName, newLastName, newAge) {
    if (
      typeof newFirstName == "string" &&
      typeof newLastName == "string" &&
      typeof newAge == "number"
    ) {
      this._players.push({
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      });
    }
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    if (
      typeof newOpponent == "string" &&
      typeof newTeamPoints == "number" &&
      typeof newOpponentPoints == "number"
    ) {
      this._games.push({
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      });
    }
  },
};
team.addPlayer("Donny", "Heel", 23);
team.addGame("Ferrets", 24, 15);
console.log(team.players);
console.log(team.games);
