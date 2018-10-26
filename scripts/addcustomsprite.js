// If custom file:
document.getElementById('uploadSprite').addEventListener('change', customSprite, true);

function customSprite(){

  var file = document.getElementById("uploadSprite").files[0];
  var reader = new FileReader();
  reader.onloadend = function(){

    addImg(reader.result)

  }
  if (file) {
    reader.readAsDataURL(file);
  }
}
