let graph = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
let nodes = 5;

function solution(graph, nodes) {
  let answer = [];
  let adjMatrix = Array.from({ length: nodes + 1 }, () => Array());
  let ch = Array.from({ length: nodes + 1 }, () => 0);
  let path = [];

  //그래프를 이차원 배열로 변환
  for (let [a, b] of graph) {
    adjMatrix[a].push(b);
  }

  function DFS(v) {
    if (v === nodes) {
      answer.push(path.slice());
    } else {
      for (let i = 0; i <= adjMatrix[v].length; i++) {
        if (ch[adjMatrix[v][i]] === 0) {
          ch[adjMatrix[v][i]] = 1;
          path.push(adjMatrix[v][i]);
          DFS(adjMatrix[v][i]);
          ch[adjMatrix[v][i]] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}
