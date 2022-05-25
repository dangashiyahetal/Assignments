var guitardata = {};
const http = new XMLHttpRequest();
http.open("GET", "./assets/guitardata.json");
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    guitardata = http.responseText;
    console.log(JSON.parse(guitardata).allProducts[0]);
  }
};
