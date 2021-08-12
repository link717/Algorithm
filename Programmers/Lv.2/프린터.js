function solution(priorities, location) {
  
  let prioritiesWithIdx = priorities.map((priority, idx) => [idx, priority]);
  let printedList = [];
  
  
 while(prioritiesWithIdx.length > 0) {
  let currentPriority = prioritiesWithIdx.shift();
  let isUpperPriority = prioritiesWithIdx.every((priority) => currentPriority[1] >= priority[1]);
  
    if (isUpperPriority) {
      printedList.push(currentPriority);
    } else {
      prioritiesWithIdx.push(currentPriority);
    }
 }
  
  let myDocument = printedList.find((item) => item[0] == location);
  
  return printedList.indexOf(myDocument) + 1;
}