// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

let arr = [5, 3, 7, 11, 2, 15, 17];

function solution(arr) {
  let answer;

  for (let i = 0; i < arr.length; i++) {
    if (answer == undefined) {
      answer = arr[i];
      continue;
    } else {
      if (arr[i] < answer) {
        answer = arr[i];
      }
    }
  }
  return answer;
}

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
