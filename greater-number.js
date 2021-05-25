const greaterNumber = (number1, number2) => {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
};

console.log(greaterNumber(3, 5)); // Should output 5

console.log(greaterNumber(12, 5)); // Should output 12
