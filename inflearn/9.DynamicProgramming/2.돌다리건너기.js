let n = 7;

//돌의 개수가 n개이고 개울을 건너려면 n + 1을 구해야한다. +1은 땅으로 올라가는 방법
function solution(n) {
  let answer;
  dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
}
