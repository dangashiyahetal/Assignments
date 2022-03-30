var months = new Array(
  "January",
  "february",
  "march",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "april"
);
// Question 5
var position = prompt("Enter position to Add:");
var item = prompt("Enter item to Add:");
let monthsplice = months.splice(position, item);
for (let index = 0; index < monthsplice.length; index++) {
  console.log(monthsplice[index]);
}
console.log(months.length + " " + months[5]);
