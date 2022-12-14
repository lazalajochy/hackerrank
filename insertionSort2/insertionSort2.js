//https://www.hackerrank.com/challenges/insertionsort2/problem?isFullScreen=true
var arr = [1, 4, 3, 5, 6, 2];
insertionSort(arr);

function insertionSort(arr) {
    let aux, index = 0;;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j !== i) {
                if (arr[j] > arr[i]) {
                    aux = arr[j];
                    arr.splice(j, 1, arr[i])
                    arr.splice(i, 1, aux);
                }
            }
        }
        if (index > 0) console.log(arr.join(" "));
        index++;
    }
}