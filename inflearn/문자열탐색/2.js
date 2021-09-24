//유효한 팰린드롬
//앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
//단, 회문을 검사할 때 알파벳만 가지고 검사하며, 대소문자를 구분하지 않습니다.
//알파벳 이외의 문자들은 무시합니다.

let str = "found7, time: study; Yduts; emit, 7Dnuof";

function solution(str) {
  let answer = "YES";
  let s = str
    .split("")
    .filter(
      (x) =>
        (65 <= x.charCodeAt() && x.charCodeAt() <= 90) ||
        (97 <= x.charCodeAt() && x.charCodeAt() <= 121)
    )
    .join("")
    .toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return "NO";
    }
  }
  return answer;
}

function solution(s) {
  let answer = "YES";
  // /[^a-z]/g  소문자 a-z가 아닌 것(^)을 모두(g: global) 찾아라
  let s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}
