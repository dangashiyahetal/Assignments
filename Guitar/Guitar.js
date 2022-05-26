var guitardata = {};
var count = 0;
const http = new XMLHttpRequest();
http.open("GET", "./assets/guitardata.json");
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    guitardata = JSON.parse(http.responseText).allProducts;
    next();
  }
};

function next() {
  count = count == 3 ? 0 : count;
  document.getElementById("displayImg").src = guitardata[count].image_path;
  document.getElementById("product-description").innerHTML =
    guitardata[count].product_description;
  document.getElementById("shipping-info").innerHTML =
    guitardata[count].shipping_details;
  document.getElementById("customer_review").innerHTML =
    guitardata[count].customer_reviews;
  document.getElementById("selectedItem").value = count;
  count++;
}
function previous() {
  count = count == 0 ? 3 : count;
  --count;
  document.getElementById("displayImg").src = guitardata[count].image_path;
  document.getElementById("product-description").innerHTML =
    guitardata[count].product_description;
  document.getElementById("shipping-info").innerHTML =
    guitardata[count].shipping_details;
  document.getElementById("customer_review").innerHTML =
    guitardata[count].customer_reviews;
  document.getElementById("selectedItem").value = count;
  count = count == 0 ? 3 : count;
}
