let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 1; i <= 5; i++) playRound(i);
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

const playerSelection = window
  .prompt("rock, paper, or scissors? ")
  .toLowerCase();
console.log(`You threw ${playerSelection}`);
const computerSelection = computerPlay().toLowerCase();
console.log(`Computer threw ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));
console.log(`Player Score: ${playerScore}`, `Computer Score: ${computerScore}`);

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    return "Tie try again.";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerScore += 1;
    return "You lost. The computer is smater.";
  } else {
    playerScore += 1;
    return "You won! Better than a machine I see.";
  }
}
