function solution(brown, yellow) {
  // 가로 >= 세로 길이이므로 가장 크게 가질 수 있는 가로 길이를 설정
  const maxWidth = brown + yellow;

  // (width * height) = brown + yellow를 참조하여 완전 탐색 루프 실행
  for (let i = maxWidth; i > 0; i--) {
    if (maxWidth % i == 0) {
      let tmpWidth = i;
      let tmpHeight = maxWidth / i;

      if (checkSize(tmpWidth, tmpHeight)) return [tmpWidth, tmpHeight];
    }
  }

  // 입력된 가로, 세로 값으로 유효성 검사하는 로직
  function checkSize(width, height) {
    let condition1 = (width + height) * 2 - 4 == brown;
    let condition2 = width * height - brown == yellow;

    return condition1 && condition2;
  }
}

const nums = [8, 31, 48, 73, 3];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let location = i - 1;
    let pick = arr[i];

    while (location >= 0 && pick < arr[location]) {
      let swap = arr[location];
      arr[location] = pick;
      arr[i] = swap;
      location--;
    }
  }
  return arr;
}

insertionSort(nums);
