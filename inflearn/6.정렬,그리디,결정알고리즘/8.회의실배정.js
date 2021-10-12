let hours = [
  [3, 3],
  [1, 3],
  [2, 3],
];

function solution(hours) {
  let answer = 1;
  //1.시작시간으로 정렬할 경우: [[2, 3], [3, 4], [1,5]]와 같은 반례 케이스를 통과하지 못한다.
  //2.끝-시작이 가장 짧은 순서로 정렬할 경우: [[2,10], [10,14], [10,11]]와 같은 반례 케이스를 통과하지 못한다.
  //3.끝나는 시간으로만 정렬할 경우: [[3, 3], [1, 3], [2, 3]]와 같은 반례 케이스를 통과하지 못한다. 시작시간 === 끝나는시간 사례도 있기때문에 끝나는 시간으로만 정렬할 경우, edge case가 발생한다.
  //4.끝나는 시간으로 정렬한 뒤, 끝나는 시간이 같은 경우에는 시작시간으로 정렬한다.
  let sortedArr = [...hours].sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let endTime = sortedArr[0][1];
  for (let x of sortedArr) {
    if (x[0] === endTime) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}
