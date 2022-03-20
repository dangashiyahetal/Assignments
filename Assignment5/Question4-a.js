function setValue(fName, lName, batmanAge) {}

function setCustInfo(name, i) {
  alert("The name is set as: " + name);
  batman_age = i;
}

function displayCustInfo(name, batman_age) {
  alert("Name is displayed as:" + name);
  return name + " " + batman_age;
}

var batman_age = 27;

setCustInfo("Bruce");

alert(displayCustInfo("Wayne", "25"));
