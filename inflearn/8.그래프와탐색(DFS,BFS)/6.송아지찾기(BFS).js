let s = 5;
let e = 14;

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0); //직선의 좌표점 범위만큼 생성
  let cnt = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  //초기 방문 위치 셋팅
  ch[s] = 1;
  queue.push(s);

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return cnt[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1; //해당 위치 방문 여부 체크
        queue.push(nx);
        cnt[nx] = cnt[x] + 1;
      }
    }
  }
  return answer;
}

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length; //같은 레벨의 queue task를 전부 순회하고 다음 레벨로 넘어가기 위해 길이를 저장
    for (let i = 0; i < len; i++) {
      //같은 레벨의 queue 개수만큼 가지 뻗는 작업을 수행
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}
