// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

let words = ["teacher", "time", "student", "beautiful", "good"];

function solution(words) {
  let answer = "",
    maxLength = Number.MIN_SAFE_INTEGER;

  for (let word of words) {
    if (maxLength < word.length) {
      maxLength = word.length;
      answer = word;
    }
  }
  return answer;
}
