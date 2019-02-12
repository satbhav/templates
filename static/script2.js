function slidein(){
  var nav = document.getElementById("navBar");
  nav.style.right = "0px";
}
function switchToRegister(){

  var registerPage = document.getElementById("RegisterPage");
  var teamPage = document.getElementById("TeamupPage");
  var satPage = document.getElementById("SatPage");
  var loginPage = document.getElementById("LoginPage");
  registerPage.style.transform = "translate(-10px, 0)";
  teamPage.style.transform = "translate(-101vw, 0)";
  satPage.style.transform = "translate(-101vw, 0)";
  loginPage.style.transform = "translate(-101vw, 0)";
  setTimeout(function(){ bttn.check = false;},2000);
}
function switchToTeamup(){
  var teamPage = document.getElementById("TeamupPage");
  var registerPage = document.getElementById("RegisterPage");
  var satPage = document.getElementById("SatPage");
  var loginPage = document.getElementById("LoginPage");
  registerPage.style.transform = "translate(-101vw, 0)"
  teamPage.style.transform = "translate(-10px, 0)";
  satPage.style.transform = "translate(-101vw, 0)";
  loginPage.style.transform = "translate(-101vw, 0)";
  setTimeout(function(){ bttn.check = false;},2000);
}
function switchToSat(){
  var registerPage = document.getElementById("RegisterPage");
  var teamPage = document.getElementById("TeamupPage");
  var satPage = document.getElementById("SatPage");
  var loginPage = document.getElementById("LoginPage");
  var bttn = satPage.contentWindow.document.getElementById("toggle");
  registerPage.style.transform = "translate(-101vw, 0)";
  teamPage.style.transform = "translate(-101vw, 0)";
  satPage.style.transform = "translate(0px, 0)";
  loginPage.style.transform = "translate(-101vw, 0)";
  setTimeout(function(){ bttn.check = true;},2000);
}
function switchToLogin(){
  var registerPage = document.getElementById("RegisterPage");
  var teamPage = document.getElementById("TeamupPage");
  var satPage = document.getElementById("SatPage");
  var loginPage = document.getElementById("LoginPage");
  registerPage.style.transform = "translate(-101vw, 0)";
  teamPage.style.transform = "translate(-101vw, 0)";
  satPage.style.transform = "translate(-101vw, 0)";
  loginPage.style.transform = "translate(0px, 0)";
  setTimeout(function(){ bttn.check = false;},2000);
}
window.addEventListener('message', function(event) {
  if(event.data == "submit"){
    teamup = document.getElementById("homeIcon");
    teamup.setAttribute('onclick','switchToLogin()');
    logout = document.querySelector(".logLink");
    logout.href = "/sports/logout/";
    logicon = document.getElementById("loginIcon");
    logicon.setAttribute('src','/static/images/logout.png');
  } else if(event.data == "refresh"){
    location.reload();
  }

});
