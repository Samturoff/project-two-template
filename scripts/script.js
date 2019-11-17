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



// End of Your Code . Don't delete that line below!!
});