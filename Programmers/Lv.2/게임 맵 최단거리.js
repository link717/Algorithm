function solution(maps) {
  let answer = 0;
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  // 동서남북
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const visited = [...maps];
  const queue = [];

  // 출발지점 셋팅
  queue.push([0, 0]);
  answer = 1;
  visited[0][0] = 0;

  while (queue.length > 0) {
    const size = queue.length;
    // 같은 레벨의 노드를 전부 탐색
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      // 다음 레벨의 노드 중 유효한 좌표 값을 모두 찾아 queue에 넣는다.
      for (let j = 0; j < dx.length; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && visited[nx][ny] === 1) {
          if (nx === n && ny === m) {
            // return: 반복문과 함께 함수를 종료하면서 최단 경로 값을 반환
            return answer + 1;
          } else {
            queue.push([nx, ny]);
            visited[nx][ny] = 0;
          }
        }
      }
    }
    // 다음 레벨의 노드를 탐색하기 전에 본인 레벨을 전부 탐색한 후 1을 더한다.
    answer++;
  }
  // 모든 경로를 탐색했으나 유효한 경로가 없을 경우 -1을 반환
  return -1;
}
