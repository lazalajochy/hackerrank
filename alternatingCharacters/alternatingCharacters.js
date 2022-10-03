//https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
function alternatingCharacters(s) {
    var result = 0;
    var arr = [...s]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            result++;
        }
    }
    return result;

};