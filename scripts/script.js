// ---------------------------------------------------------------------------------------READY FUNCTION
$(document).ready(function() {
  $("#menulistid").css("visibility", "hidden");
  $(".menu_breakfast_container").css("display", "block");
});


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
var close = document.getElementById("closebtn");
var hamburger_background = document.getElementById("hamburger_background_id");
var hideElem = document.getElementById("hide");
var menulistid = document.getElementById("menulistid");
var menu_link_container = document.getElementsByClassName("menu_link_container");


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
  menu[i].style.transition="opacity .7s";      
  menu[i].style.opacity="0.0";
  menu[i].style.marginTop="100px";

  };
      hamburger_background.style.backgroundColor = "rgba(0,0,0,0)";
      hamburger_background.style.zIndex = "-10";      
      $("#menulistid").css("visibility", "hidden");      
      $('#line_one_id').toggleClass('line1_active');
      $('#line_two_id').toggleClass('line2_active');      
      $('#line_three_id').toggleClass('line3_active');    
      $(".menu_link_container").css("z-index", "10");

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
      $('#line_one_id').toggleClass('line1_active');
      $('#line_two_id').toggleClass('line2_active');      
      $('#line_three_id').toggleClass('line3_active');    
      hamburger_background.style.backgroundColor = "rgba(133,51,45,0.95)";
      hamburger_background.style.zIndex = "10";
      $("#menulistid").css("visibility", "visible");
      $(".menu_link_container").css("z-index", "-1");
  }
};

  //Scrolling down
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

  //---------------------------------------------------------------------------------------Change page


var breakfast_page_id = document.getElementById("breakfast_page");
var brunch_page_id = document.getElementById("brunch_page");
var lunch_page_id = document.getElementById("lunch_page");
var dinner_page_id = document.getElementById("dinner_page");
var dessert_page_id = document.getElementById("dessert_page");

var breakfast_menu_line = document.getElementByClass("breakfast_menu_line");


function breakfastToggle() {  
  //to open
  if (breakfast_page_id.style.color <= "black") {

      var i = 0;
      for (i = 0; i < menu.length; i++){


  };
     
  $(".menu_breakfast_container").css("display", "block");
  $("#breakfast_page").css("color", "#85332D");
  $('.breakfast_menu_line').addClass('menu_link_active');
  $('.breakfast_menu_line').removeClass('menu_link_inactive');
 
  $(".menu_brunch_container").css("display", "none");
  $(".menu_lunch_container").css("display", "none");
  $(".menu_dinner_container").css("display", "none");
  $(".menu_dessert_container").css("display", "none");


  $('.brunch_menu_line').addClass('menu_link_inactive');
  $('.lunch_menu_line').addClass('menu_link_inactive');
  $('.dinner_menu_line').addClass('menu_link_inactive');
  $('.dessert_menu_line').addClass('menu_link_inactive');

  $("#brunch_page").css("color", "black");
  $("#lunch_page").css("color", "black");
  $("#dinner_page").css("color", "black");
  $("#dessert_page").css("color", "black");
  }
};


function brunchToggle() {  
  //to open
  if (brunch_page_id.style.color <= "black") {

      var i = 0;
      for (i = 0; i < menu.length; i++){


  };     
  $(".menu_brunch_container").css("display", "block");
  $("#brunch_page").css("color", "#85332D");
  $('.brunch_menu_line').addClass('menu_link_active');
  $('.brunch_menu_line').removeClass('menu_link_inactive');


  $(".menu_breakfast_container").css("display", "none");
  $(".menu_lunch_container").css("display", "none");
  $(".menu_dinner_container").css("display", "none");
  $(".menu_dessert_container").css("display", "none");

  $('.breakfast_menu_line').addClass('menu_link_inactive');
  $('.lunch_menu_line').addClass('menu_link_inactive');
  $('.dinner_menu_line').addClass('menu_link_inactive');
  $('.dessert_menu_line').addClass('menu_link_inactive');

  $("#breakfast_page").css("color", "black");
  $("#lunch_page").css("color", "black");
  $("#dinner_page").css("color", "black");
  $("#dessert_page").css("color", "black");  
  }
};

  function lunchToggle() {  
  //to open
  if (lunch_page_id.style.color <= "black") {

      var i = 0;
      for (i = 0; i < menu.length; i++){


  };     
  $(".menu_lunch_container").css("display", "block");
  $("#lunch_page").css("color", "#85332D");
  $('.lunch_menu_line').addClass('menu_link_active');
  $('.lunch_menu_line').removeClass('menu_link_inactive');


  $(".menu_breakfast_container").css("display", "none");
  $(".menu_brunch_container").css("display", "none");
  $(".menu_dinner_container").css("display", "none");
  $(".menu_dessert_container").css("display", "none");
  
  $('.breakfast_menu_line').addClass('menu_link_inactive');
  $('.brunch_menu_line').addClass('menu_link_inactive');
  $('.dinner_menu_line').addClass('menu_link_inactive');
  $('.dessert_menu_line').addClass('menu_link_inactive');

  $("#breakfast_page").css("color", "black");
  $("#brunch_page").css("color", "black");
  $("#dinner_page").css("color", "black");
  $("#dessert_page").css("color", "black");  
  }
};


  function dinnerToggle() {  
  //to open
  if (dinner_page_id.style.color <= "black") {

      var i = 0;
      for (i = 0; i < menu.length; i++){


  };     
  $(".menu_dinner_container").css("display", "block");
  $("#dinner_page").css("color", "#85332D");
  $('.dinner_menu_line').addClass('menu_link_active');
  $('.dinner_menu_line').removeClass('menu_link_inactive');


  $(".menu_breakfast_container").css("display", "none");
  $(".menu_lunch_container").css("display", "none");
  $(".menu_brunch_container").css("display", "none");
  $(".menu_dessert_container").css("display", "none");
  
  $('.breakfast_menu_line').addClass('menu_link_inactive');
  $('.lunch_menu_line').addClass('menu_link_inactive');
  $('.brunch_menu_line').addClass('menu_link_inactive');
  $('.dessert_menu_line').addClass('menu_link_inactive');

  $("#breakfast_page").css("color", "black");
  $("#brunch_page").css("color", "black");
  $("#lunch_page").css("color", "black");
  $("#dessert_page").css("color", "black");  
  }
};


  function dessertToggle() {  
  //to open
  if (dessert_page_id.style.color <= "black") {

      var i = 0;
      for (i = 0; i < menu.length; i++){


  };     
  $(".menu_dessert_container").css("display", "block");
  $("#dessert_page").css("color", "#85332D");
  $('.dessert_menu_line').addClass('menu_link_active');
  $('.dessert_menu_line').removeClass('menu_link_inactive');


  $(".menu_breakfast_container").css("display", "none");
  $(".menu_lunch_container").css("display", "none");
  $(".menu_dinner_container").css("display", "none");
  $(".menu_brunch_container").css("display", "none");
  
  $('.breakfast_menu_line').addClass('menu_link_inactive');
  $('.lunch_menu_line').addClass('menu_link_inactive');
  $('.dinner_menu_line').addClass('menu_link_inactive');
  $('.brunch_menu_line').addClass('menu_link_inactive');

  $("#breakfast_page").css("color", "black");
  $("#brunch_page").css("color", "black");
  $("#lunch_page").css("color", "black");
  $("#dinner_page").css("color", "black");


  }
};