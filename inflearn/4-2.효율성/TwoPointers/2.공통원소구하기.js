let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

function solution(arr1, arr2) {
  let answer = [];
  for (let x of arr1) {
    if (arr2.indexOf(x) !== -1) answer.push(x);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

function solution(arr1, arr2) {
  let answer = [];
  //단순 sort를 사용할 경우, 문자열로 변환해서 dictionary 정렬한다.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}
