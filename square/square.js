//https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true

var a = 24,
  b = 49;
var result = squares(a, b);
function squares(a, b) {
  var result = 0,
    impar = 0,
    x = 1;
  for (var i = 0; i < b; i++) {
    if (impar == 0) {
      impar++;
    } else {
      impar += 2;
      x += impar;
    }
    if (x >= a && x <= b) {
      result++;
    }
    if (x > b) break;
  }

  return result;
}
