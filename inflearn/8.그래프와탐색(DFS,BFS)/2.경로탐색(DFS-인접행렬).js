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
  let adjArr = Array.from({ length: nodes + 1 }, () =>
    Array(nodes + 1).fill(0)
  );
  let ch = Array.from({ length: nodes + 1 }, () => 0);
  let path = [];

  //그래프를 이차원 배열로 변환
  for (let [a, b] of graph) {
    adjArr[a][b] = 1;
  }

  function DFS(v) {
    if (v === nodes) {
      answer.push(path.slice());
    } else {
      for (let i = 1; i <= nodes; i++) {
        if (adjArr[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  //1은 초기값이므로 초기 조건에 기본으로 셋팅해야한다.
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}
