let arr = [1, 2, 5];
let m = 15;

function solution(arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum) {
    //탐색 시점의 answer보다 큰 값으로 탐색이 진행되지 않도록 미리 return 해준다.
    if (sum > m || L >= answer) return;
    if (sum === m) answer = Math.min(answer, L);
    else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}
