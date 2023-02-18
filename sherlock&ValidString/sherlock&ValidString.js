/*
       https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?isFullScreen=true
       */


var s = 'bca';

isValid(s);

function isValid(s) {
    s = [...s];
    s.sort().sort((a, b) => a.length - b.length)
    let ocurrences = [], currentOcurrence = 1

    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            currentOcurrence++;
        } else {
            ocurrences.push(currentOcurrence);
            currentOcurrence = 1;
        }
    }
    let firstMax = Math.max(...ocurrences), min = Math.min(...ocurrences);
    let index = ocurrences.indexOf(firstMax);

    if (firstMax === min) return "YES";
    else {
        let diferrent = ocurrences.filter((x) => x < firstMax);
        if (diferrent == 1 && ocurrences.length > 2) {
            return "YES"
        } else {
            firstMax--;
            ocurrences.splice(index, 1);
            let secondMax = Math.max(...ocurrences);
            return (firstMax == min && secondMax == firstMax) ? "YES" : "NO";
        }
    }
}