let n = 4;
let m = 2;

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, sp) {
    if (L === m) answer.push(tmp.slice());
    else {
      for (let i = sp; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}
