//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

var arr = [1, 1, 2, 2, 3];

migratoryBirds(arr);

function migratoryBirds(arr) {
    let aux = 0, count = 1, newArr = [];
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }

        }
        if (count > aux) {
            aux = count;
            newArr = [];
            newArr.push(arr[i])
        } else {
            if (count == aux) {
                newArr.push(arr[i])

            }
        }
        count = 1;
    }

    return Math.min(...newArr);

}