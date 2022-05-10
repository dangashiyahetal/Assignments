function firstfield() {
  var x = document.getElementById("text1");
  if (x.value.length >= 1) {
    if (!isNaN(x.value)) {
      alert("number");
    } else {
      alert("string");
    }
  } else {
    alert("null");
  }
}
function displaySelectedcheckbx() {
  var box = document.getElementsByName("option");
  for (let index = 0; index < box.length; index++) {
    if (box[index].checked) {
      alert("selected");
      break;
    }
  }
}
function displaycheckbx() {
  var box = document.getElementById("checkbx");
  if (box.checked) {
    document.getElementById("divCheckbox").innerHTML = "Checked";
  } else {
    document.getElementById("divCheckbox").innerHTML = "Unchecked";
  }
}
function submitForm() {
  alert("the form has been successfully submitted");
}
