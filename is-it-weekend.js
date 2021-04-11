const now = new Date();
const dayOfWeek = now.getDay();
const isItWeekend = () => {
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return `Yup`;
  } else {
    return "Nope";
  }
};
console.log(isItWeekend());
