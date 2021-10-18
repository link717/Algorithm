let n = 5;
let r = 3;

//nCr = (n - 1)C(r - 1) + (n - 1)Cr
//하나의 원소 기준으로 경우의 수를 구분하면 1)내가 포함될 경우, 2)내가 포함되지 않을 경우로 모든 경우의 수를 구할 수 있다.
//1)의 경우에는 나를 빼고(n - 1) (r - 1)개를 뽑을 경우의 수이고 2)의 경우는 나를 빼고(n - 1) r개를 뽑을 경우의 수이다.

function solution(n, r) {
  let answer = 0;
  //메모이제이션을 위한 matrix 생성 nCr => matrix[n][r] 위치에 값을 저장하기 위한 목적
  //조건에서 가질 수 있는 자연수는 3 <= n <= 33, 0 <= r <= n 이므로 n + 1을 기준으로 matrix를 초기 설정한다. (저장될 위치가 idx 순서가 아닌 숫자 기준임을 주의하자!)
  let matrix = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  function DFS(n, r) {
    //메모이제이션으로 이미 반환된 값이 있는지 확인한 뒤 이후의 코드를 실행한다.
    if (matrix[n][r] > 0) return matrix[n][r];
    if (r === 0 || n === r) return 1;
    //return문에서 matrix[n][r]을 반환할 때 메모이제이션 로직도 실행이 된다.
    else return (matrix[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
