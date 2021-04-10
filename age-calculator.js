const now = new Date();
const thisYear = now.getFullYear();
const ageCalculator = (targetYear, birthYear) => {
  const age = targetYear - birthYear;
  if (targetYear < thisYear) {
    console.log(`In ${targetYear} you were ${age} years old.`);
  }
  if (targetYear === thisYear) {
    console.log(`This year you are ${age} years old.`);
  }
  if (targetYear > thisYear) {
    console.log(`In ${targetYear} you will be ${age} years old.`);
  }
};
ageCalculator(2010, 1989);
ageCalculator(2021, 1989);
ageCalculator(2056, 1989);
