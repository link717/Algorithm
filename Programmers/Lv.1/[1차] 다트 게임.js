/*
카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다.
*/



function solution(dartResult) {
  let stack = [];
  let BONUSES = { S: 1, D: 2, T: 3};
  let digit = 0;  // 숫자는 0 ~ 10점으로 숫자 자리수 구분 목적
  
  for (let i = 0; i < dartResult.length; i++) {
    let str = dartResult[i];
    if (+str != str) {
      if (BONUSES[str]) {
        stack.push(Math.pow(dartResult.slice(i-digit, i), BONUSES[str]));  // Math.pow(base, exponent) => base^exponent
        digit = 0;
      } else {
        let option = str === "*" ? 2 : -1;
        let len = stack.length;
        if (len >= 2) {
          option === 2 ? (stack[len-2] *= option, stack[len-1] *= option) : stack[len-1] *= option // 스타상 이전과 현재 점수 2배, 아차상은 현재 점수 마이너스
        } else {
          stack[len-1] *= option;
        }
      }
    } else {
      digit++
    }
  }
  return stack.reduce((cur, acc) => cur + acc, 0);
}