// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

let arr = [5, 3, 7, 11, 2, 15, 17];

function solution1(arr) {
  let answer;

  for (let i = 0; i < arr.length; i++) {
    if (answer == undefined) {
      answer = arr[i];
      continue;
    } else {
      if (arr[i] < answer) {
        answer = arr[i];
      }
    }
  }
  return answer;
}

function solution2(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

function solution3(arr) {
  const answer = Math.min(...arr);
  return answer;
}

/**
 * function.apply(thisArg, [argsArray])
 * apply는 argsArray 배열의 원소 값들을 가져온다
 * null 을 첫번째 인자로 사용하면 context는 window 객체가 된다.
 * 가져온 원소의 값들을 thisArg가 칭하는 function 함수의 인자로 받아 실행시킨다.
 */
function solution4(arr) {
  const answer = Math.min.apply(null, arr);
  return answer;
}

console.log(Math.max(...arr)); // 최대값
