// 최대부부증가수열(LIS : Longest Increasing Subsequence)

let arr = [5, 3, 7, 8, 6, 2, 9, 4];

function solution(arr) {
  let answer = 0;
  // arr[i]를 수열의 맨 마지막 값이라고 할 때, 최대로 긴 증가수열의 길이를 dy[i]에 저장한다.
  let dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      // arr[i]가 arr[j]보다 크면 부분 증가 수열의 마지막 값이 될 수 있다.
      // 그 때 dy[j]가 최대인 경우를 찾아서 max에 저장한다.
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    // 그리고 그 max에 본인을 더해주면 arr[j]를 마지막으로 하는 최대 증가 수열의 길이가 된다.
    dy[i] = max + 1;

    // 그리고 dy 배열 중의 가장 큰 값이 최대 증가 수열의 길이가 된다.
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}
