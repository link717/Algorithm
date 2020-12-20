// Qustion

// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
// 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다.

function solution(dartResult) {
  let answer = [];
  let BONUSES = { S: 1, D: 2, T: 3};
  let num = 0; //num의 자릿수 확인용
  
  for (let i = 0; i < dartResult.length; i++) {
    let data = dartResult.charAt(i);
    if(+data != data) {
      if(BONUSES[data]) {
        answer.push(Math.pow(dartResult.slice(i - num, i), BONUSES[data]));
        num = 0;
      } else {
        const option = data === '*' ? 2 : -1;
        const len = answer.length;
        if (option == 2 && len > 1) {
          answer[len - 2] = answer[len - 2] * option; // 길이가 2 이상일 경우, 이전 점수의 option 처리
        }
        answer[len - 1] = answer[len - 1] * option; // 현재 점수의 option 처리
      }
    } else {
      num++
    }
  }
  return answer.reduce((acc, value) => acc + value, 0); 
}

//[출처] : https://angwangho.github.io/algorithm-dartgame/