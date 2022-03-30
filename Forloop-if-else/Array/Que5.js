// last concat two array
let sayings = [
  "To live will be an awfully big adventure",
  "Try to be a rainbow in someone’s cloud",
  "There is no substitute for hard work",
  "What consumes your mind controls your life",
  "Strive for greatness",
  "Wanting to be someone else is a waste of who you are",
  "And still, I rise",
  "The time is always right to do what is right",
  "Let the beauty of what you love be what you do",
  "May your choices reflect your hopes, not your fears",
];
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
var combine = sayings.concat(months);
for (let index = 0; index < combine.length; index++) {
  console.log(combine[index]);
}
