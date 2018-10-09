// current unsaved state
var state;
// past states
var undo = [];
// reverted states
var redo = [];

// Push the current state into the undo stack and then capture the current state
function save() {
 redo = [];
 $('#redo').prop('disabled', true);
 // initial call won't have a state
 if (state) {
   undo.push(state);
   $('#undo').prop('disabled', false);
 }
 state = JSON.stringify(c);
}

function replay(playStack, saveStack, buttonsOn, buttonsOff) {
 saveStack.push(state);
 state = playStack.pop();
 var on = $(buttonsOn);
 var off = $(buttonsOff);
 // turn both buttons off for the moment to prevent rapid clicking
 on.prop('disabled', true);
 off.prop('disabled', true);
 c.clear();
 c.loadFromJSON(state, function() {
   c.renderAll();
   // now turn the buttons back on if applicable
   on.prop('disabled', false);
   if (playStack.length) {
     off.prop('disabled', false);
   }
 });
}

$(function() {

 // save initial state
 save();
 // register event listener for user's actions
 c.on('object:modified', function() {
   save();
 });

 // undo and redo buttons
 $('#undo').click(function() {
   replay(undo, redo, '#redo', this);
 });
 $('#redo').click(function() {
   replay(redo, undo, '#undo', this);
 })
});
