//https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

var x1 = 14,
    v1 = 4,
    x2 = 98,
    v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    var n = 0;
    v1 > x2 ? (n = v1) : (n = x2);
    for (let i = 1; i <= n; i++) {
        x1 += v1;
        x2 += v2;
        if (x1 === x2) return "YES"
    }
    return "NO";
}