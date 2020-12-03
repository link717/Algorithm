// Question
// 재귀를 사용하여 팩토리얼(factorial)을 구하는 함수를 구현해주세요.
// 팩토리얼이란 1에서부터 n까지의 정수를 모두 곱한것을 말합니다.
// 재귀: 본인을 참조하는(호출하는) 함수

const factorial = num => {
  if ( num === 0 || num === 1 ) return 1;
  else {
    return num * factorial(num-1);
  }
}