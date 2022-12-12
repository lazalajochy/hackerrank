//https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
var s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], d = 18, m = 7; 

birthday(s, d, m);

function birthday(s, d, m) {
    let result = 0, sum, len = [];

    if (s.length == 1) {
        return (s[0] === d && s.length === m) ? 1 : 0;
    }

    for (let i = 0; i < s.length; i++) {
        len = [];
        sum = s[i]
        len.push(s[i])
        for (let j = i + 1; j < s.length; j++) {
                sum += s[j];
                len.push(s[j]);
                if (sum == d) {
                    if (len.length === m) {
                        result++;
                        break
                    } else {
                        break
                    }
                } else {
                    if (sum > d) break
                }
            

        }


    }
    return result;
}