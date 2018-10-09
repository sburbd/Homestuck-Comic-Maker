// Controls the panning arrows and the keyboard
function arrowSetup(){
  var arrows = document.getElementsByClassName("arrow");
  for (var i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('mousedown', mousedown);
      arrows[i].addEventListener('mouseup', mouseup);
  }
}
arrowSetup();

// MOUSE EVENTS
var mouse = false;
var x = 0;
var y = 0;

function mousedown() {
  mouse = true;
  var direction = event.target.getAttribute('id');
  // console.log(cBg);
  callEvent(direction);
}
function mouseup() {
  mouse = false;
}

function callEvent(value) {
  var direction = value;
  var cBg = document.getElementById('canvas-bg').style;
  if (mouse) {

  switch(direction) {
    case 'left':
      x+=5;
      cBg.backgroundPositionX = x+'px';
    break;
    case 'up':
      y+=5;
      cBg.backgroundPositionY = y+'px';
    break
    case 'right':
      x-=5;
      cBg.backgroundPositionX = x+'px';
    break;
    case 'down':
      y-=5;
      cBg.backgroundPositionY = y+'px';
    break;
  }
   setTimeout(function(){callEvent(direction)}, 50);
 }
 else return;
}

// Keyboard setup
window.addEventListener("keydown", function(e) {
    if([38, 40, 46].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

window.addEventListener('keydown', keyboardPan);
window.addEventListener('keyup', btnDefault)

function keyboardPan(e) {
  var cBg = document.getElementById('canvas-bg').style;
  var KeyID = event.keyCode;
  var selected = document.activeElement

  if (selected.id != "textbox") {
    switch(KeyID) {
      case 37:
        $("#left").addClass("arrow-active")
        x+=5;
        cBg.backgroundPositionX = x+'px';
      break;
      case 38:
        $("#up").addClass("arrow-active")
        y+=5;
        cBg.backgroundPositionY = y+'px';
      break
      case 39:
        $("#right").addClass("arrow-active")
        x-=5;
        cBg.backgroundPositionX = x+'px';
      break;
      case 40:
        $("#down").addClass("arrow-active")
        y-=5;
        cBg.backgroundPositionY = y+'px';
      break;
      case 46:
        delSelect();
      break;
    }
  }
}

function btnDefault() {
  $("#left").removeClass("arrow-active");
  $("#up").removeClass("arrow-active");
  $("#right").removeClass("arrow-active");
  $("#down").removeClass("arrow-active");
}
