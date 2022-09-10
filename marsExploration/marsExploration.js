//https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true

var s = 'SOSOOSOSOSOSOSSOSOSOSOSOSOS';
var result = marsExploration(s);

function marsExploration(s) {
    var result = 0, arr = [], msg = "SOS";
    for (var i = 0; i < s.length; i++) {
        arr.push(s[i]);
        if (arr.length == 3) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] !== msg[j]) result++;
            }
            arr = [];
        }
    }
    return result;
}