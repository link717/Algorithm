let n = 2;
let arr = [3, 6, 9];

function solution(n, arr) {
  let answer = [];
  let tmp = Array.from({ length: n });
  let ch = Array.from({ length: arr.length }, () => 0);
  function DFS(L) {
    if (L === n) {
      //slice(): tmp를 복사해서 새로운 배열을 만듦
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 1) continue;
        //중복을 허용하지 않은 순열이므로 ch 배열을 생성하여 이미 뽑은 숫자는 사용하지 않도록 확인해준다.
        else {
          //노드를 탐색할 때 뽑은 이력을 추가한다.
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          //위의 노드로 넘어왔을 경우에 뽑았던 이력을 삭제한다.
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}
