let cache = [1, 2, 3, 2, 6, 2, 3, 5, 7];
let size = 5;

function solution(cache, size) {
  let memory = Array.from({ length: size }, () => 0);
  cache.forEach((el) => {
    let pos = memory.indexOf(el);
    if (pos === -1) {
      //cache miss
      for (let i = size - 1; i >= 0; i--) {
        //i - 1 위치의 값을 i번째 위치로 한 칸 옮겨준다.
        //자연스럽게 맨 뒤의 값이 사라짐
        memory[i] = memory[i - 1];
      }
    } else {
      //cache hit
      for (let j = pos; j >= 0; j--) {
        memory[j] = memory[j - 1];
      }
    }
    memory[0] = el;
  });
  return memory;
}

function solution(cache, size) {
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
