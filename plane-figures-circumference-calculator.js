const circumference = (planeFigures) => {
  if (planeFigures.shape === "circle") {
    return `${2 * planeFigures.radius * Math.PI}`;
  }
  if (planeFigures.shape === "square") {
    return `${planeFigures.side * 4}`;
  }
  if (planeFigures.shape === "rectangle") {
    return `${2 * planeFigures.horizontalSide + 2 * planeFigures.verticalSide}`;
  }
};

console.log(
  circumference({
    shape: "circle",
    radius: 5,
  })
); // Should output 31.41593 or so

console.log(
  circumference({
    shape: "square",
    side: 5,
  })
); // Should output 20

console.log(
  circumference({
    shape: "rectangle",
    horizontalSide: 5,
    verticalSide: 6,
  })
); // Should output 22
