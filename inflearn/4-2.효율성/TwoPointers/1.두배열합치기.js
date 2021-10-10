// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

//two pointers algorithm

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    //p1++ 후위연산자 p1을 push하고 p1에 1을 더한다.
    arr1[p1] <= arr2[p2] ? answer.push(arr1[p1++]) : answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < n) answer.push(arr1[p2++]);

  return answer;
}

function solution(arr1, arr2) {
  let answer;
  let tmp = [...arr1, ...arr2];

  //sort 시간복잡도는 nlogn;
  answer = tmp.sort((a, b) => a - b);
  return answer;
}
