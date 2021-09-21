// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.

let alphabet = "R";
let word = "COMPUTERPROGRAMMING";

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

function solution(alphabet, word) {
  let answer = 0;
  let pos = word.indexOf(alphabet); // 첫번째 위치

  while (pos !== -1) {
    answer++;
    // 현재 pos 위치 이후의 인덱스부터 alphabet을 찾는다.
    pos = word.indexOf(alphabet, pos + 1);
  }
  return answer;
}
