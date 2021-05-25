const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const year = now.getFullYear();
const currentTimestamp = now.getTime();
const daysSinceTheStartOfTheYear = () => {
  const firstDayOfYear = new Date(`${year}-01-01`).getTime();
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const days = Math.floor(
    (currentTimestamp - firstDayOfYear) / millisecondsInADay
  );
  return days;
};
console.log(daysSinceTheStartOfTheYear()); // E.g. on 20 February it should output 51
