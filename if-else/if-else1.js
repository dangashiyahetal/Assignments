function checkAge(age) {
  if (age > 0 && age <= 14) {
    alert("Not Allowed");
  } else if (age >= 14 && age <= 49) {
    alert("Regular Price");
  } else if (age == 50) {
    alert("Special Price");
  } else if (age >= 50 && age <= 65) {
    alert("Regular Price ");
  } else {
    alert("Enter valid age");
  }
}
checkAge(prompt("Please enter the age"));
