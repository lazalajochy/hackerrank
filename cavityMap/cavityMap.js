//https://www.hackerrank.com/challenges/cavity-map/problem?isFullScreen=true

var grid = [
  "63456754",
  "68335522",
  "25482912",
  "54429472",
  "35416147",
  "75848666",
  "41633675",
  "82511989",
];
caveMap(grid);

function caveMap(grid) {
  var index = 0;
  var grid = Array.from(Array(grid.length), () =>
    new Array(1).fill([...grid[index++]]).flat()
  );

  let result = "",
    str = "";
  for (let i = 0; i < grid.length; i++) {
    var position = 0;

    for (let j = 0; j < grid.length; j++) {
      if (i >= 1 && grid.length - 1 > 0) {
        if (position >= 1 && grid.length - position > 1) {
          if (
            parseInt(grid[position][i - 1]) < parseInt(grid[position][i]) &&
            parseInt(grid[position][i + 1]) < parseInt(grid[position][i]) &&
            parseInt(grid[position + 1][i]) < parseInt(grid[position][i]) &&
            parseInt(grid[position - 1][i]) < parseInt(grid[position][i])
          ) {
            grid[position][i] = "X";
          }
        }
      }
      position++;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      str += grid[i][j];
    }
    result += str + "\n";
    str = "";
  }
  return result;
}
