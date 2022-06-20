//https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

var k = 5, heigth = [2,5,4,5,2];

var result = hurdleRace(k, heigth);

function hurdleRace(k, heigth){
    var maxHeigth = Math.max(... heigth), result = 0;
    maxHeigth > k ? result = maxHeigth - k : result = 0;
    return result;
}