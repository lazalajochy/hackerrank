//https://www.hackerrank.com/challenges/is-fibo/problem?isFullScreen=true

var n = 89;
function isFibo(n) {
    let arr = [],
        checkValue = [],
        previousValue = 1;
    for (let i = 0; i <= n;) {
        i = i + previousValue;
        arr.push(i);
        checkValue.push(i);
        if (arr.length == 2) {
            i = arr[0] + arr[1];
            arr.splice(0, 1);
            previousValue = 0;
        }
    }
    return checkValue.includes(n) ? "IsFibo" : "IsNotFibo";
}
