let nums = [1, 3, 5, 6, 7, 10];

function solution(nums) {
  let answer = "NO";
  let n = nums.length;
  let total = nums.reduce((acc, cur) => acc + cur, 0);
  let flag = false; //flag를 설정해서 정답이 있을 경우, callstack에 쌓인 동작들이 실행되지 않고 종료되도록 한다.
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = true;
      }
    } else {
      DFS(L + 1, sum + nums[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
