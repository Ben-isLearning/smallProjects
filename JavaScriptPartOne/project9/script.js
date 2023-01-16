let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  target = Math.floor(Math.random() * 10);
  return target;
  //return (target = 5); (Testing)
}

console.log(generateTarget());
function compareGuesses(hGuess, cGuess, target) {
  let humanAway = Math.abs(target - hGuess);
  let computerAway = Math.abs(target - cGuess);

  console.log(humanAway);
  console.log(computerAway);

  if (humanAway < computerAway) {
    return true;
  } else if (humanAway > computerAway) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winnerName) {
  if (winnerName === "human") {
    humanScore++;
    console.log(humanScore);
    return;
  } else if (winnerName === "computer") {
    computerScore++;
    console.log(computerScore);
    return;
  }
}

function advanceRound() {
  currentRoundNumber++;
}

advanceRound();
