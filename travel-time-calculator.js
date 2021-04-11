const travelTimeCalculator = (distance, speed) => {
  return `You will arrive in ${(distance / speed) * 60} minutes.`;
};
console.log(travelTimeCalculator(120, 80));
