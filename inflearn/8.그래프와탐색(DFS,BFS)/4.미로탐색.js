let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

function solution(arr) {
  let answer = 0;
  let n = arr.length - 1;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (arr[x][y])
      if (x === n && y === n) {
        answer++;
      } else {
        for (let i = 0; i < dx.length; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (nx >= 0 && nx <= n && ny >= 0 && ny <= n && arr[nx][ny] === 0) {
            arr[nx][ny] = 1;
            DFS(nx, ny);
            arr[nx][ny] = 0;
          }
        }
      }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
}
