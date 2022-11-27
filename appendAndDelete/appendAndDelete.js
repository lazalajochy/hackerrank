//https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true
var s = "abc",
  t = "def",
  k = 6;

function appendAndDelete(s, t, k) {
  let sTring = [...s],
    startIndex = 0;
  let len;
  if (s == t && s.length == t.length) return "Yes";
  s.length > t.length ? (len = s.length) : (len = t.length);

  for (let i = 0; i < len; i++) {
    if (s[i] == t[i]) {
      startIndex = i;
    } else {
      break;
    }
  }

  if (startIndex + 1 !== sTring.length) {
    for (let j = len - 1; k > 0; j--) {
      sTring.pop();
      if (j == startIndex) break;
      k--;
    }
  }

  for (startIndex; k >= 0; startIndex++) {
    sTring.push(t[startIndex]);
    k--;
    if (sTring.length == t.length) break;
  }

  s = sTring.join("");

  return s == t ? "Yes" : "No";
}
