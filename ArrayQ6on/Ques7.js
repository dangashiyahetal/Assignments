function DisplayDays(day) {
  var days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  var dayMatch = false;
  for (let index = 0; index < days.length; index++) {
    if (days[index].toLocaleLowerCase() == day.toLocaleLowerCase()) {
      dayMatch = true;
    }
    if (dayMatch) {
      if (index < days.length - 2) {
        console.log(days[index + 1]);
      } else if (day.toLocaleLowerCase() == days[5] && days[index] == days[5]) {
        console.log(days[6]);
      } else if (day.toLocaleLowerCase() == days[6]) {
        console.log("it is the last day of the week");
      }
    }
  }
}

DisplayDays(prompt("Enter Day:"));
