let n = 3;
let m = 2;

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      //tmp가 참조형 데이터 타입이기 때문에 그대로 answer에 push하면 가장 마지막에 저장된 tmp 값들을 모두 참조하게 된다.
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
