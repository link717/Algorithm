let n = 3;

function solution(n) {
  let answer = [];
  let ch = Array.from({length: n + 1}, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      //i가 1인 이유는 아래에서 탐색할 때 임시로 저장한 ch에 값이 저장되는 위치가 1,2,3이기 때문이다.
      for (let i = 1; i <= n; i++) {
        if(ch[i] === 1) tmp += (i + " ");
      }
      //trim() 앞, 뒤의 공백을 제거
      //공집합을 제외한 조합만 answer에 push
      if (tmp.length > 0) answer.push(tmp.trim());
    } 
    else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  } 
  DFS(1);
  return answer;
}
