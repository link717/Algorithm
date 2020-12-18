//Question
// nums라는 정렬되지 않은 숫자 배열을 주면, 오름차순(1,2,3..10) 으로 정렬된 배열을 return해주세요.
// 선택정렬 알고리즘으로 구현할 것

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let compare = nums[i];
    let min = Math.min(...nums.slice(i, nums.length+1))
    
    if (compare > min) {
      nums[nums.indexOf(min)] = compare;
      nums[i] = min;
    }
  }
  return nums;
}
