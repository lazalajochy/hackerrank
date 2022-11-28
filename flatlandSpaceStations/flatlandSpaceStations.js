//https://www.hackerrank.com/challenges/flatland-space-stations/problem?isFullScreen=true
var c = [0, 4],
  n = 5;
function flatlandSpaceStations(n, c) {
  if (n == c) return 0;
  let maxDistance,
    distances = [],
    aux = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < c.length; j++) {
      let res = Math.abs(i - c[j]);
      if (res < aux) {
        aux = res;
      }
    }
    distances.push(aux);
    aux = Infinity;
  }
  maxDistance = Math.max(...distances);
  return maxDistance;
}
