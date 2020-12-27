function solution(n, words) {
  let stack = [words[0]];
  let count = 0;
  
  for (let stage = 0; stage < words.length/n; stage++) {
    let wordUnits = words.slice(3*stage, 3*(stage+1));
    
    for (let order = 1; order < wordUnits.length; order++) {
      let isUnique = (stack.indexOf(wordUnits[order]) === -1);
      let isContinuous = (stack[count].charAt(stack[count].length-1) === wordUnits[order].charAt(0));
      if (isUnique && isContinuous) {
        stack.push(wordUnits[order]);
        count++;
      } else {
        return [stage+1, order+1];
      }
    }
  }
  return [0, 0];
} 