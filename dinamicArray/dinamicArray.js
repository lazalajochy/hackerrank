//https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true
var strings = ['ab', 'ab', 'abc'], queries = ['ab', 'abc', 'bc']

var result = matchingStrings(strings, queries);
function matchingStrings(strings, queries) {
    debugger;
    var result = [], amount = 0;
    for (var i = 0; i < queries.length; i++) {
        for (var j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) amount++;
        }
        result.push(amount);
        amount = 0;
    }
    return result;
}