function solution(begin, target, words) {
  let answer = 0;
  let queue = [];
  let ch = Array.from({ length: words.length }, () => 0);
  queue.push(begin);

  function count(v, word) {
    let cnt = 0;
    for (let alphabet of word) {
      if (v.includes(alphabet)) cnt++;
    }
    return cnt;
  }

  if (words.includes(target)) {
    while (queue.length > 0) {
      let v = queue.shift();
      for (let i = 0; i < words.length; i++) {
        if (ch[i] === 0) {
          if (count(v, words[i]) === 1) {
            begin = words[i];
            answer++;
            if (begin === target) return answer;
          }
        } else queue.push(v);
      }
    }
  } else return 0;

  return answer;
}
