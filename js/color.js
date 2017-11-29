let palette = ["#294AC4", "#18A385","#FFCC16","#F95B3B","#BA129B"];

var $outline = $(".main-outline");
var $title = $(".main-title");
var $menu = $(".menu");
var currColor = 0;

function getColor(length, exclude){
  var rand = null;
  while(rand === null || rand === exclude){
    rand = Math.floor(Math.random()* (length))
  }
  return rand
}

$outline.mouseenter(function(){
  let newColor = getColor(palette.length, currColor);
  let setColor = palette[newColor];
  $title.css("color", setColor);
  currColor = newColor;
})
