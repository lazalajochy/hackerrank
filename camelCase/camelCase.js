//https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true

var s = 'oneTwoThree';
var result = camelcase(s);
function camelcase(s) {
    var count = 1;
    for (let i = 0; i < s.length; i++) {
        var x = s[i];
        var y = s[i];
        var res = y.toLowerCase();
        (res === x) ? count = count : count++;
    }
    return count;
}