
function reviewbtn() {
  var elements = document.getElementsByTagName("input");
  console.log(elements);
  var regAlphabet = /^[a-zA-Z]+$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var adrs = /^d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\\.?/;
  var fname = document.getElementById("firstname");
  var lname = document.getElementById("lastname");
  var email = document.getElementById("inputEmail");
  var location = document.getElementById("inputAddress");
  var cc = document.getElementById("Credit");
  var city = document.getElementById("inputCity");
  var stateselected = document.getElementById("inputState");
  var zipcode = document.getElementById("inputZip");
  if (fname.value == "" || !regAlphabet.test(fname.value)) {
    fname.style.backgroundColor = "red";
  }if (lname.value == "" || !regAlphabet.test(lname.value)) {
    lname.style.backgroundColor = "red";
  }if (email.value.trim() == "" || !regEmail.test(email.value)) {
    alert("please enter valid email address");
  }if(cc == " " || !visaPattern.test(cc)){
    cc.style.backgroundColor="red";
  }if (location.value.trim()== ""|| !adrs.test(location.value)){
    location.style.backgroundColor="red";
  } if (stateselected.options[stateselected.selectedIndex].value == !0) {
 alert("please select state");
  }
  document.getElementById("fn").innerHTML = fname.value;
  document.getElementById("ln").innerHTML = lname.value;
  document.getElementById("email").innerHTML = email.value;
  document.getElementById("Address").innerHTML = location.value;
  document.getElementById("creditcard").innerHTML = cc.value;
  document.getElementById("city").innerHTML = city.value;
  document.getElementById("State").innerHTML =  stateselected.value;
  document.getElementById("Zip").innerHTML = zipcode.value;
  document.getElementById("enterpurchasedtl").style.display = "none";
  document.getElementById("paymentinfo").style.display = "block";
  return false;
}
var count =0;
var guitardata = {};
const http = new XMLHttpRequest();
http.open("GET", "./assets/guitardata.json");
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    count = window.location.href.split("?")[1].split("=")[1];
    guitardata = JSON.parse(http.responseText).allProducts[count];
    
    document.getElementById("imageselected").src = guitardata.image_path;
    document.getElementById("product-description").innerHTML =
      guitardata.product_description;
  }
};
function showform(){
  document.getElementById("paymentinfo").style.display = "hidden";
  document.getElementById("enterpurchasedtl").style.display = "block";
  return false;
}   
function nextpage(){
  window.location = "./Guitarpage3.html?selectedItem=" + count;
}