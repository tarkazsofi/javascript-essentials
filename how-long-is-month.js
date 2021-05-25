const thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12];
const thirtyDayMonths = [4, 6, 9, 11];
const howLongIsMonth = (month) => {
  if (thirtyOneDayMonths.includes(month)) {
    return 31;
  }
  if (month === 2) {
    return 28;
  }
  if (thirtyDayMonths.includes(month)) {
    return 30;
  }
};

console.log(howLongIsMonth(12)); // Should output 31

console.log(howLongIsMonth(2)); // Should output 28

console.log(howLongIsMonth(11)); // Should output 30
