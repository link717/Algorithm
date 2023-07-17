const m = 15;
const coin = [1, 2, 5];

// 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수의 동전으로 교환해주려면?
function solution(m, coin) {
  let answer = 0;
  // dy[i]는 i 금액을 거슬러 줄 때, 사용된 최소 동전의 개수
  // 임의의 큰 값으로 초기화
  const dy = Array.from({ length: m + 1 }, () => 1000);

  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

solution(m, coin);
