const flipACoin = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
};
console.log(flipACoin());
console.log(flipACoin());
console.log(flipACoin());
console.log(flipACoin());
console.log(flipACoin());
