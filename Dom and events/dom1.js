function convert() {
  var UserInput = document.getElementById("numbers");
  var value = /^\d+\.?\d*$/;
  if (UserInput.value.trim() == "" || !value.test(UserInput.value)) {
    UserInput.style.border = "1px solid red ";
    alert("Please Enter valid value:");
    document.getElementById("result").innerHTML = "";
  } else {
    document.getElementById("result").innerHTML = Math.round(
      ((parseFloat(UserInput.value) - 32) * 5) / 9
    );
  }
}
