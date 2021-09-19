// 100 이하의 자연수 A, B, C를 입력받아  세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다.)

const a = 6;
const b = 5;
const c = 11;

function solution(a, b, c) {
  if (a < b && a < c) return a;
  if (b < c) return b;
  return c;
}
