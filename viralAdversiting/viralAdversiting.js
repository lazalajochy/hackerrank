//https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true
var n = 3;
var result = viralAdversiting(n);

function viralAdversiting(n) {
  var shared = 0,
    liked = 0,
    result = 0,
    increment = 1;

  do {
    shared == 0 ? (shared = Math.floor(5 / 2)) : (shared = liked * 3);
    liked == 0 ? (liked = shared) : (liked = Math.floor(shared / 2));
    sum += liked;
    increment++;
  } while (increment <= n);

  return result;
}
