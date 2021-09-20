// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

const word = "ItisTimeToStudy";

function solution(word) {
  let answer = word;

  for (let s of word) {
    if (s !== s.toUpperCase()) answer;
  }
}
