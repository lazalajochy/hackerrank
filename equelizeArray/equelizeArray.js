//https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true

var arr = [1,2,2,3];

var result = equelizeArray(arr);

function equelizeArray(arr){
    debugger;
    var aux = 0, compare = 0, result = 0;
    for(var i = 0; i < arr.length; i++){
        aux = arr[i];
       var  increment = 0;
        for(var j = 0; j < arr.length; j++){
            aux == arr[j] ? increment++ : increment;
            compare < increment ? compare = increment : compare;
        }
    }
    result =  arr.length - compare;
    return result;

}