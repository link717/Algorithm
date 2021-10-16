let n = 2;
let m = [3, 6, 9];

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: n });
  let ch = Array.from({ length: m.length }, () => 0);
  function DFS(L) {
    if (L === n) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < m.length; i++) {
        if (ch[i] === 1) continue;
        else {
          ch[L] = 1;
          tmp[L] = m[i];
          DFS(L + 1);
        }
      }
    }
  }
  DFS(0);
  return answer;
}
