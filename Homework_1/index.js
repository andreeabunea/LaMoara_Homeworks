function validateForm() {
  var fieldInformation = document.forms["myForm"]["fname"].value;
  if (fieldInformation == "") {
    alert("Name must be filled out");
    return false;
  }
}
