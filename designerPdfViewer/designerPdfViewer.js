//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true
var h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5,
];
var word = "torn";

designerPdfViewer(h, word);

function designerPdfViewer(h, word) {
  const map = new Map([
    ["a", 0],
    ["b", 1],
    ["c", 2],
    ["d", 3],
    ["e", 4],
    ["f", 5],
    ["g", 6],
    ["h", 7],
    ["i", 8],
    ["j", 9],
    ["k", 10],
    ["l", 11],
    ["m", 12],
    ["n", 13],
    ["o", 14],
    ["p", 15],
    ["q", 16],
    ["r", 17],
    ["s", 18],
    ["t", 19],
    ["u", 20],
    ["v", 21],
    ["w", 22],
    ["x", 23],
    ["y", 24],
    ["z", 25],
  ]);
  const newArr = [];

  for (let i = 0; i < word.length; i++) {
    let value = map.get(word[i]);
    newArr.push(h[value]);
  }
  return Math.max(...newArr) * newArr.length;
}
