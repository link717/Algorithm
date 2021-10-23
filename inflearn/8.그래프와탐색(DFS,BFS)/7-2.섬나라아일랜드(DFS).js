let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    //방문한 위치 재탐색하지 않도록 변경
    arr[x][y] = 0;
    //해당 위치 주변으로 섬이 있는지 탐색
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //육지인 경우, 탐색 시도
      if (arr[i][j] === 1) {
        //DFS 호출한 횟수가 섬의 개수
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
}
