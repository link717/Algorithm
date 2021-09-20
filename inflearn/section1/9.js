// 대문자로 이루어진 영단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하시오.

const word = "BANANA";

function solution(word) {
  // 여기서 answer는 word의 주소를 참조하는 것이 아니고 값이 복사된다.
  // 배열을 할당한 경우에는 원본이 바뀌면 참조하는 변수의 값도 바뀌지만 이 경우는 그렇지 않다.
  let answer = word;
  word = word.replace(/A/g, "#");
  return answer;
}

function solution(word) {
  let answer = word;
  answer = answer.replace(/A/g, "#");
  return answer;
}
