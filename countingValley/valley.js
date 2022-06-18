//https://www.hackerrank.com/challenges/counting-valleys/problem

var path = "UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU"; //waiting for 6
var result = countValley(path);
function countValley(path) {
  
  var result = 0, d = 0; 
  for(var i = 0; i <= path.length -1; i++){
    if(d <  0){
      path[i] == "D" ? d-- : d++;
      d == 0 ? result++ : result = result;
    }else{
      path[i] == "D" ? d-- : d++;

    }
  }
  document.write(result);
}