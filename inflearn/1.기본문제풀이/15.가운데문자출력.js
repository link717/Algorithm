// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력해야 합니다.

let word = "study";

function solution(word) {
  let answer = word;
  let mid = Math.floor(word.length / 2);
  // substring(startIndex, endIndex): startIndex ~ endIndex -1 사이의 값을 추출
  if (word.length % 2 === 0) {
    answer = answer.substring(mid - 1, mid + 1);
  } else {
    answer = answer.substring(mid, mid + 1);
  }
  return answer;
}
