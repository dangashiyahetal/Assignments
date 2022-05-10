function output(){
var select=document.getElementById("selected");
    if(select.checked){
       document.getElementById("divRadio").innerHTML = "Checked";
    } else {
        document.getElementById("divRadio").innerHTML = "";
    }
}
function displaycheckbx(){
    var box=document.getElementById("checkbx");
    if(box.checked) {
        document.getElementById("divCheckbox").innerHTML = "Checked";
    } else {
        document.getElementById("divCheckbox").innerHTML = "";
    }
}
function displaySelectValue(){
    var val = document.getElementById("dropDownState");
    if(val.value != "none") {
        document.getElementById("dropdownselected").innerHTML = val.value;
    } else {
        document.getElementById("dropdownselected").innerHTML = "";
    }
}