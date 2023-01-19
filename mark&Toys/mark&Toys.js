//https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

var prices = [1, 12, 5, 111, 200, 1000, 10], k = 50;
function maximumToys(prices, k) {
    prices.sort((a, b) => a - b)
    let sum = 0, previousValue = 0, count = 0;
    prices.reduce((acc, item) => {
        sum = sum + item;
        if (sum <= k) {
            count++;
            previousValue = sum;

        } else {
            sum = previousValue
        }
    })
    return count;
}