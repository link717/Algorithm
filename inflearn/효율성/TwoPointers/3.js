// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

let num = 6;
let arr = [1, 2, 1, 3, 1, 1, 1, 2];

function solution(arr, num) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === num) answer++;
    while (sum >= num) {
      sum -= arr[lt++];
      if (sum === num) answer++;
    }
  }
  return answer;
}

function solution(arr, num) {
  let answer = 0;
  let lt = (rt = 0);
  let sum = 0;

  while (rt <= arr.length) {
    if (sum === num) {
      sum -= arr[lt++];
      answer++;
    } else if (sum > num) {
      sum -= arr[lt++];
    } else {
      sum += arr[rt++];
    }
  }
  return answer;
}

function solution(arr, num) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      if (sum === num) {
        answer++;
        break;
      } else if (sum < num) {
        sum += arr[j];
      } else break;
    }
  }

  return answer;
}
