//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

var n = 5;
function staircase(n) {
    let str = "#", spc = ' ', result;
    for (let i = 1; i <= n; i++) {
        result = spc.repeat(n - i) + str.repeat(i)
        console.log(result)
    }

}