// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

let word = "ksekkset";

function solution(word) {
  let answer = "";
  for (let s of word) {
    if (answer.indexOf(s) === -1) answer += s;
  }
  return answer;
}

function solution(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === i) answer += word[i];
  }
  return answer;
}
