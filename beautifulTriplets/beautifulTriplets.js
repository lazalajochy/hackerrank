//https://www.hackerrank.com/challenges/beautiful-triplets/problem?isFullScreen=true

var arr = [2, 2, 3, 4, 5],
  d = 1; //waiting for 3, done

beautifulTriplets(d, arr);

function beautifulTriplets(d, arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[k] - arr[j] === d) count++;
        }
      }
    }
  }

  return count;
}
