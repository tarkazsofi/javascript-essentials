const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const isItMyBirthday = (birthday) => {
  const birthdayDate = new Date(birthday);
  const birthdayMonth = birthdayDate.getMonth();
  const birthdayDay = birthdayDate.getDate();
  if (birthdayMonth === month && birthdayDay === day) {
    return "It is your birthday today. Happy birthday! 🍰";
  } else {
    return "It isn't your birthday today.";
  }
};
console.log(isItMyBirthday("1989-05-20"));
// Should output "It isn't your birthday today." or "It is your birthday today. Happy birthday! 🍰"
