let lessons = "CBDAGE";
let plan = "CBA";

function solution(lessons, plan) {
  let answer = "YES";
  let queue = plan.split("");

  for (let x of lessons) {
    if (x === queue[0]) queue.shift();
  }
  if (queue.length === 0) return answer;
  else return "NO";
}
