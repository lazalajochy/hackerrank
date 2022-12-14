//https://www.hackerrank.com/challenges/beautiful-binary-string/problem?isFullScreen=true
var b = "0101010";
beautifulBinaryString(b);

function beautifulBinaryString(b) {
  let count = 0;
  b = [...b];
  for (let i = 0; i < b.length; i++) {
    if (b[i] === "0" && b[i + 1] === "1" && b[i + 2] === "0") {
      b[i + 2] = "1";
      count++;
      i = i + 2;
    }
  }
  return count;
}
