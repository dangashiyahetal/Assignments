var guitardata = {};
var count = 0;
const http = new XMLHttpRequest();
http.open("GET", "./assets/guitardata.json");
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    guitardata = http.responseText;
    console.log(JSON.parse(guitardata).allProducts);
    next(JSON.parse(guitardata).allProducts);
  }
};

function next(data) {
  document.getElementById("displayImg").src = data[count].image_path;
  document.getElementById("product-description").innerHTML =
    data[count].product_description;
  document.getElementById("shipping-info").innerHTML =
    data[count].shipping_details;
  document.getElementById("customer_review").innerHTML =
    data[count].customer_reviews;
}
