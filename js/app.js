window.onkeydown = function (e) {
if (!e) {
e = window.event;
}

var code = e.keyCode;
var orange = document.getElementById("orange");
var blue = document.getElementById("blue");
var white = document.getElementById("white");

var left = parseInt (orange.style.left, 10);
    if ( code == 37 ) { //LEFT


    if ( left > 0 ) {
    orange.style.left = left - 10 + 'px';
    }
    } else if ( code == 39 ) { //RIGHT


    if ( left+orange.width+10 < window.innerWidth ) {
    orange.style.left = left + 10 + 'px';
    }
    } else if ( code == 40 ) { //DOWN
    if ( top+orange.height+10 < window.innerHeight ) {
    orange.style.top = top + 10 +'px';
    }
    }
    }


var leftTwo = parseInt (blue.style.leftTwo, 10);
    if ( code == 37 ) { //LEFT

    if ( leftTwo > 0 ) {
    blue.style.leftTwo = leftTwo - 10 + 'px';
    }
    } else if ( code == 39 ) { //RIGHT

    if ( leftTwo+blue.width+10 < window.innerWidth ) {
    blue.style.leftTwo = leftTwo + 10 + 'px';
    }
    } else if ( code == 40 ) { //DOWN
    if ( top+blue.height+10 < window.innerHeight ) {
    blue.style.top = top + 10 +'px';
    }
    }
    }

var leftThree = parseInt (blue.style.leftThree, 10);

    if ( code == 37 ) { //LEFT


    if ( left > 0 ) {
    white.style.left = left - 10 + 'px';
    }
    } else if ( code == 38 ) { //UP
  
    if ( top > 0 ) {
    white.style.top = top - 10 + 'px';
    }
    } else if ( code == 39 ) { //RIGHT


    if ( left+white.width+10 < window.innerWidth ) {
    white.style.left = left + 10 + 'px';
    }
    } else if ( code == 40 ) { //DOWN
    if ( top+white.height+10 < window.innerHeight ) {
    white.style.top = top + 10 +'px';
    }
    }
    }

