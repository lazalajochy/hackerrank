//https://www.hackerrank.com/challenges/marcs-cakewalk/problem?isFullScreen=true

var calories = [5, 10, 7];

marcsCakewalk(calories);

function marcsCakewalk(calories) {
  let sumOne = 0,
    pow = 0,
    sumTwo = 0;
  for (let i = 0; i < calories.length; i++) {
    pow = Math.pow(2, i);
    sumOne += calories[i] * pow; //5 20 28
  }

  calories = calories.sort((a, b) => b - a);

  for (let j = 0; j < calories.length; j++) {
    pow = Math.pow(2, j);
    sumTwo += calories[j] * pow;
  }

  return sumOne < sumTwo ? sumOne : sumTwo;
}
