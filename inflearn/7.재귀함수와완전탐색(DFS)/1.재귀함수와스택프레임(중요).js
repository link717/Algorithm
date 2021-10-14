//재귀함수가 실행되면 stack 자료구조에 함수의 기본 정보가 저장된다.
//기본 정보가 저장되는 공간을 Stack Frame이라 하며 해당 위치에는 함수의 기본 정보인 매개변수, 지역변수, 복귀주소 등이 저장된다.

let num = 3;

function solution(num) {
  //DFS: Depth First Search
  function DFS(L) {
    //L은 Tree의 Level을 의미
    if (L === 0) return;
    else {
      //Stack Frame의 복귀 주소 정보와 Stack 자료 구조의 특정으로 인해
      //함수 실행문 이후의 console.log는 바로 실행되지 않는다.
      //Stack 자료구조의 FILO 특성으로 인해 맨 마지막에 stack에 들어간 DFS(1)이 실행되는데
      // 이때 복귀 주소가 함수 실행 위치로 그 이후의 코드가 순차적으로 실행된다.
      //그래서 1,2,3이 순서대로 호출되는 것이다.
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(num);
}
