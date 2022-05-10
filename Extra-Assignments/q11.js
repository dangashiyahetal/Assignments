function firstfield() {
    var x = document.getElementById("text1");
    if (x.value.length >= 1) {
        if (!isNaN(x.value)) {
            alert("number");
        } else {
            alert("string");
        }
    } else {
        alert("null");
    }
}