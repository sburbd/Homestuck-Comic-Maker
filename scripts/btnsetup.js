// NOTE: these are only for sprite/obj buttons

function btnSetup() {
  var clickbtns = document.getElementsByClassName('btnAdd');
  var getVal = function() {
      var val = this.getAttribute("value");
      addImg(val) // addImg is defined in canvas.js
  };

  for (var i = 0; i < clickbtns.length; i++) {
      clickbtns[i].addEventListener('click', getVal, false);
  }
}

window.onload = btnSetup();
