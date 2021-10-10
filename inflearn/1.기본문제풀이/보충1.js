// 내장 함수로 최대값 최소값 구하기

const arr = [5, 3, 7, 11, 2, 15, 17];

function solution(arr) {
  // Math.min.apply(null, arr);
  return Math.min(...arr);
}

function solution(arr) {
  // Math.max.apply(null, arr);
  return Math.max(...arr);
}
