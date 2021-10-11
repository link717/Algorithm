let nums = [120, 125, 152, 130, 135, 135, 143, 127, 160];

function solution(nums) {
  let arr = [...nums].sort((a, b) => a - b);
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length < 2) {
      if (arr[i] !== nums[i]) answer.push(i + 1);
    } else return answer;
  }
  return answer;
}
