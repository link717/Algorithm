const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let count = 0;
  const visited = Array.from({ length: n + 1 }, () => 0);
  let adjMatrix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  // 인접행렬 형태로 그래프 모델링
  for (let [a, b] of wires) {
    adjMatrix[a][b] = 1;
    adjMatrix[b][a] = 1;
  }

  const dfs = (L) => {
    for (let i = 1; i <= n; i++) {
      const next = adjMatrix[L][i];
      if (visited[i] === 0 && next === 1) {
        visited[L] = 1;
        count++;
        dfs(i);
        visited[L] = 0;
      }
    }
  };

  // 전달받은 송전탑 graph의 연결을 하나하나씩 끊어보며 연결된 송전탑 개수를 구한다.
  for (let [a, b] of wires) {
    adjMatrix[a][b] = 0;
    adjMatrix[b][a] = 0;
    count = 1;
    dfs(1);
    adjMatrix[a][b] = 1;
    adjMatrix[b][a] = 1;

    // count: 연결된 송전탑 개수
    // n - count: 나머지 연결된 송전탑 개수
    answer = Math.min(answer, Math.abs(n - count - count));
  }
  return answer;
}

solution(n, wires);
