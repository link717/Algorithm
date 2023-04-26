let nums = [1, 2, 3, -3, -2, 5, 6, -6];

//스페셜 정렬: 양수만 정렬되고 음수는 원래의 순서를 유지
function specialSort(nums) {
  const n = nums.length;
  let arr = [...nums];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((arr[i] > 0 && arr[j] < 0) || (arr[i] > arr[j] && arr[i] > 0 && arr[j] > 0)) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
