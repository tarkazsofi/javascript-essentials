const whenWillYouBe = (age, birthYear) => {
  return `You will be ${age} years old in ${age + birthYear}`;
};
console.log(whenWillYouBe(50, 1989)); // Should output "You will be 50 years old in 2039"
