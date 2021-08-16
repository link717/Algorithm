/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다.
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(participant, completion) {
  let hashTable = {};
  
  for (let i of completion) {
      if (hashTable[i] != null) {
          hashTable[i]++;
      } else {
          hashTable[i] = 1;
      }
  }
  
  for (let j of participant) {
      if (hashTable[j] != null && hashTable[j] > 0) {
          hashTable[j]--;
      } else {
          return j;
      }
  }
}

/*
비교 연산자(comparison operator)

!=  : 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않으면 참을 반환함. 
!== : 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않거나, 타입이 다르면 참을 반환함.
*/