/*
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
*/

function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let count = 0;
  let maxDeploy = days[0];
  for (let j = 0; j < days.length; j++) {
    if (days[j] <= maxDeploy) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDeploy = days[j];
    }
  }
  //cnt를 해서 나중에 넣는 방식이라 마지막 cnt를 확인해주지 않으면 마지막 작업이 정답에 담기지 않음
  if (count !== 0) {
    answer.push(count);
  }
  return answer;
}

//2021-10-23
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < progresses.length; i++) {
    if (maxDay >= days[i]) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}
