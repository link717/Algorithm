// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

let s = "bacaAacba";
let t = "abc";

let setHash = function (hash, el) {
  if (hash.get(el)) hash.set(el, hash.get(el) + 1);
  else hash.set(el, 1);
};

let compareMaps = function (tH, sH) {
  //키 종류가 다를 경우, 사이즈가 다를 수 있음 : abc vs abb
  if (tH.size !== sH.size) return false;
  //키 종류의 개수가 같은 경우, 정확하게 같은지 비교 : abb vs aab
  for (let [key, val] of tH) {
    if (!sH.has(key) || sH.get(key) !== val) return false;
  }
  return true;
};

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    setHash(tH, x);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    setHash(sH, s[i]);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    setHash(sH, s[rt]);
    if (compareMaps(tH, sH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    //위에서 키의 값을 삭제했을 때 값이 0인 경우 key를 삭제함
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
