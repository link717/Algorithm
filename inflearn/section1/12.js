// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

let word = "ItisTimeToStudy";

function solution(word) {
  let answer = word;
  answer = answer.toUpperCase();
  return answer;
}

function solution(word) {
  let answer = "";
  for (let s of word) {
    s === s.toLowerCase() ? (answer += s.toUpperCase()) : (answer += s);
  }
  return answer;
}

function solution(word) {
  let answer = "";
  for (let s of word) {
    let num = x.charCodeAt();
    (num >= 97, num <= 122)
      ? (answer += String.fromCharCode(num - 32))
      : (answer += s);
  }
}
