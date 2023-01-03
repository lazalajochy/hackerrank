//https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true

var s =
    "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M",
  k = 27;

caesarCipher(s, k);

function caesarCipher(s, k) {
  var lower_alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase_alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let currentLetter, index, indexSum;
  s = [...s];

  for (let i = 0; i < s.length; i++) {
    currentLetter = s[i];
    index = lower_alphabet.indexOf(currentLetter);

    if (index !== -1) {
      indexSum = k + index;
      if (indexSum > 25) {
        while (indexSum > 25) {
          indexSum -= 26;
        }
      }
      s[i] = lower_alphabet[indexSum];
    } else {
      index = upperCase_alphabet.indexOf(currentLetter);
      if (index !== -1) {
        indexSum = k + index;
        if (indexSum > 25) {
          while (indexSum > 25) {
            indexSum -= 26;
          }
        }
        s[i] = upperCase_alphabet[indexSum];
      }
    }
  }

  return s.join("");
}
