const now = new Date();
const month = now.getMonth();
const day = now.getDate();

const isItChristmas = () => {
  if ((day === 25 || day === 26) && month === 11) {
    return `Yup`;
  } else {
    return "Nope";
  }
};
console.log(isItChristmas());
