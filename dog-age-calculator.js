const now = new Date();
const thisYear = now.getFullYear();
const dogAgeCalculator = (targetYear, birthYear) => {
  const age = (targetYear - birthYear) * 7;
  if (targetYear < thisYear) {
    return `In ${targetYear} you were ${age} dog years old.`;
  }
  if (targetYear === thisYear) {
    return `This year you are ${age} dog years old.`;
  }
  if (targetYear > thisYear) {
    return `In ${targetYear} you will be ${age} dog years old.`;
  }
};
console.log(dogAgeCalculator(2010, 1989));
console.log(dogAgeCalculator(2021, 1989));
console.log(dogAgeCalculator(2056, 1989));
