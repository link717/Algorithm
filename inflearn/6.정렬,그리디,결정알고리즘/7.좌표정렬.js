let coordinate = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

function solution(coordinate) {
  let answer = [...coordinate].sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}
