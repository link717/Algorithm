// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면 13123
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.

let arr = [1, 3, 1, 2, 3];
let num = 5;

function solution(arr, num) {
  let answer = (lt = sum = 0);
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > num) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
