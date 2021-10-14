let num = 11;

function solution(num) {
  function DFS(L) {
    //L은 Tree의 Level을 의미
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      console.log(L % 2);
    }
  }
  DFS(num);
}
