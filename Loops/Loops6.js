(function () {
  for (var counter = 2; counter <= 100; counter++) {
    var notPrime = false;
    console.log("First for loop notPrime::: " + notPrime);
    for (var i = 2; i <= counter; i++) {
      console.log("i::: " + i);
      console.log("counter::: " + counter);
      console.log(counter + " % " + i + "=== 0 = " + (counter % i === 0));
      console.log(i + "!===" + counter + "=" + (i !== counter));
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
      console.log("Inside second for loop notPrime::: " + notPrime);
    }
    console.log("Outside second for loop notPrime::: " + notPrime);
    if (notPrime === false) {
      console.log("Prime Number: " + counter);
    }
  }
})();

// Another way

function checkprimenumber(n) 
{ 
  for (let i = 2; i <= n - 1; c++) { 
    if (n % i == 0) 
    { 
      return false; 
    } 
    return true;
  } 
}

function printprimenumber() { 
  for (i = 1; i <= 100; i++) { 
    if (checkprimenumber(i) == true) { 
      console.log("Prime Number: " + i )
    } 
  } 
}
printprimenumber();