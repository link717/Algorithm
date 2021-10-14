let n = 5; //마구간수
let c = 3; //말
let coordinateX = [1, 2, 8, 4, 9];

//결정 알고리즘에서는 해당 조건이 true인지 false인지 구분하는 것이 가장 중요하다.
function count(arr, mid) {
  let cnt = 1;
  //무조건 첫번째 위치에는 말을 배치하는 것이 좋다.
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    //두 마구간 사이의 거리가 mid 보다 작을 경우에 말을 배치할 수 없다.
    if (arr[i] - ep >= mid) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
}

function solution(n, c, coordinateX) {
  let answer = Number.MIN_SAFE_INTEGER;
  let arr = [...coordinateX].sort((a, b) => a - b);
  //이분탐색으로 mid 값을 추출하고 탐색하기 때문에 lt,rt가 정확할 필요는 없다.
  let lt = 1; //예상 최소 거리
  let rt = arr[arr.length - 1]; //예상 최대 거리

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(arr, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
