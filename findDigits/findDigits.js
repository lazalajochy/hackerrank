//https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

var n = 10;
var result = findDigits(n);

function findDigits(n){
    let myFunc = num => Number(num);
    var result = 0;
    var arr = Array.from(String(n), myFunc);

    for(var i = 0; i <= arr.length -1; i++){
        var x = arr[i];
        n % x == 0 ? result++ : result = result;
    }

    return result;
}