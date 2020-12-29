// Question
// 오름차순인 숫자 nums 배열과 찾아야할 target을 인자로 주면,
// target이 몇 번째 index인지 return 해주세요.

const search = (nums, target) => {
  let left = 0;
  let right = nums.length-1;
  
  while(left <= right) {
    let idx = Math.round((left+right)/2);
    console.log(idx);
    if (nums[idx] <= target) {
      left = idx+1;
    } else {
      right = idx-1;
    }
  }
  return (right >= 0 && nums[right] === target) ? right : -1;
}