let nums = [81, 58, 42, 33, 61];
let c = 259;

function solution(nums, c) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = nums.length;

  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      if (sum <= c) answer = Math.max(sum, answer);
    } else {
      DFS(L + 1, sum + nums[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
