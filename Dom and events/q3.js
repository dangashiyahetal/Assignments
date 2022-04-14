function hide() {
  var hide = document.getElementById("maindiv");
  console.log(hide);
  console.log(hide.style.display);
  if (hide.style.display == "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
}

function show() {
  var show = document.getElementById("main");

  if (show.style.display == "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
