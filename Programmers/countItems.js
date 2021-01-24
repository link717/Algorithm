// Question 2차 이상의 arr와 item을 인자로 받아 item의 개수를 return 하는 함수를 구현하여라.

const arr = ["apple", 25, "banana", ["apple", 25]];

function countItems(arr, item) {
  let answer = 0;
  function checkItems(arr, item) {
    for (let i of arr) {
      if (typeof i !== "object") {
        if (i === item) {
          answer++;
        }
      } else {
        checkItems(i, item);
      }
    }
  }
  checkItems(arr, item);
  return answer;
}