// Question f/g
function displayvalue(param1, param2, param3) {
  console.log(param1 + " " + param2 + " " + param3);
}
displayvalue(5);

var name = "John";

function setValue(fName, lName, age) {
  setCustInfo(fName);
  displayCustInfo(lName);
}

function setCustInfo(name) {
  console.log("The name is set as: " + name);
}
function displayCustInfo(name) {
  console.log("Name is displayed as:" + name);
}
setCustInfo("Bruce");
displayCustInfo("Wayne");

function names() {
  setCustInfo("Bruce");
  displayCustInfo("Wayne");
}

function question2B() {
  setValue("Bruce", "Wayne");
}

function question2C() {
  setCustInfo(name);
  displayCustInfo(name);
}
function question2d() {
  var name = "james";
  setCustInfo(name);
  displayCustInfo(name);
}

function Question2e(fName, lName, age) {
  setCustInfo();
  displayCustInfo();
}
