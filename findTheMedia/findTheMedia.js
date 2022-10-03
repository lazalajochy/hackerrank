//https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true

function findMedian(arr) {
    arr.sort((a, b) => { return a - b });
    var n = Math.floor(arr.length / 2);
    var median = arr[n];
    return median;
}