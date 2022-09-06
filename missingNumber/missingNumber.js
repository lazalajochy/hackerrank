//https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true&h_r=next-challenge&h_v=zen 
var arr = [7, 2, 5, 3, 5, 3], brr = [7, 2, 5, 4, 6, 3, 5, 3, 6]; //waiting for 4,6
var result = missing(arr, brr);
function missing(arr, brr) {
    for (var i = 0; i < brr.length; i++) {
        for (var k = 0; k < arr.length; k++) {
            if (brr[i] == arr[k]) {
                brr.splice(i, 1);
                arr.splice(k, 1);
                i = -1;
                break
            }
        }

    }

    brr = brr.filter((val, ind, arr) => arr.indexOf(val) === ind)
    brr.sort((a, b) => { return a - b })
    return brr;
}