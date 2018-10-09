// font guide tooltip
$('[data-toggle="tooltip"]').tooltip();
$('.tooltip-inner').tooltip({html: true})

// Select a specified element
$('#myTooltip').tooltip();

//get text from input
var inputText = document.getElementById('textbox').value
var fonts = ["Courier New Bold", "Comic Sans MS", "TrollType", "TrollType V2", "Typostuck", "Rapscallion", "Carima", "John handwriting", "Rose handwriting", "Dave handwriting", "Jade handwriting", "Dirk handwriting", "Jake handwriting"];
var font = fonts[0];
loadFont(font);
// "GhostKid"

function addText() {
  inputText = document.getElementById('textbox').value
  var textbox = new fabric.Textbox(inputText, {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20,
    fontFamily: font,
    fill: fontColor
  });
  c.add(textbox).set("fontFamily", font);
  document.getElementById('textbox').value = '';
}

// Populate the fontFamily select
var select = document.getElementById("textdiv");
fonts.forEach(function(font) {
  var option = document.createElement('option');
  option.innerHTML = font;
  option.value = font;
  option.style.fontFamily = font;
  select.appendChild(option);
});

// switching fonts
document.getElementById('textdiv').onchange = function() {
  font = this.value;
  loadFont(this.value);
};


// load font
function loadFont(font) {
  var loadedFont = new FontFaceObserver(font);
  loadedFont.load()
  .catch(function(e) {
    console.log(e)
    console.warn('font loading failed ' + font);
  });
}
