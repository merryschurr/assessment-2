var orange = document.getElementById("playerOne");
var blue = document.getElementById("playerTwo");


var Xpos = 0; //Sets starting position left/right
var Ypos = 0; //Sets starting position up/down
var spd = 250; //Milliseconds
var dstnc = 100; //Pixels

var winner = 500;

var x = 500;

console.log("hello");

$(document).keydown(function(e) {
    if (e.keyCode == 39){ // arrow right
        $('#playerOne').animate({
            left: dstnc+Xpos+'px'
        }, spd );
        Xpos = Xpos+dstnc;
    }
    if (e.keyCode == 68){ //D Right
        $('#playerTwo').animate({
            left: dstnc+Xpos+'px'
        }, spd );
        Xpos = Xpos+dstnc;
    }
});
 
console.log("gulp");

$(document).ready(function (){
  if ($('#playerTwo').text().length >= 3) 
   alert("Winner!");
});
