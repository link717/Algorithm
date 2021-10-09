// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

let arr = [13, 5, 11, 7, 23, 15];

function solution(arr) {
  //선택 정렬: 가장 작은걸 선택해서 맨 앞으로 이동해나가는 정렬
  let answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[i] > answer[j]) minIndex = j;
    }
    if (i !== minIndex) {
      let swap = answer[i];
      answer[i] = answer[minIndex];
      answer[minIndex] = swap;
    }
  }
  return answer;
}
