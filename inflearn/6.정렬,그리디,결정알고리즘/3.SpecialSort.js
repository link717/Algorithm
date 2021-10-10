let nums = [1, 2, 3, -3, -2, 5, 6, -6];

function solution(nums) {
  //스페셜 정렬: 양수만 정렬되고 음수는 원래의 순서를 유지
  let arr = [...nums];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
