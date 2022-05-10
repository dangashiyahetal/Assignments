function btnshow() {
    var show = document.getElementById("form");
    if (show.style.visibility == "hidden") {
        show.style.visibility = "visible";
    } else {
        show.style.visibility = "hidden";
    }
}

function secondbtn() {
    var show = document.getElementById("secondDiv");
    if (show.style.visibility == "hidden") {
        show.style.visibility = "visible";
    } else {
        show.style.visibility = "hidden";
    }
    document.getElementById("span1").innerHTML = document.getElementById("value1").value;
    document.getElementById("span2").innerHTML = document.getElementById("value2").value;
    document.getElementById("span3").innerHTML = document.getElementById("value3").value;
}



