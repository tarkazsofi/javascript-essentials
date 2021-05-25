const rockPaperScissors = (firstPlayer, secondPlayer) => {
  if (firstPlayer === secondPlayer) {
    return "It's a draw.";
  }
  if (
    (firstPlayer === "rock" && secondPlayer === "paper") ||
    (firstPlayer === "paper" && secondPlayer === "scissors") ||
    (firstPlayer === "scissors" && secondPlayer === "rock")
  ) {
    return "Second player wins.";
  }
  if (
    (firstPlayer === "paper" && secondPlayer === "rock") ||
    (firstPlayer === "scissors" && secondPlayer === "paper") ||
    (firstPlayer === "rock" && secondPlayer === "scissors")
  ) {
    return "First player wins";
  }
};

console.log(rockPaperScissors("rock", "paper")); // Should output "Second player wins"

console.log(rockPaperScissors("scissors", "paper")); // Should output "First player wins"

console.log(rockPaperScissors("paper", "paper")); // Should output "It's a draw"
