// If custom file:
document.getElementById('uploadSprite').addEventListener('change', customBg, true);
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
