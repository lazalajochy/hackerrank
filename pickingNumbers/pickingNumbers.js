 //https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

 var a = [1, 2, 2, 3, 1, 2];

 var result = pickingNumbers(a)
 function pickingNumbers(a) {
     debugger
     var result = 1, aux = 0;
     for (var i = 0; i < a.length; i++) {
         for (var j = 0; j < a.length; j++) {
             var n = a[j], n1 = a[i]
             var x = n1 - n;
             if (j !== i) {
                 if (x == 1 || x == 0) result++;
             }
         }
         if (result > aux) aux = result;
         result = 1;
     }
     return aux;
 }