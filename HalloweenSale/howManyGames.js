var p = 20,
  d = 3,
  m = 6,
  s = 80; //waiting for 6
var result = howManySales(p, d, m, s);

function howManySales(p, d, m, s) {
  var count = p,
    sum = 0,
    result = 0;

  while (result < s) {
    sum += count;
    if (sum <= s) {
      result++;
    } else {
      break;
    }

    if (count > m) count -= d;
    if (count <= m) {
      count = m;
    }
  }

  return result;
}
