let mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
];

function diagonalPrint(mat) {
  let m = mat[0].length; //가로
  let n = mat.length; //세로

  for (let k = 0; k <= m - 1; k++) {
    let i = n - 1,
      j = k;
    while (j >= 0) {
      if (i >= 0 && j >= 0) console.log(mat[i][j]);
      i = i - 1;
      j = j - 1;
    }
  }

  for (let k = n - 2; k >= 0; k--) {
    let i = k,
      j = m - 1;
    while (i >= 0) {
      if (i >= 0 && j >= 0) console.log(mat[i][j]);
      i = i - 1;
      j = j - 1;
    }
  }
}
