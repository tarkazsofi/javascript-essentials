const now = new Date();
const dayOfWeek = now.getDay();
const isItWeekend = () => {
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return `Yup`;
  }
  if (dayOfWeek <= 1 && dayOfWeek >= 5) {
    return "Nope";
  }
};
console.log(isItWeekend());
