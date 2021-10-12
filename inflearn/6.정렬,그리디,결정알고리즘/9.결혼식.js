let hours = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

function solution(hours) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  //왔다가 갔다가 하는 것을 표현하기 위해 배열을 아래와 같은 형태로 분리함
  for (let hour of hours) {
    timeLine.push([hour[0], "s"], [hour[1], "e"]);
  }
  timeLine.sort((a, b) => {
    //ASCII 코드로 변환하여 우선순위 비교, e가 s보다 순서상 앞이라 값이 작다.
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of timeLine) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}
