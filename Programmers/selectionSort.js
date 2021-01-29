//Question
// nums라는 정렬되지 않은 숫자 배열을 주면, 오름차순(1,2,3..10) 으로 정렬된 배열을 return해주세요.
// 선택정렬 알고리즘으로 구현할 것

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let minNum = nums[minIndex];
      nums[minIndex] = nums[i];
      nums[i] = minNum;
    }
  }
  return nums;
}
