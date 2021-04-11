const now = new Date();
const thisYear = now.getFullYear();
const ageCalculator = (targetYear, birthYear) => {
  const age = targetYear - birthYear;
  if (targetYear < thisYear) {
    return `In ${targetYear} you were ${age} years old.`;
  }
  if (targetYear === thisYear) {
    return `This year you are ${age} years old.`;
  }
  if (targetYear > thisYear) {
    return `In ${targetYear} you will be ${age} years old.`;
  }
};
console.log(ageCalculator(2010, 1989));
console.log(ageCalculator(2021, 1989));
console.log(ageCalculator(2056, 1989));
