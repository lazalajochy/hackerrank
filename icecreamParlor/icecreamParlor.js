//https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=true

var m = 6, arr = [1, 3, 4, 5, 6]
function icecreamParlor(m, arr) {
    var ressult = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] == m) {
                    ressult.push(i + 1, j + 1);
                    break

                }
            }
        }
    }
    ressult = ressult.filter((val, ind, arr) => arr.indexOf(val) === ind);
    return ressult;
};