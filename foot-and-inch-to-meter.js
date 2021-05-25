const footAndInchToCm = (foot, inch) => {
  return foot * 30.48 + inch * 2.54;
};
console.log(footAndInchToCm(5, 7)); // Should output 170.18 or so
