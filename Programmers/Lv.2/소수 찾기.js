/*
한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때,
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  // 중복된 값을 제거하기 위해 Set 사용
  let arr = [...numbers];
  let answer = new Set();

  // 소수찾기 이론: 에라토스테네스의 체
  function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

  // 순열 알고리즘으로 숫자 조합을 생성한 뒤, 소수인지 판별 후 answer set에 추가
  function permutation(numbersArr, pickNum) {
    if (numbersArr.length) {
      numbersArr.forEach((e, idx, arr) => {
        let tempNumber = parseInt(pickNum + e);
        if (isPrime(tempNumber)) {
          answer.add(tempNumber);
        }
        let restArr = arr.filter((_, index) => idx !== index);
        permutation(restArr, tempNumber);
      });
    }
  }

  permutation(arr, "");

  return answer.size;
}
