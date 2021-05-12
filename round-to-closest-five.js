const roundToClosestFive = (amount) => {
  const divided = amount / 5;
  const rounded = Math.round(divided);
  return rounded * 5;
};

console.log(roundToClosestFive(10)); // Should output 10

console.log(roundToClosestFive(22)); // Should output 20

console.log(roundToClosestFive(33)); // Should output 35
