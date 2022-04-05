var days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
function value(day) {
  let matchfound = false;
  for (let index = 0; index < days.length; index++) {
    if (day == days[index]) {
      matchfound = true;
      alert("MATCH");
    }
  }
  if (!matchfound) {
    alert("No Match");
  }
}
value(prompt("Enter Day:"));
