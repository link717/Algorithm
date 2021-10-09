let lessons = "CBDAGE";
let plan = "CBA";

function solution(lessons, plan) {
  let answer = "YES";
  let queue = plan.split("");
  for (let x of lessons) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

function solution(lessons, plan) {
  //반례 "CBAB, CAB"
  let answer = "YES";
  let queue = plan.split("");

  for (let x of lessons) {
    if (x === queue[0]) queue.shift();
  }
  if (queue.length === 0) return answer;
  else return "NO";
}
