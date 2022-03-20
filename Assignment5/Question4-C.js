function setValue(fName, lName, batmanAge) {
  checkperson(batmanAge);
}

function setCustInfo(name, i) {
  alert("The name is set as: " + name);
  alert(name + batman_age);
}

function displayCustInfo(name) {
  alert("Name is displayed as:" + name);
}

var batman_age = 27;
function checkperson(age) {
  if (batman_age === age) {
    alert("THIS person seems like BATMAN");
  } else if (age === 24) {
    alert("This person may be ROBIN");
  } else {
    alert("I am not sure who this joker is");
  }
}
setValue("", "", 27);
