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
let value = sayings.splice(prompt("Enter Value: "));
for (let index = 0; index < value.length; index++) {
  console.log(value[index]);
}
console.log(value.length);
