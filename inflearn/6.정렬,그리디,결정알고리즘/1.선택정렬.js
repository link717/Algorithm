let nums = [13, 5, 11, 7, 23, 15];

//선택 정렬: 가장 작은걸 선택해서 비교 위치의 값과 교체하여 정렬하는 방식
const selectionSort = (nums) => {
  const n = nums.length;
  const arr = [...nums];

  for (let i = 0; i < n - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return arr;
};
