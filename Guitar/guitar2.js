function fn() {
  var fname = document.getElementById("firstname");
  var lname = document.getElementById("lastname");
  var email = document.getElementById("inputEmail");
  var location = document.getElementById("inputAddress");
  var cc = document.getElementById("Credit");
  var city = document.getElementById("inputCity");
  var state = document.getElementById("inputState");
  var zipcode = document.getElementById("inputZip");

  document.getElementById("fn").innerHTML = fname.value;
  document.getElementById("ln").innerHTML = lname.value;
  document.getElementById("email").innerHTML = email.value;
  document.getElementById("Address").innerHTML = location.value;
  document.getElementById("creditcard").innerHTML = cc.value;
  document.getElementById("city").innerHTML = city.value;
  document.getElementById("Zip").innerHTML = zipcode.value;
  if (state.options[state.selectedIndex].value == !0) {
    document.getElementById("State").innerHTML = state.value;
  }
}

var guitardata = {};
const http = new XMLHttpRequest();
http.open("GET", "./assets/guitardata.json");
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    guitardata = JSON.parse(http.responseText).allProducts[
      window.location.href.split("?")[1].split("=")[1]
    ];
    console.log(guitardata);
    document.getElementById("imageselected").src = guitardata.image_path;
    document.getElementById("product-description").innerHTML =
      guitardata.product_description;
    document.getElementById("shipping-info").innerHTML =
      guitardata.shipping_details;
    document.getElementById("customer_review").innerHTML =
      guitardata.customer_reviews;
  }
};
