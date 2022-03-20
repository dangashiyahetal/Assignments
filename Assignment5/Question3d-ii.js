function setValue(fName, lName, age) {}

function setCustInfo(name) {
  alert("The name is set as: " + name);
}

function displayCustInfo(name, i) {
  alert("Name is displayed as:" + name);

  var k = name + " " + i;

  return k;
}
var k = "abc";
alert(displayCustInfo("James", "25"));
