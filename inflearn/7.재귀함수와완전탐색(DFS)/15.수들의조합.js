let nums = [2, 4, 5, 8, 12];
let k = 3;
let m = 6;

function solution(nums, k, m) {
  let answer = 0;
  function DFS(L, sp, sum) {
    if (L === k && sum % m === 0) answer++;
    else {
      for (let i = sp; i < nums.length; i++) {
        DFS(L + 1, i + 1, sum + nums[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

solution(nums, k, m);
