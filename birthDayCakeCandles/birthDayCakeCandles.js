//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
var candles = [4, 4, 1, 3];
birthdayKakeCandles(candles);

function birthdayKakeCandles(candles) {
    let candlesHeight = Math.max(...candles), count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candlesHeight == candles[i]) count++

    }
    return count;
}