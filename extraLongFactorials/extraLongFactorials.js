//https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
var n = 30;
var result = extraLongFactorials(n);

function extraLongFactorials(n) {
  var result = 1n,
    n = BigInt(n);

  while (n > 0) {
    result *= n;
    n--;
  }
  console.log(result.toString());
  
}
