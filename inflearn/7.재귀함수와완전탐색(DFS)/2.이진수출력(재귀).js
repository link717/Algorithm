let num = 11;

function solution(num) {
  let answer = "";
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += String(L % 2);
    }
  }
  DFS(num);
  return answer;
}
