//점화식: 어떤 수열의 일반항을 그 이전의 항들을 이용하여 정의한 식을 뜻합니다.

let n = 4;
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}
