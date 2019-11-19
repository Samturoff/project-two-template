// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
 var placeholder = document.querySelectorAll('.placeholder'),
    submit = document.querySelectorAll('.submit'),
    input = document.getElementById('input');

function clean(event) {
  if(event.keyCode === 13) {
    moveBtn();
  }
  placeholder[0].style.opacity = "0";
  placeholder[0].innerHTML = "Check your inbox!";
}

input.addEventListener('keydown', function() {
  placeholder[0].style.opacity = "0";
});

submit[0].addEventListener('click', function() {
  moveBtn();
});

function moveBtn() {
  submit[0].classList.add('move-btn');
  placeholder[0].style.opacity = "0";
  setTimeout(function() {
    placeholder[0].innerHTML = "Check your inbox!"
    submit[0].textContent = "Sweet";
    placeholder[0].classList.add('placeholder-active');
    input.value = "";
  }, 500);
} 

});

/* HAMBURGER NAVIGATOR */
var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var menulistid = document.getElementsById("menulistid");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {  
  //to close
  if (nav.style.height <= "275px") {
  nav.style.height = "50px";
  main.style.marginTop = "50px";
  
      var i = 0;
      for (i = 0; i < menu.length; i++){
  menu[i].style.opacity="0.0";
  menu[i].style.marginTop="100px";
  };
      document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
      menulistid.style.color="blue";

  } 
  //to open
  else if (nav.style.height <= "50px") {
  nav.style.height = "275px";
  main.style.marginTop = "275px";
      var i = 0;
      for (i = 0; i < menu.length; i++){
  menu[i].style.opacity="1.0";
  menu[i].style.marginTop="0px";
  };
      menulistid.style.color="purple";
  }

};