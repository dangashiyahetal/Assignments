function printvalue(numbers) {
  let count = 0;
  if (numbers % 2 == 0) {
    for (let index = numbers; count < 5; index--) {
      if (index % 2 == 0 && index != numbers) {
        console.log(index);
        count++;
      }
    }
  } else {
    for (let index = numbers; count < 5; index--) {
      if (index % 2 != 0 && index != numbers) {
        console.log(index);
        count++;
      }
    }
  }
}
printvalue(prompt("Enter Number: "));
