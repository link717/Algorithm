// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1: 가위, 2: 바위, 3: 보로 정하겠습니다.
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

let a = [2, 3, 3, 1, 3],
  b = [1, 1, 2, 2, 3];

function solution(a, b) {
  let answer = new Array();
  let winCases = {
    1: 3,
    2: 1,
    3: 2,
  };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    } else if (winCases[a[i]] === b[i]) {
      answer.push("A");
    } else {
      answer.push("B");
    }
  }
  return answer;
}
