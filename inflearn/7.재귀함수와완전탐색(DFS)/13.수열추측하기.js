let n = 4;
let total = 16;

//파스칼의 규칙을 공식화하면 주어진 값들(1 ~ n까지의 정수)의 위치(pos === idx)에 따라 (n - 1)Cpos 구한 뒤 각각의 값들에 조합 결과를 곱한 뒤 다 더하면 f가 된다.
function solution(n, total) {
  let answer;
  //조합 구할 때 메모이제이션을 위한 매트릭스 정의
  let matrix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  function combination(n, r) {
    if (matrix[n][r] > 0) return matrix[n][r];
    if (n === r || r === 0) return 1;
    else
      return (matrix[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  }

  //파스칼 규칙에 따른 조합을 구하고 저장하기 위한 배열 정의
  let cb = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    cb[i] = combination(n - 1, i);
  }
  //top 위치의 숫자를 순서대로 배열하는 순열을 구하기 위해 정의한 배열
  let pt = Array.from({ length: n }, () => 0);
  //이미 탐색한 값인지 확인하기 위해 정의한 배열
  let ch = Array.from({ length: n + 1 }, () => 0);
  //답을 찾았을 경우, callstack에 쌓인 작업들을 종료하기 위한 구분자
  let flag = false;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === total) {
      answer = pt.slice();
      flag = true;
    } else {
      //만약 n이 4라면 1 ~ 4까지의 순열을 구하기 위한 반복문
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          pt[L] = i;
          DFS(L + 1, sum + cb[L] * pt[L]);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}
