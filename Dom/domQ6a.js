function submit() {
  var link = document.getElementById("clicklink1").href;
  alert(link);

  var contact = document.getElementById("contact");
  var navigate = document.getElementById("info");
  link = link.replace("contactus", contact.value);
  alert(contact.value);
  link = link.replace("navigate", navigate.value);
  alert(navigate.value);
  alert(link);
}
