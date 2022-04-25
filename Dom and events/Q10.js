function uservalue() {
  document.getElementById("Viewdiv").style.display = "block";
  var fn = document.getElementById("fn");
  document.getElementById("fname").innerHTML = fn.value;
  fn.value = "";
  var ln = document.getElementById("ln");
  document.getElementById("lname").innerHTML = ln.value;
  ln.value = "";
  var gender = document.getElementsByName("gender");
  for (let index = 0; index < gender.length; index++) {
    if (gender[index].checked) {
      document.getElementById("gender").innerHTML = gender[index].value;
    }
    gender[index].checked = false;
  }

  var state = document.getElementById("selectstate");
  document.getElementById("State").innerHTML = state.value;
  state.value = "select";
}
function displayvalue() {
  var fn = document.getElementById("fname");
  document.getElementById("fn").value = fn.innerHTML;
  var ln = document.getElementById("lname");
  document.getElementById("ln").value = ln.innerHTML;

  var gender = document.getElementsByName("gender");

  for (let index = 0; index < gender.length; index++) {
    if (gender[index].value == document.getElementById("gender").innerHTML) {
      gender[index].checked = true;
    }
  }
  var state = document.getElementById("State");
  document.getElementById("selectstate").value = state.innerHTML;
  state.value = "";
}
