const now = new Date();
const isItMyBirthday = (birthday) => {
  const birthdayDate = new Date(birthday);
  if (birthdayDate === now) {
    return "It is your birthday today. Happy birthday! 🍰";
  } else {
    return "It isn't your birthday today.";
  }
};
console.log(isItMyBirthday("1989-01-20"));
// Should output "It isn't your birthday today." or "It is your birthday today. Happy birthday! 🍰"
