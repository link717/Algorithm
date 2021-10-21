let n = 7;

//BFS: 넓이 우선 탐색으로 같은 레벨의 노드를 전부 방문하고 다음 레벨을 순회하는 탐색
//L에 연결된 모든 노드를 Queue에 넣고 Queue에서 뺄 때 해당 정점과 연결된 노드를 Queue에 넣어주는 것을 반복하고, Queue 모두 비면 탐색을 종료한다.
//예시:  출발 상태에서 도착 상태가 있을 때 출발 지점에서 도착 지점으로 갈 수 있는 최단 거리를 구하는 경우
function solution(n) {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > n) continue;
      else queue.push(nv);
    }
  }
  return answer;
}
