function fn(){
    var fname= document.getElementById("firstname");
    var lname=document.getElementById("lastname");
var email=document.getElementById("inputEmail");
var location=document.getElementById("inputAddress");
var cc=document.getElementById("Credit");
var city=document.getElementById("inputCity");
var state=document.getElementById("inputState");
var zipcode=document.getElementById("inputZip");

   document.getElementById("fn").innerHTML=fname.value;
   document.getElementById("ln").innerHTML=lname.value;
   document.getElementById("email").innerHTML=email.value;
document.getElementById("Address").innerHTML=location.value;
document.getElementById("creditcard").innerHTML=cc.value;
document.getElementById("city").innerHTML=city.value;
document.getElementById("Zip").innerHTML=zipcode.value;
    if (state.options[state.selectedIndex].value == !0) {
        document.getElementById("State").innerHTML=state.value;
console.log(state);
}
}