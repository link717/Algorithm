function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progress, idx) => Math.ceil((100-progress)/speeds[idx]));
  let count = 0;
  let maxDeploy = days[0];
  for (let j = 0; j < days.length; j++) {
    if (days[j] <= maxDeploy) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDeploy = days[j];
    } 
  }
  if (count !== 0) {answer.push(count)};
  return answer;
}