let str = "()(((()())(())()))(())";

function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      //레이저인지 막대의 끝인지 확인
      //레이저라면 stack에 담김 여는괄호만큼 answer에 추가
      //막대끝이라면 answer에 +1
      if (str[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }
  return answer;
}
