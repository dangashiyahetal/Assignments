function clickBtn() {
  var box1 = document.getElementById("text1");
  var box2 = document.getElementById("text2");
  if (box1.value != "") {
    document.getElementById("op1").checked = true;
  } else if (box2.value != "") {
    document.getElementById("btn2").style.border = "1px solid red";
  } else if (box1.value == "" && box2.value == "") {
    alert("please enter only in one text box");
  }
}
