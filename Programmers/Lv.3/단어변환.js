function solution(begin, target, words) {
  let answer = 0;
  let n = words.length;
  let ch = Array.from({ length: words.length }, () => 0);

  function isChangeable(v, nv) {
    let cnt = 0;
    for (let i = 0; i < v.length; i++) {
      if (v[i] !== nv[i]) cnt++;
    }
    return cnt === 1 ? true : false;
  }

  if (!words.includes(target)) return 0;

  function DFS(L, v) {
    if (v === target) {
      if (answer === 0) answer = L;
      else answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (ch[i] === 0 && isChangeable(v, words[i])) {
          ch[i] = 1;
          DFS(L + 1, words[i]);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, begin);
  return answer;
}

function solution(begin, target, words) {
  let answer = 0;
  let queue = [];
  let ch = Array.from({ length: words.length }, () => 0);

  //비교하려는 nv(next vertex)가 변경 가능한지 확인
  function isChangeable(v, nv) {
    let cnt = 0;
    if (v.length !== nv.length) return false;
    for (let i = 0; i < v.length; i++) {
      if (v[i] !== nv[i]) cnt++;
    }
    return cnt === 1 ? true : false;
  }

  //words에 target이 없는 경우, 단어 변환이 불가능하므로 0을 반환
  if (!words.includes(target)) return 0;

  //초기화
  queue.push([begin, 0]);

  //BFS
  while (queue.length > 0) {
    let [v, level] = queue.shift();
    if (v === target) return level;
    for (let i = 0; i < words.length; i++) {
      if (ch[i] === 0 && isChangeable(v, words[i])) {
        queue.push([words[i], ++level]);
        ch[i] = 1;
      }
    }
  }
  return answer;
}
