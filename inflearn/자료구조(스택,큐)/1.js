// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

let brackets = "(()(()))(()";

function solution(brackets) {
  let answer = "YES";
  let stack = [];
  for (let x of brackets) {
    if (x === "(") stack.push(x);
    else {
      //여는 괄호없이 닫는 괄호가 들어가야 하는 상황이면 NO 리턴
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";
  return answer;
}
