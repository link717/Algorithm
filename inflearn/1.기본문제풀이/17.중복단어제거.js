// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.

let words = ["good", "time", "good", "time", "student"];

function solution(words) {
  let answer = new Array();
  for (let i = 0; i < words.length; i++) {
    if (words.indexOf(words[i]) === i) {
      answer.push(words[i]);
    }
  }
  return answer;
}

function solution(words) {
  let answer;
  //filter는 callback 함수가 true를 반환한 값만 남기고 나머지는 제거한다.
  answer = words.filter((v, i) => words.indexOf(v) === i);
  return answer;
}
