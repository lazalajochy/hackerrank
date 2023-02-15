//https://www.hackerrank.com/challenges/priyanka-and-toys/problem
var w = [1, 2, 3, 21, 7, 12, 14, 21]

toys(w);

function toys(w) {
    let containers = 1;
    w.sort((a, b) => a - b);
    let min, index = 0;
    for (let i = 0; i <= w.length; i++) {
        min = w[i] - w[index]
        if (min > 4) {
            containers++;
            index = i;
        }
    }
    return containers
}
