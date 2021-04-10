const dogAgeCalculator = (thisYear, birthYear) => {
  console.log(
    `In ${thisYear} you will be ${(thisYear - birthYear) * 7} years old.`
  );
};
dogAgeCalculator(2035, 1989);
