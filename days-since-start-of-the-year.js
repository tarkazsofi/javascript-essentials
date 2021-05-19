const now = new Date();
const currentTimestamp = now.getTime();
const daysSinceTheStartOfTheYear = () => {
  const then = new Date("2021-01-01");
  const landingTimestamp = then.getTime();
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const days = Math.floor(
    (currentTimestamp - landingTimestamp) / millisecondsInADay
  );
  return `${days}`;
};
console.log(daysSinceTheStartOfTheYear()); // E.g. on 20 February it should output 51
