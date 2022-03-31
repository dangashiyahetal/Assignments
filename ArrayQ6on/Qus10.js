var days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
var months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
var combine = days.concat(months);

function match(dayormonth) {
  let matchfound = false;
  for (let index = 0; index < combine.length; index++) {
    if (dayormonth == combine[index]) {
      matchfound = true;
      alert("There is a match");
    }
  }
  if (!matchfound) {
    alert("No match");
  }
}

match(prompt("Enter Day/months:"));
