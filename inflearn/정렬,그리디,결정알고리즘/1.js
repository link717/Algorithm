// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

let nums = [13, 5, 11, 7, 23, 15];

function solution(nums) {
  //선택 정렬: 가장 작은걸 선택해서 비교 위치의 값과 교체하여 정렬하는 방식
  let arr = [...nums];
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}
