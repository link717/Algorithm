/*
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.
예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
*/

//시간복잡도는 L만큼 처리해야하는 개수가 2씩 증가하므로 O(2^n)이다.
function solution(numbers, target) {
  let answer = 0;

  function DFS(L, sum) {
    if (L === numbers.length) {
      if (sum === target) answer++;
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }
  DFS(0, 0);
  return answer;
}
