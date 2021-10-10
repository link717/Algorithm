// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
// 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
// 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

let str = "BACBACCACCBDEDE";

function solution(str) {
  let hash = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  let answer;

  for (let x of str) {
    if (hash.get(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  for (let [key, val] of hash) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

function solution(str) {
  let hash = {};
  let max = Number.MIN_SAFE_INTEGER;
  let answer;

  for (let x of str) {
    hash[x] === undefined ? (hash[x] = 1) : hash[x]++;
  }
  hash = Object.entries(hash);
  for (let s of hash) {
    if (s[1] > max) {
      max = s[1];
      answer = s[0];
    }
  }
  return answer;
}
