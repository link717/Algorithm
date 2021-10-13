let songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let dvds = 3;

//결정 알고리즘에서는 해당 조건이 true인지 false인지 구분하는 것이 가장 중요하다.
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (capacity < sum + x) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(songs, dvds) {
  //들어온 입력 순서대로 dvd에 담아야 한다.
  //노래를 쪼개서 저장할 수 없으므로 최소한 입력된 노래 중 가장 긴 노래는 한 번에 담을 수 있어야 한다.
  let answer = Number.MAX_SAFE_INTEGER;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= dvds) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
