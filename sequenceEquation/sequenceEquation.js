//https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true

var p = [2,3,1];

function permutationEquation(p) {

  let index, numberAdded;
  var x = p.length,
    newArr = [];
  for (let i = 1; i <= x; i++) {
    index = p.indexOf(i) + 1;
    numberAdded = p.indexOf(index) + 1;
    newArr.push(numberAdded);
  }

  return newArr;
}
