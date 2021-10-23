//2021-08-11
function solution(priorities, location) {
  let prioritiesWithIdx = priorities.map((priority, idx) => [idx, priority]);
  let printedList = [];

  while (prioritiesWithIdx.length > 0) {
    let currentPriority = prioritiesWithIdx.shift();
    let isUpperPriority = prioritiesWithIdx.every(
      (priority) => currentPriority[1] >= priority[1]
    );

    if (isUpperPriority) {
      printedList.push(currentPriority);
    } else {
      prioritiesWithIdx.push(currentPriority);
    }
  }
  return printedList.findIndex((document) => document[0] == location) + 1;
}

/*
테스트 1 〉	통과 (0.41ms, 30.2MB)
테스트 2 〉	통과 (0.65ms, 30.1MB)
테스트 3 〉	통과 (0.49ms, 30.2MB)
테스트 4 〉	통과 (0.21ms, 30.2MB)
테스트 5 〉	통과 (0.14ms, 30.2MB)
테스트 6 〉	통과 (0.17ms, 30MB)
테스트 7 〉	통과 (0.28ms, 30.2MB)
테스트 8 〉	통과 (0.54ms, 30.2MB)
테스트 9 〉	통과 (0.18ms, 30.1MB)
테스트 10 〉	통과 (0.25ms, 30.1MB)
테스트 11 〉	통과 (0.37ms, 30.2MB)
테스트 12 〉	통과 (0.26ms, 30.3MB)
테스트 13 〉	통과 (0.39ms, 29.9MB)
테스트 14 〉	통과 (0.10ms, 30.1MB)
테스트 15 〉	통과 (0.20ms, 30.2MB)
테스트 16 〉	통과 (0.26ms, 30.2MB)
테스트 17 〉	통과 (0.50ms, 30.2MB)
테스트 18 〉	통과 (0.11ms, 29.9MB)
테스트 19 〉	통과 (0.52ms, 30.1MB)
테스트 20 〉	통과 (0.37ms, 30.3MB)
*/

//2021-08-19
function solution(priorities, location) {
  let prioritiesObj = priorities.map((priority, idx) => {
    let container = {};
    container["location"] = idx;
    container["priority"] = priority;
    return container;
  });
  let printedList = [];

  while (prioritiesObj.length > 0) {
    let currentDocument = prioritiesObj.shift();
    let isUpperPriority = prioritiesObj.every(
      (document) => currentDocument["priority"] >= document["priority"]
    );

    if (isUpperPriority) {
      printedList.push(currentDocument);
    } else {
      prioritiesObj.push(currentDocument);
    }
  }

  return (
    printedList.findIndex((document) => document["location"] == location) + 1
  );
}

/*
테스트 1 〉	통과 (0.65ms, 30.2MB)
테스트 2 〉	통과 (0.92ms, 30.2MB)
테스트 3 〉	통과 (0.85ms, 30.1MB)
테스트 4 〉	통과 (0.32ms, 30.1MB)
테스트 5 〉	통과 (0.45ms, 30.4MB)
테스트 6 〉	통과 (0.57ms, 30.2MB)
테스트 7 〉	통과 (0.43ms, 30MB)
테스트 8 〉	통과 (0.53ms, 30MB)
테스트 9 〉	통과 (0.17ms, 30.3MB)
테스트 10 〉	통과 (0.24ms, 30.2MB)
테스트 11 〉	통과 (0.65ms, 30MB)
테스트 12 〉	통과 (0.58ms, 30MB)
테스트 13 〉	통과 (0.48ms, 30.1MB)
테스트 14 〉	통과 (0.17ms, 30.4MB)
테스트 15 〉	통과 (0.25ms, 30.2MB)
테스트 16 〉	통과 (0.20ms, 30.2MB)
테스트 17 〉	통과 (0.78ms, 30.2MB)
테스트 18 〉	통과 (0.16ms, 30.3MB)
테스트 19 〉	통과 (0.49ms, 30.2MB)
테스트 20 〉	통과 (0.40ms, 30.2MB)
*/

//2021-08-19

function solution(priorities, location) {
  let prioritiesMap = priorities.map((priority, idx) => {
    let map = new Map();
    map.set("location", idx);
    map.set("priority", priority);
    return map;
  });

  let printedList = [];

  while (prioritiesMap.length > 0) {
    let currentDocument = prioritiesMap.shift();
    let isUpperPriority = prioritiesMap.every(
      (document) => currentDocument.get("priority") >= document.get("priority")
    );

    if (isUpperPriority) {
      printedList.push(currentDocument);
    } else {
      prioritiesMap.push(currentDocument);
    }
  }

  return (
    printedList.findIndex((document) => document.get("location") == location) +
    1
  );
}

/*
테스트 1 〉	통과 (0.76ms, 30.3MB)
테스트 2 〉	통과 (1.02ms, 30.3MB)
테스트 3 〉	통과 (0.78ms, 30.3MB)
테스트 4 〉	통과 (0.28ms, 30.3MB)
테스트 5 〉	통과 (0.15ms, 30MB)
테스트 6 〉	통과 (0.31ms, 30MB)
테스트 7 〉	통과 (0.39ms, 30.2MB)
테스트 8 〉	통과 (1.38ms, 30.3MB)
테스트 9 〉	통과 (0.21ms, 29.9MB)
테스트 10 〉	통과 (0.28ms, 30.2MB)
테스트 11 〉	통과 (0.63ms, 29.9MB)
테스트 12 〉	통과 (0.46ms, 30.3MB)
테스트 13 〉	통과 (0.59ms, 30.1MB)
테스트 14 〉	통과 (0.10ms, 30.4MB)
테스트 15 〉	통과 (0.23ms, 30.3MB)
테스트 16 〉	통과 (0.18ms, 30.2MB)
테스트 17 〉	통과 (0.84ms, 30MB)
테스트 18 〉	통과 (0.18ms, 30.3MB)
테스트 19 〉	통과 (0.92ms, 30.1MB)
테스트 20 〉	통과 (0.56ms, 30.3MB)
*/

//2021-10-23
function solution(priorities, location) {
  let answer = 0;
  let documents = priorities.map((priority, idx) => {
    return { my: idx === location, val: priority };
  });
  let cnt = 0;

  while (documents.length > 0) {
    let tmp = documents.shift();
    let hasUpperPriority = documents.some(
      (document) => document["val"] > tmp["val"]
    );
    if (hasUpperPriority) {
      documents.push(tmp);
    } else {
      answer++;
      if (tmp["my"] === true) return answer;
    }
  }
  return answer;
}
