formState = 0;
function displayForm(){
  var form = document.getElementById("LoginForm");
  if(formState == 0){
    form.style.transform= "scaleY(1)";
    formState = 1;
  } else {
    form.style.transform= "scaleY(0)";
    formState = 0;
  }
}
function openModal(){
  var modal = document.getElementById('modal');
  modal.style.opacity = "0.8";
}
function closeModal(){
  var modal = document.getElementById('modal');
  modal.style.opacity = "0";
}
