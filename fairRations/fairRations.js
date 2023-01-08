//https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true

var B = [4, 5, 6, 7]; //waiting for 4

fairRations(B);

function fairRations(B) {
  var count = 0,
    check = 0;
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0 && B[i + 1] !== undefined) {
      B[i]++;
      count++;
      B[i + 1]++;
      count++;
    }
  }

  for (let j = 0; j < B.length; j++) {
    if (B[j] % 2 === 0) {
      check++;
    } else {
      break;
    }
  }
  return check === B.length ? count : "NO";
}
