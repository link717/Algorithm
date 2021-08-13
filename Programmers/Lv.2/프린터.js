function solution(priorities, location) {
  
  let prioritiesWithIdx = priorities.map((priority, idx) => [priority, idx]);
  let printedList = [];
  
  
 while(prioritiesWithIdx.length > 0) {
  let currentDocument = prioritiesWithIdx.shift();
  let isUpperPriority = prioritiesWithIdx.every((priorityWithIdx) => currentDocument[0] >= priorityWithIdx[0]);
  
    if (isUpperPriority) {
      printedList.push(currentPriority);
    } else {
      prioritiesWithIdx.push(currentPriority);
    }
 }
  
  let myDocument = printedList.find((document) => document[1] == location);
  
  return printedList.indexOf(myDocument) + 1;
}