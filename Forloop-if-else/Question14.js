function printnumber(number) {
  let count = 0;
  if (number % 2 == 0) {
    for (let index = number; count < 10; index++) {
      if (index % 2 == 0 && index != number) {
        console.log(index);
        count++;
      }
    }
  } else {
    for (let index = number; count < 10; index++) {
      if (index % 2 != 0 && index != number) {
        console.log(index);
        count++;
      }
    }
  }
}

printnumber(prompt("Enter Number:"));
