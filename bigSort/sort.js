//https://www.hackerrank.com/challenges/big-sorting/problem?isFullScreen=true

function bigSorting(unsorted) {
    return unsorted.sort().sort((a, b) => a.length - b.length)
}
