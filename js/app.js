window.keydown = function (e) {
if (!e) {
e = window.event;
}
}

var orange = document.getElementById("playerOne");
var blue = document.getElementById("playerTwo");


var Xpos = 0; //Sets starting position left/right
var Ypos = 0; //Sets starting position up/down
var spd = 250; //Milliseconds
var dstnc = 100; //Pixels

console.log("hello");

$(document).keydown(function(e){
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
 
event.alert().then(function(result) {
  if (e.keyCode === 39) {
    console.log('Player One Wins!');
    return;
  }
  if (e.keyCode === 68) {
    console.log('Player Two Wins!');
    return;
  }
});

$(window).keypress(function (e) {
  if (e.keyCode === 39*3|| e.keyCode === 68*3) {
    e.preventDefault()
    console.log('Winner')
  }
})
