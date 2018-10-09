// picker setup
$("#showPaletteOnly").spectrum({
    color: "#000000",
    showPaletteOnly: true,
    change: function(color) {
      changeColor(color)
    },
    palette: [
      ["#000000",
      "#323232",
      "#929292",
      "#ffffff",
      "#188534",
      "#Ff0000"],

      ["#0715cd",
      "#b536da",
      "#e00707",
      "#4ac925",],

      ["#00D5F2",
      "#ff6ff2",
      "#f2a400",
      "#1f9400"],

      ["#a10000",
      "#a15000",
      "#a1a100",
      "#416600",
      "#008141",
      "#008282"],

      ["#626262",
      "#005682",
      "#000056",
      "#2b0057",
      "#6a006a",
      "#77003c",],

      ["#FF0000",
      "#004182",
      "#0021CB",
      "#631db4",
      "#6a006a",
      "#99004D",],
  ]
});

// colour change
var fontColor = "#000000";

function changeColor(color) {
  fontColor = color.toHexString();
}
