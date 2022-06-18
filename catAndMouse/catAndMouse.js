//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

var x = 2,
  y = 5,
  z = 4;
var result = catAndMouse(x, y, z);
/*
 x = gatoA
 y = gatoB
 z = raton
 */

function catAndMouse(x, y, z) {
  debugger;
  var result = "",
    a = 0,
    b = 0;
  do {
    x > z ? x-- : x++;
    y > z ? y-- : y++;

    a = Math.abs(z - x);
    b = Math.abs(z - y);

    if (a == z && b !== z) {
      result = "Cat A";
    } else if (b == z && a !== z) {
      result = "Cat B";
    } else if (a == b) {
      result = "Mouse C";
    } else {
      a > b ? (result = "Cat B") : (result = "Cat A");
    }
  } while (result == "");

  document.write(result);
}
