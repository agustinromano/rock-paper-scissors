const options = ["rock", "paper", "scissors"];
let score = 0;

function computerPlay() {
  return options[~~(Math.random() * options.length)];
}

console.log(`Computer threw ${computerPlay()}!`);

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    return "Tie try again.";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    return "You lost. The computer is smater.";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "You won! Better than a machine I see.";
  }
}

const playerSelection = window.prompt("rock, paper, or scissors? ");
const computerSelection = computerPlay();
console.log(playRound(computerSelection, playerSelection));

function game() {
  for (let i = 0; i < 5; i++) {}
}
