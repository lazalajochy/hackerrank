//https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true

var n = 5;
var result = utopianTree(n);

function utopianTree(n){
    var increment = 0, result = 0;

    do {
        increment % 2 == 0 ? result+=1 : result*=2;
        increment++;
    } while (increment <= n);
}