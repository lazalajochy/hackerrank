//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true
var i = 20,
  j = 23,
  k = 6;
var result = beautifulDay(i, j, k);

function beautifulDay(i, j, k) {
  var n = 0,
    arr = 0,
    result = 0,
    inverse = 0,
    aux = 0,
    divisor = 0;
  do {
    n = i + "";
    arr = Array.from(n);
    inverse = arr.reverse();
    aux = inverse.join("");
    divisor = (n - parseInt(aux)) / k;
    divisor % 1 == 0 ? result++ : (result = result);
    i++;
  } while (i <= j);
  return result;
};
