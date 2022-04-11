function box() {
  var link = document.getElementById("clicklink").href;
  alert(link);
  var Fname = document.getElementById("First");
  var lname = document.getElementById("Last");
  var phonenum = document.getElementById("phone");
  link = link.replace("firstname", Fname.value);
  alert(Fname.value);
  link = link.replace("lastname", lname.value);
  alert(lname.value);
  link = link.replace("ph_no", phonenum.value);
  alert(phonenum.value);
  alert(link);
}
