//https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=true

var t = 4;
function strangeCounter(t) {
    var value = 3, increment = 1;
    for (var i = 1; i <= t; i++) {
        if (value == 0) {
            increment *= 2;
            value = increment * 3;
            i--;
        } else {
            if (i == t) {
                break
            } else {
                value--;
            }
        }
    }
    return value;
}
