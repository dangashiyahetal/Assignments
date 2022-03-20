function setValue(fName, lName, age) {}

function setCustInfo(name) {
  alert("The name is set as: " + name);
}
function displayCustInfo(name, i) {
  k = name + " " + i;
  return k;
}

setCustInfo("bruce");
alert(displayCustInfo("Wayne", 30));
