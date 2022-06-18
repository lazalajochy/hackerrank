//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

var b = 60,
  keyboards = [40, 50, 60],
  drives = [5, 8, 12];
var result = getMoneySpent(b, keyboards, drives);

function getMoneySpent(b, keyboards, drives) {
  var maxValue = 0,
    aux = 0;
  for (var i = 0; i <= keyboards.length - 1; i++) {
    for (var j = 0; j <= drives.length - 1; j++) {
      maxValue = drives[j] + keyboards[i];
      if (maxValue <= b) {
        if (maxValue > aux) {
          aux = maxValue;
        }
      } else {
        aux !== 0 ? (aux = aux) : (aux = -1);
      }
    }
  }
  document.write(aux);
}
