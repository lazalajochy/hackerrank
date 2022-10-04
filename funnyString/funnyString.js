//https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign


function funnyString(s) {
    var r = [...s];
    r.reverse();
    var ascii = [], arrOne = [], arrTwo = [], arrR = [];
    for (let i = 0; i < s.length; i++) {
        ascii.push(s[i].charCodeAt(0));
        arrR.push(r[i].charCodeAt(0))
    };

    for (let j = 0; j < ascii.length; j++) {
        arrOne.push(Math.abs(ascii[j] - ascii[j + 1]));
        arrTwo.push(Math.abs(arrR[j] - arrR[j + 1]));
    };
    arrOne = arrOne.join('');
    arrTwo = arrTwo.join('');

    return (arrOne === arrTwo) ? "Funny" : "Not Funny";
};