formState = 0;
function displayForm(){
  var form = document.getElementById("RegisterForm");
  if(formState == 0){
  form.style.transform = "scaleY(1)";
    formState = 1;
  } else {
  form.style.transform = "scaleY(0)";
    formState = 0;
  }
}
function slidein(){
  var logo = document.getElementById("logo");
  logo.style.left= "0px";
  setTimeout(displayForm, 1000);
}
/*function widenForm(){
  var form = document.getElementById("RegisterForm");
  form.style.width= "700px";
  form.style.margin="0 -300px"
}*/
function Sub(){
  alert("Registered Successfully! Please login to continue.");
  window.parent.postMessage("refresh", '*');
}
