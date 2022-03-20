function setValue(fName, lName, age) {
  setCustInfo(fName);
  displayCustInfo(lName);
}
function setCustInfo(name) {
  alert("The name is set as: " + name);
}
function displayCustInfo(name, i) {
  alert("Name is displayed as:" + name);
}
function displayCustInfo1(name, i) {
  k = name + " " + i;
  return k;
}
setValue("Bruce", "Wayne");
alert(displayCustInfo1("Wayne", "Bruce"));
alert(displayCustInfo1("Hello Bruce Wayne at ", 30));
