//https://www.hackerrank.com/challenges/kaprekar-numbers/problem?isFullScreen=true

var p = 962, q = 1000; //waiting for 999
var result = kaprekarNumbers(p, q);
function kaprekarNumbers(p, q) {
    var number = [], result = [];
    for (p; p <= q; p++) {
        var n = p * p;
        var string = n.toString()
        number = [...string];
        if (number.length == 1) {
            if (p == number[0]) result.push(p)
        } else {
            var x = Math.floor(number.length / 2);
            var n1 = '', n2 = '';
            for (var k = 0; k < number.length; k++) {
                if (k <= x - 1) {
                    n1 += number[k]
                } else {
                    n2 += number[k];
                }
            }
            if (p == parseInt(n1) + parseInt(n2)) result.push(p)

        }
        number = [];
    }

    result.sort((a, b) => { return a - b })

    if (result.length == 0) {
        console.log('INVALID RANGE')
    } else {
        console.log(result.join(' '))
    }
}

/**
 la complejidad algoritma de este codig es n * n * O(1) => O(n2), en otras palabras O(n2)
 */