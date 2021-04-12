const now = new Date();
const currentTimestamp = now.getTime();
const getAgeInDays = (person) => {
  const then = new Date(person.birthday);
  const birthdayTimestamp = then.getTime();
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const days = Math.floor(
    (currentTimestamp - birthdayTimestamp) / millisecondsInADay
  );
  return `${person.name} is ${days} days old.`;
};
console.log(
  getAgeInDays({
    name: "Zsófi",
    birthday: "1989-01-20",
  })
);
console.log(
  getAgeInDays({
    name: "Bence",
    birthday: "1988-04-19",
  })
);
