class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}

// Write function below
function balloonAttack(player1, player2) {
  let remainingPlayerOne = player1.balloonCount - player1.hitsPerMinute * 10;
  let remainingPlayerTwo = player2.balloonCount - player2.hitsPerMinute * 10;

  if (remainingPlayerOne === remainingPlayerTwo) {
    return "Tie";
  } else if (remainingPlayerOne < remainingPlayerTwo) {
    return player1.name;
  } else return player2.name;
}

const p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);

console.log(balloonAttack(p1, p2));
