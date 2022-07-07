//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
var ranked = [100, 90, 90, 80], player = [70, 80, 105];


function climbingLeaderboard(ranked, player) {
    let result = [];
    ranked = ranked.filter((val, ind, arr) => arr.indexOf(val) === ind);
    var min = Math.min(...player), index = player.indexOf(min);
    if (Math.min(...ranked) > min) result.push(ranked.length + 1), player.splice(index, 1);

    var j = 0;

    ranked.map((item, index) => {
        while (j < player.length) {
            if (player[j] >= item) {
                result.push(index + 1);
                player.splice(j, 1);
                j--;
            };
            j++
        }
        j = 0;
    })



    return result.sort((a, b) => { return b - a });

}
