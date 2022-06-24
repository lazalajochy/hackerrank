//https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true

var a = [7, 1, 3, 4, 1, 7]; //waiting for 3
var result = minimunDistance(a);

function minimunDistance(a) {
  debugger;
  var minDistance = 0,
    aux = 0,
    result = 0;
  for (var i = 0; i <= a.length - 1; i++) {
    aux = a[i];
    for (var j = 0; j <= a.length - 1; j++) {
      if (j == i) {
        j = j + 1;
        if (a[i] == a[j]) {
          minDistance = Math.abs(j - i);
          if (result == 0) {
            result = minDistance;
          } else {
            minDistance < result ? (result = minDistance) : (result = result);
          }
        }
      } else {
        if (a[i] == a[j]) {
          minDistance = Math.abs(j - i);
          if (result == 0) {
            result = minDistance;
          } else {
            minDistance < result ? (result = minDistance) : (result = result);
          }
        }
      }
    }
  }

  return result == 0 ? (result = -1) : (result = result);
}
