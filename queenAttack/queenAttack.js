//https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true
/*
  n---> numero de filas y columnas
  k---> el numero de obstaculos
  r_q--->el numero de filas de la posicion de la reina
  c_q--->el numero de columna de la posicion de la reina


  -********************************************************-
  resultado---> el numero de filas y columnas que pueda atacar la reina
  */

var n = 5,
  c_q = 3,
  r_q = 4,
  obstacles = [
    [5, 5],
    [4, 2],
    [2, 3],
  ];

var result = queenAttack(n, c_q, r_q);

function queenAttack(n, c_q, r_q) {
  var arr = Array.from(Array(n), () => new Array(n).fill(0));
  arr[r_q - 1][c_q - 1] = 1;

  if (obstacles.length !== 0) {
    for (var i = 0; i < obstacles.length; i++) {
      let x = obstacles[i];
      let c = x[0];
      let r = x[1];
      arr[c - 1][r - 1] = 2;
    }
  }

  //****************Queen's attacks variables***********************\\

  let moveLeft = 1,
    left = true,
    queenAttack = 0,
    moveRigth = 1,
    rigth = true,
    moveDown = 1,
    down = true,
    moveUp = 1,
    up = true,
    diagonalLeftDown = true,
    diagonalRigthUp = true,
    diagonaLeftUp = true,
    diagonalRigthDown = true;
  debugger;

  //*************loop to iterate the array***********\\
  for (var j = 0; j < arr.length * arr.length - 1; j++) {
    //*********left queen's attack***********\\
    if (left == true) {
      if (arr[r_q - 1][c_q - 1 + moveLeft] == 0) {
        queenAttack++;
        arr[r_q - 1][c_q - 1 + moveLeft] = 1;
      } else {
        left = false;
      }
    }

    //***********rigth queen's attack***********\\
    if (rigth == true) {
      if (arr[r_q - 1][c_q - 1 - moveRigth] == 0) {
        queenAttack++;
        arr[r_q - 1][c_q - 1 - moveRigth] = 1;
      } else {
        rigth = false;
      }
    }

    //***********down queen's attack***********\\
    if (down == true) {
      if (r_q - 1 - moveDown >= 0) {
        if (arr[r_q - 1 - moveDown][c_q - 1] == 0) {
          queenAttack++;
          arr[r_q - 1 - moveDown][c_q - 1] = 1;
        } else {
          down = false;
        }
      } else {
        down = false;
      }
    }

    //***********up queen's attack***********\\
    if (up == true) {
      if (r_q - 1 + moveUp < n) {
        if (arr[r_q - 1 + moveUp][c_q - 1] == 0) {
          queenAttack++;
          arr[r_q - 1 + moveUp][c_q - 1] = 1;
        } else {
          up = false;
        }
      } else {
        up = false;
      }
    }

    //********diagonal left down  queen's attack**********\\
    if (diagonalLeftDown == true) {
      if (r_q - 1 - moveDown >= 0) {
        if (arr[r_q - 1 - moveDown][c_q - 1 + moveLeft] == 0) {
          queenAttack++;
          arr[r_q - 1 - moveDown][c_q - 1 + moveLeft] = 1;
        } else {
          diagonalLeftDown = false;
        }
      } else {
        diagonalLeftDown = false;
      }
    }

    //*******diagonal rigth up queen's attack**********\\
    if (diagonalRigthUp == true) {
      if (r_q - 1 + moveUp < n) {
        if (arr[r_q - 1 + moveUp][c_q - 1 - moveRigth] == 0) {
          queenAttack++;
          arr[r_q - 1 + moveUp][c_q - 1 - moveRigth] = 1;
        } else {
          diagonalRigthUp = false;
        }
      } else {
        diagonalRigthUp = false;
      }
    }

    //**********diagonal left up queen's attack**********\\
    if (diagonaLeftUp == true) {
      if (r_q - 1 + moveUp < n) {
        if (arr[r_q - 1 + moveUp][c_q - 1 + moveLeft] == 0) {
          queenAttack++;
          arr[r_q - 1 + moveUp][c_q - 1 + moveLeft] = 1;
        } else {
          diagonaLeftUp = false;
        }
      } else {
        diagonaLeftUp = false;
      }
    }

    //********diagonal rigth down queen's attack***********\\
    if (diagonalRigthDown == true) {
      if (r_q - 1 - moveDown >= 0) {
        if (arr[r_q - 1 - moveDown][c_q - 1 - moveRigth] == 0) {
          queenAttack++;
          arr[r_q - 1 - moveDown][c_q - 1 - moveRigth] = 1;
        } else {
          diagonalRigthDown = false;
        }
      } else {
        diagonalRigthDown = false;
      }
    }

    //********variable to increase the value**************\\
    moveDown++;
    moveUp++;
    moveRigth++;
    moveLeft++;
  }

  return queenAttack;
}
