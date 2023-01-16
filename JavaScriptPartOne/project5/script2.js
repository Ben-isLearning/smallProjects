//Better
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput == "rock" ||
    userInput == "paper" ||
    userInput == "scissors" ||
    userInput == "bomb"
  ) {
    return userInput;
  }
};

const getComputerChoice = () => {
  let choiceValue = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[choiceValue];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "human wins";
  }
  if (userChoice === computerChoice) {
    return "The game was a tie.";
  }

  if (userChoice === "rock") {
    return computerChoice === "scissors" ? "human wins" : "computer wins";
  }
  if (userChoice === "scissors") {
    return computerChoice === "paper" ? "human wins" : "computer wins";
  }
  if (userChoice === "paper") {
    return computerChoice === "rock" ? "human wins" : "computer wins";
  }
};

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(`You Picked ${userChoice}`);
  console.log(`The Robot picked ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
