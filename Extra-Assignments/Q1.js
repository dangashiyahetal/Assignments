function Selection() {
  var select = document.getElementById("options").value;
  var para = document.getElementById("para");
  if (select == "Invisible") {
    para.style.display = "none";
  } else if (select == "Color") {
    para.style.color = "blue";
  } else if (select == "visible and Change color") {
    para.style.display = "block";
    para.style.color = "Orange";
  } else if (select == "Default") {
    para.style.display = "block";
    para.style.color = "black";
  }
}
