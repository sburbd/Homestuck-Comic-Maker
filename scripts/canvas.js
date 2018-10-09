// Initial canvases setup
// Fabric Canvas
var c = new fabric.Canvas('c'
, {
  preserveObjectStacking: true
}

);
c.setHeight(450);
c.setWidth(650);
c.getContext('2d');

// Vanilla Canvas
var bgCanvas = document.getElementById("canvas-bg");
var bgCtx = bgCanvas.getContext('2d');

// BOTH: clears canvas, sets bg to no url
function clearCanvas() {
  c.clear();
  setBg(' ');
  document.getElementById("canvas-bg").style.backgroundSize = '100%'
  document.getElementById('canvas-bg').style.backgroundPosition = '0px 0px'
}

// CANV1: adds image when button is clicked
function addImg(val) {
    fabric.Image.fromURL(val, function(img) {
    img.set({
        left: Math.random() * 500,
        top: Math.random() * 300,
        angle: 0,
        opacity: 1
    })
    c.add(img);
  });
}

// Deleting images, either singular/as a group
function delSelect(){
	var activeObject = c.getActiveObject();
  if (activeObject['_objects']) {
    activeObject['_objects'].map(x => c.remove(x));
  } else if (activeObject) {
    c.remove(activeObject);
  }
}

// forwards/backward
function sendForward() {
  var selectedObject = c.getActiveObject();
  c.bringForward(selectedObject);
}

function sendBackward() {
  var selectedObject = c.getActiveObject();
  c.sendBackwards(selectedObject);
}

// flip x
function flipX() {
  var selectedObject = c.getActiveObject();
  selectedObject.flipX == false ? selectedObject.flipX = true : selectedObject.flipX = false
  c.renderAll()
}

// flip y
function flipY() {
  var selectedObject = c.getActiveObject();
  selectedObject.flipY == false ? selectedObject.flipY = true : selectedObject.flipY = false
  c.renderAll()
}
