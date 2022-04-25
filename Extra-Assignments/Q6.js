// Question 6a
// function validateForm() {
//   var name = document.getElementById("fname");
//   var lname = document.getElementById("lname");
//   var select = document.getElementsByName("gender");
//   var state = document.getElementById("state");
//   var box = document.getElementById("accept");
//   var email = document.getElementById("validemail");
//   var birthdate = document.getElementById("birthday");

//   if (name.value == "") {
//     alert("Enter name:");
//   } else if (lname.value == "") {
//     alert("Enter Lastname:");
//   } else if (!select[0].checked && !select[1].checked) {
//     alert("Select gender:");
//   } else if (state.value == "0") {
//     alert("Select State:");
//   } else if (email.value == "") {
//     alert("Enter Email Address:");
//   } else if (birthdate.value == "") {
//     alert("Enter Birthdate:");
//   } else if (!box.checked) {
//     alert("Agree to terms and conditions:");
//   }
// }

// Question 6B
function validateForm() {
  var name = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var select = document.getElementsByName("gender");
  var state = document.getElementById("state");
  var box = document.getElementById("accept");
  var email = document.getElementById("validemail");
  var birthdate = document.getElementById("birthday");
  var alertMsg = [];

  if (name.value == "") {
    alertMsg.push("Enter name:");
  }
  if (lname.value == "") {
    alertMsg.push("Enter Lastname:");
  }
  if (!select[0].checked && !select[1].checked) {
    alertMsg.push("Select gender:");
  }
  if (state.value == "0") {
    alertMsg.push("Select State:");
  }
  if (email.value == "") {
    alertMsg.push("Enter Email Address:");
  }
  if (birthdate.value == "") {
    alertMsg.push("Enter Birthdate:");
  }
  if (!box.checked) {
    alertMsg.push("Agree to terms and conditions:");
  }
  if (alertMsg.length > 0) {
    alert(alertMsg.join("\n"));
  }
}
