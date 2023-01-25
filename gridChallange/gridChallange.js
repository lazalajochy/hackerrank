//https://www.hackerrank.com/challenges/grid-challenge/problem?isFullScreen=true

var grid = ["ppp", "ypp", "wyw"];
gridChallenge(grid);

function gridChallenge(grid) {
  var index = 0;
  grid = Array.from(Array(grid.length), () =>
    new Array(1)
      .fill([...grid[index++]])
      .flat()
      .sort()
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (j > 0) {
        if (grid[j][i] < grid[j - 1][i]) {
          return "NO";
        }
      }
    }
  }
  return "YES";
}
