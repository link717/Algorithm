// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

let n = 6;

function solution(n) {
  let answer = 0;
  let end = n;

  while (end > 0) {
    answer += end;
    end--;
  }
  return answer;
}
