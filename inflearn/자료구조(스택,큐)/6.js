let princes = 8;
let k = 3;

function solution(princes, k) {
  let answer;
  let queue = Array.from({ length: princes }, (_, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

function solution(princes, k) {
  let answer;
  let cnt = 1;
  let queue = Array.from({ length: princes }, (_, i) => i + 1);

  while (queue.length > 1) {
    if (cnt < k) {
      queue.push(queue.shift());
      cnt++;
    } else {
      queue.shift();
      cnt = 1;
    }
  }
  answer = queue.pop();
  return answer;
}
