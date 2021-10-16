//최상위의 부모 노드는 루트 노드라고 부른다. 각각의 노드와 연결된 선들은 간선 혹은 엣지라고 부른다.
//이진 트리의 기본 구조는 부모 노드 + 왼쪽 자식 노드 + 오른쪽 자식 노드이다.
//위의 자료구조상의 노드 사이에는 규칙이 있는데 부모 노드 값 * 2 = 왼쪽 자식 노드, 부모 노드 값 * 2 + 1 = 오른쪽 자식 노드의 값을 가리킨다.
//보통 노드의 탐색은 왼쪽을 기준으로 한다.

//아래 순회 방식에서 전,중,후의 기존은 모두 부모를 기준으로 한다.
//부모 하위의 자식노드가 부모 노드이기도 하다면 루트 노드의 자식 노드는 왼쪽 혹은 오른쪽 자식 노드들을 모두 포함한 덩어리로 생각하자.
//전위순회: 부모 -> 왼쪽 -> 오른쪽
//중위순회: 왼쪽 -> 부모 -> 오른쪽
//후위순회: 왼쪽 -> 오른쪽 -> 부모

let vertex = 1; //정점을 의미함
function preorder(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += String(v); //부모를 먼저 탐색하고 왼쪽, 오른쪽 자식순으로 출력한다.
      DFS(v * 2); //왼쪽자식 호출
      DFS(v * 2 + 1); //오른쪽 자식 호출
    }
  }
  DFS(v);
  return answer;
}

preorder(vertex);

function inorder(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); //왼쪽자식 호출
      answer += String(v); //왼쪽 자식을 먼저 탐색하고 부모 오른쪽 자식순으로 출력한다.
      DFS(v * 2 + 1); //오른쪽 자식 호출
    }
  }
  DFS(v);
  return answer;
}

inorder(vertex);

function postorder(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); //왼쪽자식 호출
      DFS(v * 2 + 1); //오른쪽 자식 호출
      answer += String(v); //왼쪽 오른쪽을 다 탐색하고 부모를 출력한다.
    }
  }
  DFS(v);
  return answer;
}

postorder(vertex);
