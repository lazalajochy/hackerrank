//https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
var bill = [3, 10, 2, 9], k = 1, b = 7;
function bonAppetit(bill, k, b) {
    let result, sum = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            sum += bill[i];
        }
    }

    result = sum / 2;
    console.log(b > result ? b - result : "Bon Appetit");
}