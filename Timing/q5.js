var images = [
    "../Dom and events/Images/image1.jpg",
    "../Dom and events/Images/image2.jpg",
    "../Dom and events/Images/image3.jpg",
    "../Dom and events/Images/image4.jpg",
    "../Dom and events/Images/image5.jpg",];

var count = 0;
function displayimg() {
    setInterval(() => {
        document.getElementById("img").src = images[count++];
        count = (count == 5) ? 0 : count;
    }, 1000);

}

var nAgt = navigator.userAgent;
var browserName = "";

// In Opera, the true version is after "Opera" or after "Version"
if (( nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
}
// In MSIE, the true version is after "MSIE" in userAgent
else if (( nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
}
// In Chrome, the true version is after "Chrome" 
else if (( nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
}
// In Safari, the true version is after "Safari" or after "Version" 
else if (( nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
}
// In Firefox, the true version is after "Firefox" 
else if (( nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
}

document.getElementById("idBrowserInfo").innerHTML = browserName;

if(navigator.platform.toUpperCase().indexOf('MAC') < 0) {
    alert("Use Mac OS");
}