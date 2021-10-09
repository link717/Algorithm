let nums = [13, 5, 11, 7, 23, 15];

function solution(nums) {
  //버블 정렬: 인접한 두 수를 비교하여 큰 수를 오른쪽으로 보내며 정렬하는 방식
  //루프가 1회 끝난 시점에는 맨 마지막 위치에 배열의 가장 큰 수가 자리잡게 된다.
  let arr = [...nums];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
