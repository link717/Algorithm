/*
 n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다.
가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다.
하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.
모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때,
모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

각 시간별로 최대로 심사할 수 있는 개수를 각각 구해서 반환한다.
*/
function count(mid, times) {
  let cnt = 0;
  for (let time of times) {
    cnt += Math.floor(mid / time);
  }
  return cnt;
}
function solution(n, times) {
  let answer = Number.MAX_SAFE_INTEGER;
  let lt = 1,
    rt = n * Math.max(...times);
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    //심사할 수 있는 인원수가 필요한 검사인원보다 크거가 같을 경우, answer를 변경한다.
    //최소 검사시간이 필요하므로 초과해서 검사한 경우, mid를 줄여서 다시 계산한다.
    if (count(mid, times) >= n) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
