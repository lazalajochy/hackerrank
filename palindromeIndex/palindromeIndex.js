//https://www.hackerrank.com/challenges/palindrome-index/problem?isFullScreen=true

var s = "aaab";
palindromeIndex(s);

function palindromeIndex(s) {
  var str = "",
    aux = s;
  s = [...s];

  if (s.join("") === [...s].reverse().join("")) return -1;

  for (let i = 0; i < s.length; i++) {
    delete s[i];
    str = s.join("");
    if (str === s.reverse().join("")) {
      return i;
    } else {
      s = aux;
      s = [...s];
    }
  }
  return -1;
}
