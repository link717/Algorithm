// 7개의 자연수가 주어질 때, 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

const arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
  let answer = new Array();
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) min = num;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
