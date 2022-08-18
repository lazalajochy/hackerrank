 //https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

 var a = [1, 2, 2, 3, 1, 2];

 var result = pickingNumbers(a)
 function pickingNumbers(a) {
     var result = 0, aux = 1;
     for (var i = 0; i < a.length; i++) {
         for (var j = 0; j < a.length; j++) {
             var absoluteDifference = a[i] - a[j];
             if (j !== i) {
                 if (absoluteDifference == 1 || absoluteDifference == 0) result++;
             }
         }
         if (aux > result) result = aux;
         aux = 1;
     }
     return result;
 }