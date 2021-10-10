// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다.)

let arr = [7, 3, 9, 5, 6, 12];

function solution(arr) {
  let answer = new Array();
  let min = Number.MIN_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num > min) answer.push(num);
    min = num;
  });

  return answer;
}
