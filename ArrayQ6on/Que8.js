var days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
function enterday(day) {
  dayMatch = false;
  for (let index = 0; index < days.length; index++) {
    if (days[index].toLocaleLowerCase() == day.toLocaleLowerCase()) {
      dayMatch = true;
    }
    if (dayMatch) {
      if (index < days.length - 1) {
        console.log(days[index + 1]);
      }
    }
  }
  dayMatch = true;
  for (let index = 0; index < days.length - 2; index++) {
    if (days[index].toLocaleLowerCase() == day.toLocaleLowerCase()) {
      console.log(days[index]);
      dayMatch = false;
    }
    if (dayMatch) {
      console.log(days[index]);
    }
  }
}
// Need to check for sat and sun====
enterday(prompt("Enter Day:"));
