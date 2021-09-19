// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고, 만들 수 없으면 "NO"를 출력한다.

const a = 6;
const b = 7;
const c = 11;

function solution(a, b, c) {
  // 세 변의 길이를 알 때: 가장 긴변의 길이가 두변의 길이의 합보다 작아야한다.
  let maxNum;
  let sum;

  if (a > b && a > c) {
    maxNum = a;
    sum = b + c;
  } else if (b > c) {
    maxNum = b;
    sum = a + c;
  } else {
    maxNum = c;
    sum = a + b;
  }

  return maxNum < sum ? "YES" : "NO";
}

function solution(a, b, c) {
  let maxNum;
  let sum = a + b + c;

  if (a > b && a > c) maxNum = a;
  if (b > c) maxNum = b;
  maxNum = c;

  return maxNum < sum - maxNum ? "YES" : "NO";
}
