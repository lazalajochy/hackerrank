//https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
var s = 'aab';  //waiting for b
var result = superReducedString(s);
function superReducedString(s) {
    debugger;
    var result = '';
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == arr[j + 1]) {
            arr.splice(j, 1);
            arr.splice(j, 1)
            j = -1;
        }
    }

    (arr.length !== 0) ? result = arr.join('') : result = 'Empty String'
    return result;
}