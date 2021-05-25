const area = (planeFigures) => {
  if (planeFigures.shape === "circle") {
    return planeFigures.radius ** 2 * Math.PI;
  }
  if (planeFigures.shape === "square") {
    return planeFigures.side ** 2;
  }
  if (planeFigures.shape === "rectangle") {
    return planeFigures.horizontalSide * planeFigures.verticalSide;
  }
};

console.log(
  area({
    shape: "circle",
    radius: 5,
  })
);

console.log(
  area({
    shape: "square",
    side: 5,
  })
);

console.log(
  area({
    shape: "rectangle",
    horizontalSide: 5,
    verticalSide: 6,
  })
);
