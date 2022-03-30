var months = [
  "January",
  "february",
  "march",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "april",
];
months.unshift(prompt("Enter Value: "));
for (let index = 0; index < months.length; index++) {
  console.log(months[index]);
}
console.log(months.length);
