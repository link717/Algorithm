// Question 숫자 n이 인수로 주어졌을 때, 소인수 분해 결과를 Object 형태로 반환하라.

function getPrimaryNumberObject(n) {
  let answer = {};
  
  while (n >= 2) {
    for (let i = 2; i <= n; i++) {
      if (n%i === 0) {
        if (!answer[i]) {
          answer[i] = 1;
          n = parseInt(n/i);
        } else {
          answer[i]++;
          n = parseInt(n/i);
        }
        break;
      }
    }
  }
  return answer;
};