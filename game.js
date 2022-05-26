let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function game() {
  for (let i = 1; i <= 5; i++) playRound(i);
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let computerSelection = computerPlay();

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (computerSelection == playerSelection) {
    return `Tie try again. You thre ${playerSelection} and the computer threw ${computerSelection}`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerScore += 1;
    return `You lost. The computer threw ${computerSelection}.`;
  } else {
    playerScore += 1;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
}

game();

//Rock button
const rockBtn = document.querySelector(".rock-btn");
rockBtn.addEventListener("click", () => {
  playerSelection.value;
  console.log("rock");
});

//Paper buttn
const paperBtn = document.querySelector(".paper-btn");
paperBtn.addEventListener("click", () => {
  playRound();
  console.log("paper");
});

//Scissors button
const scissorsBtn = document.querySelector(".scissors-btn");
scissorsBtn.addEventListener("click", () => {
  playRound();
  console.log("scissors");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value);
  });
});
