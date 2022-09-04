//https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true
var d = 2,
    arr = [1, 2, 3, 4, 5];
var result = rotateLeft(d, arr);
function rotateLeft(d, arr) {
    var result = [],
        newArr = [];
    for (var i = d; i < arr.length; i++) {
        newArr.push(arr[i]);
        arr.splice(i, 1);
        i = i - 1;
    }
    result = newArr.concat(arr);
    return result;
}
