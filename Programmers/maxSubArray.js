// Question
// 숫자로 이루어진 리스트 nums를 인자로 주면,
// 그 안에서 어떤 연속적인 요소를 더했을 때 가장 큰 값이 나오나요?
// 가장 큰 값을 찾아 return해주세요.

const maxSubArray = nums => {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length + 1; j++) {
      let maxSum = nums.slice(i, j+1).reduce((acc, cur) => acc + cur, 0);
      answer.push(maxSum);
    }
  }
  return Math.max(...answer);
};

/* 답안
const maxSubArray = nums => {
  for (let i = 1; i < nums.length; i++){
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
}; */