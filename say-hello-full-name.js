const sayHelloToFullName = (fullName) => {
  return `Hello ${fullName.firstName} ${fullName.lastName}! 👋`;
};
console.log(
  sayHelloToFullName({
    firstName: "Zsofi",
    lastName: "Tarkanyi",
  })
);
console.log(
  sayHelloToFullName({
    firstName: "Bence",
    lastName: "Toth",
  })
);
