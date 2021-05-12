const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} is an even number`;
  } else {
    return `${number} is an odd number`;
  }
};
console.log(oddOrEven(2)); // Should output "2 is an even number"

console.log(oddOrEven(5)); // Should output "5 is an odd number"
