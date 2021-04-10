const now = new Date();
const thisYear = now.getFullYear();
const dogAgeCalculator = (targetYear, birthYear) => {
  const age = (targetYear - birthYear) * 7;
  if (targetYear < thisYear) {
    console.log(`In ${targetYear} you were ${age} dog years old.`);
  }
  if (targetYear === thisYear) {
    console.log(`This year you are ${age} dog years old.`);
  }
  if (targetYear > thisYear) {
    console.log(`In ${targetYear} you will be ${age} dog years old.`);
  }
};
dogAgeCalculator(2010, 1989);
dogAgeCalculator(2021, 1989);
dogAgeCalculator(2056, 1989);
