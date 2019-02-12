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
  window.parent.postMessage("submit", '*');
}
function selectValidate(){
  selector1 = document.getElementById("id_item1");
  field1 = selector1.options[selector1.selectedIndex].value;
  selector2 = document.getElementById("id_item2");
  field2 = selector1.options[selector2.selectedIndex].value;
  selector3 = document.getElementById("id_item3");
  field3 = selector1.options[selector3.selectedIndex].value;
  if(field1 == selector1.options[0].value){ field1 = 1;}
  if(field2 == selector2.options[0].value){ field2 = 2;}
  if(field3 == selector3.options[0].value){ field3 = 3;}
  if(field1 == field2 ||
     field1 == field3 ||
     field2 == field3){
       err = document.getElementById("err");
       err.style.opacity = "1";
       return false;
  } else {
    if(field1 == 1){field1 = "";}
    if(field2 == 2){field2 = "";}
    if(field3 == 3){field3 = "";}
    alert("You have registered for:" + "\n" +  field1 + "\n" + field2 + "\n" + field3);
    return true;
  }
  return false;
}
