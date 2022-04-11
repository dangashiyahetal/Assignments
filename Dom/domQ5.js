var currentImage = 1;
function nextImage() {
  currentImage = currentImage == 10 ? 1 : currentImage;
  document.getElementById("displayImage").src =
    "images/image" + ++currentImage + ".jpg";
}
function previousImage() {
  currentImage = currentImage == 1 ? 10 : currentImage;
  document.getElementById("displayImage").src =
    "images/image" + --currentImage + ".jpg";
}
