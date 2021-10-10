//가장 짧은 문자거리
//한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

let str = "teachermode";
let alphabet = "e";

function solution(str, alphabet) {
  let p = 1000;
  let answer = [];
  //왼쪽 기준, alphabet으로부터 거리
  for (let i = 0; i < str.length; i++) {
    str[i] === alphabet ? (p = 0) : p++;
    answer.push(p);
  }

  p = 1000;
  //오른쪽 기준, alphabet으로부터 거리
  for (let j = str.length - 1; j >= 0; j--) {
    str[j] === alphabet ? (p = 0) : p++;
    if (answer[j] > p) answer[j] = p;
  }
  return answer;
}
