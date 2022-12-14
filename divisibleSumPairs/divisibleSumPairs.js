//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

var arr = [1, 3, 2, 6, 1, 2], k = 3

divisibleSumPairs(arr, k);

function divisibleSumPairs(arr, k) {
    let result = 0, sum;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i < j) {
                sum = arr[i] + arr[j];
                if (sum % k == 0) result++;
            }
        }
    }

    return result;
}