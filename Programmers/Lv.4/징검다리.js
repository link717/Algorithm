/*
출발지점부터 distance만큼 떨어진 곳에 도착지점이 있습니다. 그리고 그사이에는 바위들이 놓여있습니다.바위 중 몇 개를 제거하려고 합니다.
예를 들어, 도착지점이 25만큼 떨어져 있고, 바위가 [2, 14, 11, 21, 17] 지점에 놓여있을 때 바위 2개를 제거하면 출발지점, 도착지점, 바위 간의 거리가 아래와 같습니다.

mid가 바위 사이간의 최소 거리라고 했을 때, 해당 거리 기준으로 놓을 수 있는 바위의 개수를 반환한다.
바위 사이의 거리가 필요하므로 처음 시작점은 0이고 바위를 놓으면 해당 위치를 시작점으로 바꿔서 계산한다.
*/
function count(mid, rocks) {
  let cnt = 0;
  let startPoint = 0;
  for (let rock of rocks) {
    if (rock - startPoint >= mid) {
      cnt++;
      startPoint = rock;
    }
  }
  return cnt;
}

function solution(distance, rocks, n) {
  let answer = 0;
  let lt = 1,
    rt = distance;
  rocks.sort((a, b) => a - b);
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    //문제에서 요구하는 바위의 개수보다 많거나 같을 경우, 정답이 될 수 있다.
    //우리는 최소 거리 중 최대를 찾아야하므로 lt를 변경하며 탐색을 반복한다.
    if (count(mid, rocks) >= rocks.length - n) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
