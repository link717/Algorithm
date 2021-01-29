// Question nums라는 배열을 주면, 버블정렬 알고리즘으로 배열을 정렬해주세요.

const bubbleSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    let swap;
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = swap;
      }
    }
    if (!swap) {
      break;
    }
  }
 return nums;
}
