# Homestuck-Comic-Maker

A comic panel maker using HTML5 canvas and image manipulation, featuring images and assets based off the webcomic Homestuck. Uses Bootstrap 4 and the Fabric.js library, but otherwise is written in vanilla JavaScript.

Layout
------
- Navbar: links to About, Instructions, Contact, Credit, and Github
- Canvas: two, one layer for sprites and another for the background images
- Canvas buttons: options to edit the canvas and add text
- Sprite Menu: is a tabbed box, with each tab corresponding to a category of sprites. Furthermore, each tab has dropdowns grouping each characters' sprites together

Current Functionality
------
- Navbar: Each link provides a relevant popup or opens in an external window.
- Canvas: Using Fabric.js, can resize, rotate, and flip added images.
- Canvas buttons: Option to flip/delete selected sprites, undo/redo actions, and clear canvas.
- Canvas controls: Pan and resize for background image, as well as adding custom text.
- Sprite Menu: Add character/object images by clicking on button of the sprite. Set background by clicking on BG button, or upload custom image file.

To do:
------
- Canvas buttons: add functionality to export image option
- Complete about/instructions popup.
- Sprite Menu: add more sprites for the other 100+ characters, backgrounds, and objects
