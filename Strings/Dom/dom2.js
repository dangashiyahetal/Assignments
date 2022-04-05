// Question 3
function another() {
  document.getElementById("copyname").value =
    document.getElementById("name").value;
}

function changeImage() {
  document.getElementsByClassName("imag1")[0].src = "image2.jpg";
}
function hideshow() {
  if (document.getElementsByClassName("imag2")[0].style.display == "none") {
    document.getElementsByClassName("imag2")[0].style.display = "block";
  } else {
    document.getElementsByClassName("imag2")[0].style.display = "none";
  }
}
