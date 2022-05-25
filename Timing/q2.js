var images=[
   "../Dom and events/Images/image1.jpg",
   "../Dom and events/Images/image2.jpg",
   "../Dom and events/Images/image3.jpg",
   "../Dom and events/Images/image4.jpg",
   "../Dom and events/Images/image5.jpg",
   "../Dom and events/Images/image6.jpg",
   "../Dom and events/Images/image7.jpg",
];
var count = 1;
setInterval(() => {
    document.getElementById("displayImage").src = images[count++];
    count = (count == 7) ? 0 : count;
}, 10000);