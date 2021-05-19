const now = new Date();
const currentTimestamp = now.getTime();
const daysSinceCuriosityLanded = () => {
  const then = new Date("2012-08-06");
  const landingTimestamp = then.getTime();
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const days = Math.floor(
    (currentTimestamp - landingTimestamp) / millisecondsInADay
  );
  return `${days}`;
};
console.log(daysSinceCuriosityLanded()); // Should output e.g. 3172
