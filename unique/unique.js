//https://www.hackerrank.com/challenges/lonely-integer/problem?isFullScreen=true
function lonelyinteger(a) {
    var unique = 0, count = 0;
    if (a.length == 1) {
        unique = a[0];
    } else {
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a.length; j++) {
                if (i !== j) {
                    if (a[i] == a[j]) {
                        count++;
                    }
                }
            }
            if (count == 0) unique = a[i];
            count = 0;
        }
    }

    return unique;
}
