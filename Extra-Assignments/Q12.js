function displaytext(){
    var entertext=document.getElementById("text").value;
    
    console.log(entertext);
    document.getElementById("enteredtext").innerHTML= entertext;
}
function imagediscr(){
var img = document.getElementById("imagedis");
img.title = img.alt;

}