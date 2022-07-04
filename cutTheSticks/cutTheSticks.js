//https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true

// var arr = [1, 2, 3];
 var arr = [5, 4, 4, 2, 2, 8] //waiting  for 6,4,2,1
 varresult = cutTheSticks(arr);

 function cutTheSticks(arr) {
     var newArr = [];
     while (arr.length !== 0) {
         var aux = Math.min(...arr)
         document.write(arr.length)

         for (var j = 0; j < arr.length; j++) {
             if (arr[j] - aux !== 0) newArr.push(arr[j] - aux);
         };
         arr = newArr;
         newArr = [];
     };
 };