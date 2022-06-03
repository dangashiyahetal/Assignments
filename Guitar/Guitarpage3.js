var guitardata = {};
const http = new XMLHttpRequest();
http.open("GET", "./assets/guitardata.json");
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var count = window.location.href.split("?")[1].split("=")[1];
    guitardata = JSON.parse(http.responseText).allProducts[count];
    document.getElementById("imageselected").src = guitardata.image_path;
    document.getElementById("product-description").innerHTML =
      guitardata.product_description;
      document.getElementById("dollar").innerHTML=guitardata.price;
      document.getElementById("ship").innerHTML = guitardata.shipping_details;
      console.log(guitardata.shipping_details);
      document.getElementById("review").innerHTML = guitardata.customer_reviews;
      document.getElementById("itemsinstock").innerHTML=guitardata.no_of_items;
  }}
 

  function mainpage(){
    window.location.href="./Guitar1.html"
  }