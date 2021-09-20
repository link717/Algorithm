// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하시오.

const word = "KoreaTimeGood";

function solution(word) {
  let answer = 0;
  // ASCII 코드
  // 대문자: 65 ~ 90
  // 소문자: 97 ~ 122;
  for (let s of word) {
    let num = s.charCodeAt();
    if (65 <= num && num <= 90) answer++;
  }
  return answer;
}

function solution(word) {
  for (let s of word) {
    if (s === s.toUpperCase()) answer++;
  }
}
