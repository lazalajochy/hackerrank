//https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=false

var s = "if man was meant to stay on the ground god would have given us roots";

encryption(s);

function encryption(s) {
  s = [...s];
  var str = "",
    result = "",
    count = 0,
    nrow = 0,
    ncolumn = 0;
  s.forEach((element) => {
    if (element !== " ") str += element;
  });

  var row = Math.round(Math.sqrt(str.length));
  var column = Math.round(str.length / row);

  while (row * column < str.length) {
    column++;
  }

  var arr = Array.from(Array(row), () => new Array(column));

  for (let i = 0; i < str.length; i++) {
    count++;
    arr[nrow][ncolumn] = str[i];
    ncolumn++;
    if (count === column) {
      nrow++;
      ncolumn = 0;
      count = 0;
    }
  }

  for (let i = 0; i <= arr.length; i++) {
    let index = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[index][i] !== undefined) result += arr[index][i];
      index++;
    }
    result += " ";
  }
  return result;
}
