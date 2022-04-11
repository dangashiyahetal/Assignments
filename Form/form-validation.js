function validateForm() {
  var regAlphabet = /^[a-zA-Z]+$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var date = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var select = document.getElementsByName("gender");
  var state = document.getElementById("state");
  var box = document.getElementById("accept");
  var email = document.getElementById("validemail");
  var birthdate = document.getElementById("birthday");
  if (fname.value == "" || !regAlphabet.test(fname.value)) {
    fname.style.backgroundColor = "red";
    return false;
  } else if (lname.value == "" || !regAlphabet.test(lname.value)) {
    lname.style.backgroundColor = "red";
    return false;
  }
  var radioSelected = false;
  for (let index = 0; index < select.length; index++) {
    if (select[index].checked == true) {
      radioSelected = true;
    }
  }
  if (!radioSelected) {
    alert("select at least one option");
    return false;
  }
  if (state.options[state.selectedIndex].value == 0) {
    alert("Select State");
    return false;
  }
  if (email.value.trim() == "" || !regEmail.test(email.value)) {
    alert("please enter valid email address");
    return false;
  }
  if ((birthdate.value.trim = "")) {
  }
  if (!box.checked) {
    alert("Please select the accept");
  }
  return false;
}
