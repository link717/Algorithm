const jobs = [
  [7, 8],
  [3, 5],
  [9, 6],
];

function solution(jobs) {
  let i = 0;
  let startTime = 0;
  let spendTime = 0;
  const tasks = [...jobs];
  const priorityQueue = [];

  // 시작 시간순으로 오름차순 정렬한다.
  tasks.sort((prev, cur) => prev[0] - cur[0]);

  // jobs의 길이만큼 순회를 돌지 않았거나 우선순위 큐에 남은 작업이 있을 경우 조건문을 반복한다.
  while (tasks.length > i || priorityQueue.length > 0) {
    // 시작시간에 도달하지 않은 작업의 경우, 작업을 진행할 수 없기 때문에
    // 시작시간이 작거나 같은 task를 전부 우선순위 큐에 넣고 i를 1만큼 증가시킨다.
    if (tasks.length > i && startTime >= tasks[i][0]) {
      priorityQueue.push(tasks[i++]);
      // 시작할 수 있는 task를 처리시간이 짧은 순으로 오름차순 정렬한다.
      priorityQueue.sort((prev, cur) => prev[1] - cur[1]);
      continue;
    }
    if (priorityQueue.length > 0) {
      const [start, time] = priorityQueue[0];
      // 이전 task의 시작시간 + 현재 task의 종료시간 = 다음 task의 시작시간
      startTime += time;
      // 다음 task의 시작시간 - 현재 task의 시작시간 = 현재 task의 대기시간 + 현재 task의 수행시간
      spendTime += startTime - start;
      priorityQueue.shift();
    } else {
      // 처리할 task가 queue에 없을 경우, 다음 우선순위 작업의 시작시간을 startTime으로 설정한다.
      startTime = tasks[i][0];
    }
  }
  return Math.floor(spendTime / jobs.length);
}

solution(jobs);
