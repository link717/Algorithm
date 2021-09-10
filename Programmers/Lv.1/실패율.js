/*
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다.
오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
*/

function solution(N, stages) {
  let answer = [];
  let failureRate = {};
  let pass = stages.length;

  for (let i = 1; i < N + 1; i++) {
    // Stage별 실패율 계산
    let fail = 0;
    for (let stage of stages) {
      if (i === stage) fail++;
    }
    if (pass !== 0) {
      failureRate[i] = fail / pass;
    } else {
      failureRate[i] = 0;
    }
    pass -= fail;
    fail = 0;
  }

  let desc = Object.values(failureRate).sort((a, b) => b - a); // 실패율 내림차순 정렬
  for (let k of desc) {
    for (let j = 1; j < N + 1; j++) {
      // 내림차순 실패율의 Stage 값 확인
      if (failureRate[j] === k && answer.indexOf(j) === -1) {
        // 실패율이 같은 Stage의 경우, 중복 입력 제거 조건문
        answer.push(j);
      }
    }
  }
  return answer;
}

// 21-09-10
function solution(N, stages) {
  //스테이지별 도달한 플레이어수 확인
  let counts = Array(N).fill(0);
  for (let stage of stages) {
    if (counts[stage - 1] !== undefined) {
      counts[stage - 1] += 1;
    } else continue;
  }

  //스테이지별 실패율 계산
  let stageInfos = Array(N);
  let players = stages.length;
  for (let i = 0; i < N; i++) {
    stageInfos[i] = { stage: i + 1, failureRate: counts[i] / players };
    players -= counts[i];
  }

  //실패율 기준으로 정렬 : 이미 스테이지 순으로 오름차순으로 정렬된 상태이므로 실패율이 같은 경우, 스테이지 오름차순으로 표기된다.
  stageInfos.sort((prev, cur) => cur["failureRate"] - prev["failureRate"]);

  return stageInfos.map((e) => e["stage"]);
}
