let nums = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

let M = 20;

function solution(nums, M) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = nums.length;

  function DFS(L, sum, time) {
    if (time > M) return;
    if (L === n) {
      answer = Math.max(sum, answer);
    } else {
      DFS(L + 1, sum + nums[L][0], time + nums[L][1]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}
