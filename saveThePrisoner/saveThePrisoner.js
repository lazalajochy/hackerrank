//https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true

/*
my soluction for this problem was 
var n = 4, m = 6, s = 2;
var result = saveThePrisoner(n,m,s)

function saveThePrisoner(n,m,s){
    for(var i = 1; i < m; i++){
        s == n ? s = 1 : s++;
    }
    return s;

    but the website shows an error runtime error and I did copy a solution 
    return (m-1 + s)%n || n;
}

function saveThePrisoner(n,m,s){
    return (m-1 + s)%n || n;
};

*/



