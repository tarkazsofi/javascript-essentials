const getRandomIntegerBetween = (lower, upper) => {
  //
  return Math.round(Math.random() * (upper - lower) + lower);
};
console.log(getRandomIntegerBetween(30, 50));
