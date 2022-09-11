//https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function hackerrankInString(s) {
    var word = 'hackerrank', stringCompare = '', arr = [];
    var j = 0;
    debugger
    for (var i = 0; i < word.length; i++) {
        for (j; j < s.length; j++) {
            if (s[j] === word[i]) {
                arr.push(s[j]);
                break;
            }
        }
        j++;
    }
    stringCompare = arr.join('');
    return (stringCompare === word) ? "YES" : "NO";

}