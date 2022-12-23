//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

var scores = [
    17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81,
    32, 50,
];

breakingRecords(scores);

function breakingRecords(scores) {
    var highestScore = 0,
        lowestScore = 0,
        auxLowest = scores[0],
        auxHigest = scores[0],
        result = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > auxHigest) {
            highestScore++;
            auxHigest = scores[i];
        }

        if (scores[i] < auxLowest) {
            lowestScore++;
            auxLowest = scores[i];
        }
    }
    result.push(highestScore, lowestScore)
    return result.join(' ')


}