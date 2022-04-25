function checkUrl() {
  var found = false;
  var urls = document.getElementsByTagName("a");
  for (let index = 0; index < urls.length; index++) {
    if (urls[index].href == "http://www.pro-tekconsulting.com/") {
      found = true;
      break;
    }
  }
  if (!found) {
    document.getElementById("addurl").removeAttribute("disabled");
  } else {
    document.getElementById("addurl").setAttribute("disabled", "disabled");
  }
  return found;
}
function addLink() {
  if (!checkUrl()) {
    var element = document.getElementById("anchorTags");
    var addAnchorTag = document.createElement("a");
    addAnchorTag.setAttribute("href", "http://www.pro-tekconsulting.com");
    addAnchorTag.innerText = "Pro-Tek";
    element.appendChild(addAnchorTag);
  }
}
