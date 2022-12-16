//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
var apples = [2, 3, -4], oranges = [3, -2, -4], a = 4, b = 12, s = 7, t = 10;

countApplesAndOranges(apples, oranges, a, b);
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var result = [], appleCount = 0, orangeCount = 0;
    for (let i = 0; i < apples.length; i++) {
        let sum = a + apples[i]
        apples.splice(i, 1, sum)
        if (apples[i] >= s && apples[i] <= t) {
            appleCount++;
        }
    }

    result.push(appleCount)

    for (let j = 0; j < oranges.length; j++) {
        let sum = b + oranges[j];
        oranges.splice(j, 1, sum);
        if (oranges[j] >= s && oranges[j] <= t) {
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount)
}