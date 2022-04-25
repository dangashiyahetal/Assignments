function validate() {
  var box = document.getElementsByName("Check");
  var selectedCheckBox = [];
  for (let index = 0; index < box.length; index++) {
    if (box[index].checked) {
      selectedCheckBox.push(box[index].value);
    }
  }

  if (selectedCheckBox.length > 0) {
    alert(selectedCheckBox.join("\n"));
  }
}

function selectall() {
  var boxes = document.getElementsByName("Check");
  for (let index = 0; index < boxes.length; index++) {
    boxes[index].checked = true;
  }
}
