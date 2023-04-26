let nums = [11, 7, 5, 6, 10, 9];

//삽입 정렬: 이미 정렬되어 있는 i개짜리 배열에 원소를 하나씩 더해가며 정렬된 i+1개의 배열을 만드는 방식
function insertionSort(nums) {
  let arr = [...nums];
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let tmp = arr[i];
    for (j = i - 1; j >= 0; j--) {
      //arr[j]가 tmp보다 크면 tmp가 앞으로 가야하기 때문에 한자리식 뒤로 밀려난다.
      //여기서 j 위치에는 값이 없다고 생각하면 된다.
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    //arr[j]의 값이 tmp보다 작을 경우에는 j+1 위치 즉, 전 루프에서 비워진 j 위치에 tmp를 넣어준다.
    arr[j + 1] = tmp;
  }
  return arr;
}
