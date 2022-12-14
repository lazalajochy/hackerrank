//https://www.hackerrank.com/challenges/closest-numbers/problem?isFullScreen=true

var arr = [5, 2, 3, 4, 1];
closestNumbers(arr);
function closestNumbers(arr) {
    let newArr = [], aux = Infinity, sum;
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        sum = Math.abs(arr[i] - arr[i + 1]);
        if (sum < aux) {
            aux = sum;
            newArr = [];
            newArr.push(arr[i], arr[i + 1]);
        } else if (sum == aux) {
            newArr.push(arr[i], arr[i + 1]);
        }
    }
    return newArr;
}