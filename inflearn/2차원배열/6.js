//N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let rowSum = 0,
    colSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
  }
}
