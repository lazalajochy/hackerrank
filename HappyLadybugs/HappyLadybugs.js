//https://www.hackerrank.com/challenges/happy-ladybugs/problem?isFullScreen=true
var b = ["RBY_YBR"];

happyLadybugs(b);

function happyLadybugs(b) {
    b = [...b.toString()];
    if (b.includes("_")) b = b.sort().filter((item) => item !== "_");

    if (b.length === 0) return "YES";

    let count = 1;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === b[i + 1] || b[i] === b[i - 1]) {
            count++;
        } else {
            i = i - 1;
            count = 1;
        }
        if (1 >= count) return "NO";
    }
    return "YES";
}
