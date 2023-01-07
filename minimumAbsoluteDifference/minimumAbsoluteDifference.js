//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true

var arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
function minimumAbsoluteDifference(arr) {
    arr = arr.sort((a, b) => a - b);
    let difference = Math.abs(arr[0] - arr[1])
    return arr.reduce((a, c, i) => {
        const next = arr[i + 1]
        const sub = Math.abs(c - next)
        if (sub < a) a = sub;
        return a;
    }, difference)
} 
