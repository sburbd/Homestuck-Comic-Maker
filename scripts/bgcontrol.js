window.onload = bgSetup();
var bgURL = '';

// Btn setup
function bgSetup() {
  var bgBtns = document.getElementsByClassName('bgSet');
  var getURL = function() {
      bgUrl = this.getAttribute("value");
      setBg(bgUrl)
  };
  for (var i = 0; i < bgBtns.length; i++) {
      bgBtns[i].addEventListener('click', getURL, false);
  }
}

function setBg(bgUrl) {
  document.getElementById("canvas-bg").style.backgroundImage = `url(${bgUrl})`;
}

// If custom file:
document.getElementById('uploadBg').addEventListener('change', customBg, true);
function customBg(){
  var file = document.getElementById("uploadBg").files[0];
  var reader = new FileReader();
  reader.onloadend = function(){
    document.getElementById('canvas-bg').style.backgroundImage = "url(" + reader.result + ")";
  }
  if (file) {
    reader.readAsDataURL(file);
  }
}

// Other canvas
var zoomVal = document.getElementById("zoomControl")
var cZoom = document.getElementById("cZoom")

zoomVal.oninput = function() {
  var zoom = this.value
  cZoom.innerHTML = 'Canvas Zoom: ' + zoom + '%';
  document.getElementById("canvas-bg").style.backgroundSize = zoom+'%'
}
