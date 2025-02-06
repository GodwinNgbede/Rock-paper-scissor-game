const playerscoreEl = document.querySelector(".playerScore");
const computerscoreEl = document.querySelector(".computerScore");
const btnpaperEl = document.querySelector(".btn paper");
const btnrockEl = document.querySelector(".btn rock");
const btnscissorsEl = document.querySelector(".btn scissors");
const playerEl = document.querySelector(".playerDisplay");
const computerEl = document.querySelector(".computerDisplay");
const resultdivEl = document.querySelector(".resultDiv");
const displayEl = document.querySelector(".displayResult");
const choices = ["paper", "rock", "scissors"];

let playerScore = 0;
let computerScore = 0;

function playGame(PlayerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (PlayerChoice === computerChoice) {
    result = "ITS A TIE";
  } else {
    switch (PlayerChoice) {
      case "rock":
        result = computerChoice === "paper" ? "YOU WIN!!!" : "YOU LOOSE!!!";

        break;
      case "Paper":
        result = computerChoice === "scissors" ? "YOU WIN!!!" : "YOU LOOSE!!!";
        break;
      case "scissors":
        result = computerChoice === "rock" ? "YOU WIN!!!" : "YOU LOOSE!!!";

        break;
    }
  }
  playerEl.textContent = `PLAYER: ${PlayerChoice}`;
  computerEl.textContent = `COMPUTER: ${computerChoice}`;
  displayEl.textContent = result;

  //   if (result === "YOU WIN!!!") {
  //     displayEl.classList.add("winText");
  //   } else if (result === "YOU LOOSE!!!") {
  //     displayEl.classList.add("looseText");
  //   }

  switch (result) {
    case "YOU WIN!!!":
      displayEl.classList.add("winText");
      break;
    case "YOU LOOSE!!!":
      displayEl.classList.add("looseText");
      break;
  }
}
