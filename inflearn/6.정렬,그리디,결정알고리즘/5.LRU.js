let cache = [1, 2, 3, 2, 6, 2, 3, 5, 7];
let size = 5;

function solution(cache, size) {
  let arr = [...cache];
  let memory = Array.from({ length: size }, () => 0);
  cache.forEach((el) => {
    let pos = memory.indexOf(el);
    if (pos === -1) {
      for (let i = size - 1; i >= 0; i--) {
        //앞에서 뒤로 한칸씩 옮긴다.
        memory[i] = memory[i - 1];
      }
    } else {
      for (let i = pos; i >= 0; i--) {
        memory[i] = memory[i - 1];
      }
    }
    memory[0] = el;
  });
  return memory;
}

function solution(cache, size) {
  let arr = [...cache];
  let memory = Array(size).fill(0);

  for (let x of cache) {
    let pos = memory.indexOf(x);
    if (pos === -1) {
      //cache miss
      memory.pop();
      memory.unshift(x);
    } else {
      //cache hit
      memory.unshift(...memory.splice(pos, 1));
    }
  }
  return memory;
}
