function clickbutton() {
  var value = document.getElementById("entervalue").value;
  var para = document.getElementById("para");
  if (value == "black") {
    para.style.border = "2px solid black";
  } else if (value == "red") {
    para.style.border = "2px solid red";
  } else {
    alert("PLEASE ENTER A VALID COLOR");
  }
}
