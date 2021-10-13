let nums = [23, 87, 65, 12, 57, 32, 99, 81];
let target = 32;

function solution(nums, target) {
  let arr = [...nums].sort((a, b) => a - b);
  let answer;
  let lt = 0;
  rt = nums.length - 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}
