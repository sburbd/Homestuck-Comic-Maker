// Exports images with toDataUrl

// Fix to include background image, then merge two pictures together
function exportImg() {
  var img = c.toDataURL("image/png");
  var tab = window.open('about:blank','image from canvas');
  tab.document.write(
    '<div id="canvas-bg">'
    +'<img src="'+img+'"/>'
    +'</div>'
  );
  open2();
}

function open2() {
  var img2 = bgCanvas.toDataURL("image/png");
  var tab2 = window.open('about:blank2','image from canvas2');
  tab2.document.write(
    '<div id="canvas-bg">'
    +'<img src="'+img2+'"/>'
    +'</div>'
  );
}


// function exportImg() {
//   var img = c.toDataURL("image/png");
//   bgCtx.drawImage(img, 0, 0);
//
//   var dataURL = bgCtx.toDataURL("image/png");
//
//   var tab = window.open('about:blank','image from canvas');
//     tab.document.write(
//       '<div id="canvas-bg">'
//       +'<img src="'+dataURL+'"/>'
//       +'</div>'
//     );
//
//   var link = document.createElement('a');
//   link.download = "hscomic.png";
//   link.href = bgCtx.toDataURL("image/png").replace("image/png", "image/octet-stream");
//   link.click();
// }
