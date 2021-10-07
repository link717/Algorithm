// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

function solution(str) {
  let answer = "";
  let stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else if (x === ")") stack.pop(x);
    else if (stack.length === 0) answer += x;
  }
  return answer;
}

function solution(str) {
  let answer;
  let stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}
