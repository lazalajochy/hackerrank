//https://www.hackerrank.com/challenges/lisa-workbook/problem?isFullScreen=true
var arr = [4, 2, 6, 1, 10], k = 3;
var result = workBook(arr, k);
function workBook(arr, k) {
    debugger;
    let special = 0, pages = 1, aux = 1;
    let n = 0
    for (let i = 0; i < arr.length; i++) {
        n = arr[i];
        for (let j = 1; j <= n; j++) {
            if (aux <= k) {
                if (pages == j) special++;
            } else {
                pages++;
                aux = 1;
                j = j - 1;
                continue
            }
            aux++;
        }
        aux = 1;
        pages++;
    }
    return special;
}