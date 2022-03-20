function checkAge(age) {
  if (age >= 0 && age <= 2) {
    alert("No Charge");
  } else if (age > 2 && age <= 14) {
    alert("10% Discount");
  } else if (age > 14 && age <= 55) {
    alert("Regular Price");
  } else if (age > 55) {
    alert("20% discount");
  } else {
    alert("Invalid Age");
  }
}
checkAge(prompt("Please enter your age"));
