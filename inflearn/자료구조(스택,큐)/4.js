// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

let str = "352+*9-";

let calculator = function (lt, rt, operator) {
  switch (operator) {
    case "+":
      return lt + rt;
    case "-":
      return lt - rt;
    default:
      return lt * rt;
  }
};

function solution(str) {
  let answer = 0;
  let stack = [];
  for (let x of str) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      let res = calculator(lt, rt, x);
      stack.push(res);
    }
  }
  answer = stack.pop();
  return answer;
}
