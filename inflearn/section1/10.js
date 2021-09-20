// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.

const alphabet = "R";
const word = "COMPUTERPROGRAMMING";

function solution(alphabet, word) {
  let answer = 0;

  for (let s of word) {
    if (s === alphabet) answer++;
  }
  return answer;
}

function solution(alphabet, word) {
  let answer = word.split(alphabet).length;
  return answer - 1;
}
