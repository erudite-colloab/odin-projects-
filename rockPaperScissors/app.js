console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
  const randomIndex = Math.random();

  if (randomIndex < 0.33) {
    return "rock";
  } else if (randomIndex < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//console.log(getComputerChoice());
function getHumanChoice() {
  const userInput = prompt("Choose rock, paper, or scissors:").toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return getHumanChoice();
  }
}

//console.log(getHumanChoice());

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return "human";
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return "computer";
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Round ${i} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("\n--- Game Over ---");
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😔 Computer won the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

playGame();
