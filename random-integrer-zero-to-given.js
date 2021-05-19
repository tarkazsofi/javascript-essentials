const randomIntegerBetweenZeroAnd = (number) => {
  return Math.round(Math.random() * number);
};
console.log(randomIntegerBetweenZeroAnd(20)); // Should output e.g. 5 or 18
