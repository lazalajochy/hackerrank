//https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

var k = 2, a = [-1,-3,4,2];
var restul = angryTeacher(k,a);

function angryTeacher(k,a){
    var aux = 0, result = '';
    for(var i = 0; i <= a.length -1; i++){
        a[i] <= 0 ? aux++ : aux = aux;
        aux >= k ? result = 'NO' : result = 'YES';
    }
    return restul;
}