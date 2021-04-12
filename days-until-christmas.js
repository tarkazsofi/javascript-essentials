const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const year = now.getFullYear();
const currentTimestamp = now.getTime();
const daysUntilChristmas = () => {
  if ((day === 25 || day === 26) && month === 11) {
    //if it's christmas
    return 0;
  } else {
    const milliSecondsInADay = 1000 * 60 * 60 * 24;
    if (month === 11 && day > 26) {
      //if it's after christmas, next christmas is next year
      const nextChristmas = new Date(`${year + 1}-12-25`).getTime();
      const days =
        Math.floor((nextChristmas - currentTimestamp) / milliSecondsInADay) + 1;
      return days;
    } else {
      //if it's before christmas, next christmas is this year
      const nextChristmas = new Date(`${year}-12-25`).getTime();
      const days =
        Math.floor((nextChristmas - currentTimestamp) / milliSecondsInADay) + 1;
      return days;
    }
  }
};

console.log(daysUntilChristmas());
