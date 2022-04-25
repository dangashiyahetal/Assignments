function givenvalue() {
  var userentered = document.getElementById("name");

  document.getElementById("copyname").value = userentered.value;
  userentered.value = "";
}
