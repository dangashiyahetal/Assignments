(function () {
  for (var counter = 2; counter <= 100; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      console.log("Prime Number: " + counter);
    }
  }
})();

// Another way
let count = 0
let i, j
for (j = 2; j <= 100; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) {
      count++
    }
  }
  if (count == 2) {
    console.log(j)
  }
  count = 0;
}