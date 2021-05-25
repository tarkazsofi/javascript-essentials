const isItALeapYear = (year) => {
  if (year % 4 !== 0) {
    return `${year} is not a leap year.`;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return `${year} is a leap year.`;
  }
  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
    return `${year} is not a leap year.`;
  }
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return `${year} is a leap year.`;
  }
};
console.log(isItALeapYear(2021)); // Should output "2021 is not a leap year"
console.log(isItALeapYear(2020)); // Should output "2020 is a leap year"
console.log(isItALeapYear(2000));
console.log(isItALeapYear(1900));
