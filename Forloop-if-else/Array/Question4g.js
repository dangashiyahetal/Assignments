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
var position = prompt("START position:");
var howmany = prompt("End position:");
// var item1 = prompt("item to be added:");
var newvalue = sayings.slice(position, howmany);

for (let index = 0; index < newvalue.length; index++) {
  console.log(newvalue[index]);
}
