$(document).keydown(function(e){
  if( e.which === 90 && e.ctrlKey){
    replay(undo, redo, '#redo', this)
  }
  else if( e.which === 89 && e.ctrlKey ){
    replay(redo, undo, '#undo', this);
  }
});
