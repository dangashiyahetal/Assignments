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
function typearray(sayings) {
  alert("Length of Array::" + sayings.length);
  for (let index = 3; index < sayings.length; index++) {
    console.log(sayings[index]);
  }
}
function displayQuotes() {
  typearray(sayings);
}
displayQuotes();
