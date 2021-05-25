const rockPaperScissors = (firstPlayer, secondPlayer) => {
  if (firstPlayer.played === secondPlayer.played) {
    return "It's a draw.";
  }
  if (
    (firstPlayer.played === "rock" && secondPlayer.played === "paper") ||
    (firstPlayer.played === "paper" && secondPlayer.played === "scissors") ||
    (firstPlayer.played === "scissors" && secondPlayer.played === "rock")
  ) {
    return `${secondPlayer.player} wins.`;
  }
  if (
    (firstPlayer.played === "paper" && secondPlayer.played === "rock") ||
    (firstPlayer.played === "scissors" && secondPlayer.played === "paper") ||
    (firstPlayer.played === "rock" && secondPlayer.played === "scissors")
  ) {
    return `${firstPlayer.player} wins`;
  }
};
console.log(
  rockPaperScissors(
    { player: "Zsófi", played: "rock" },
    { player: "Bence", played: "paper" }
  )
); // Should output "Bence wins"

console.log(
  rockPaperScissors(
    { player: "Zsófi", played: "scissors" },
    { player: "Bence", played: "paper" }
  )
); // Should output "Zsófi wins"

console.log(
  rockPaperScissors(
    { player: "Zsófi", played: "paper" },
    { player: "Bence", played: "paper" }
  )
); // Should output "It's a draw"
