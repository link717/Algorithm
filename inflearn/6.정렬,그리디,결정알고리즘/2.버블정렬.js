let nums = [13, 5, 11, 7, 23, 15];

//버블 정렬: 인접한 두 수를 비교하여 큰 수를 오른쪽으로 보내며 정렬하는 방식
//반복문이 1회 끝난 시점에는 맨 마지막 위치에 배열의 가장 큰 수가 자리잡게 된다.
const bubbleSort = (nums) => {
  const n = nums.length;
  const arr = [...nums];

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
