function infotransfer() {
  var para =
    "Aim for three to five or more sentences per paragraph.<br>Include on each page about two handwritten or three typed<br>paragraphs.";
    var div1Element = document.getElementById("div1");
  var element = document.createElement("img");
  element.setAttribute("src","image2.jpg");
  div1Element.appendChild(element);
  var elePara = document.createElement("p");
  elePara.innerHTML = para;
  div1Element.appendChild(elePara);
}
function diisplayDiv2() {
  var para =
    "Paragraph small div";
    var div1Element = document.getElementById("div2");
    var elePara = document.createElement("div");
  elePara.innerHTML = para;
  div1Element.appendChild(elePara);
}
