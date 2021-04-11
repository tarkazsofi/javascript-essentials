const fToC = (f) => {
  return Math.round((f - 32) * (5 / 9));
};
console.log(fToC(350));

const cToF = (c) => {
  return Math.round(c * (9 / 5) + 32);
};
console.log(cToF(177));
