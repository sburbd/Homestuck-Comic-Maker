// Get the modal
var modal = document.getElementById('modal-popup');

//display modal when clicking select navbar buttons
function displayModal(){
  modal.style.display = "block";
  var id = event.target.getAttribute('id');
  switch (id) {
    case 'about':
      console.log('about')
      $( "#about" ).trigger("click");
      break;
    case 'instructions':
      console.log('instructions')
      $( "#instructions" ).trigger("click");
      break;
    case 'contact':
      $( "#contact" ).trigger("click");
      break;
    case 'credit':
      $( "#credit" ).trigger("click");
      break;
  }
}

// close modal by clicking span
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    console.log('checked')
    modal.style.display = "none";
  }
}

$('#myCarousel').carousel({});

// mobile popup
if ($(window).width() < 680) { // if smaller than 680px
  getCookies();
  if (mobileCookie != 'true') {
    $('#mobile-popup').css("display", "block");
  }
}

// REMOVED INSTRUCT POPUP

// else { // if bigger than 680px
//   getCookies();
//   if (instructCookie != 'true') {
//     $('#modal-popup').css("display", "none"); // changed to none
//     document.getElementById('instructHide').style.display = "block";
//   }
// }

// if mobile is open
function closeMobile() {
  checkCheckbox();
  $('#mobile-popup').css("display", "none");
}
