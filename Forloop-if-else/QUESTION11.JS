function Multiplecrit(numbers) {
  if (numbers < 50 || numbers >= 200) {
    alert("Enter valid number");
  }
  if (numbers >= 50 && numbers <= 200) {
    alert("its a good number");
  } else {
    alert("It is an invalid number");
  }
}
Multiplecrit(prompt("Enter number: "));
