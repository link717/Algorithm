// Question
// 양수 N을 이진법으로 바꿨을 때, 연속으로 이어지는 0 중에서 가장 큰 값을 return해 주세요.

// 이어지는 0은 1과 1사이에 있는 것을 의미합니다.
// 1과 1사이에 있는 0을 binary gap 이라고 하겠습니다.

const solution = N => {
  let binary =  N.toString(2);
  let removeZero = binary.substr(0, binary.lastIndexOf('1') + 1);
  return Math.max(...removeZero.split('1').map(el => el.length));
}