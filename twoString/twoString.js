//https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true
var s1 = "and",
    s2 = "art";

twoStrings(s1, s2);

function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) return "YES";
    }
    return "NO";
}