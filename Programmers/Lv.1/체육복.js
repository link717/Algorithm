/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
  let answer = 0;
  let diffLost = lost.filter((el) => !reserve.includes(el)).sort((a, b) => a - b);
  let diffReserve = reserve.filter((el) => !lost.includes(el)).sort((a, b) => a - b);

  answer += n - diffLost.length;

  for (let num of diffReserve) {
    for (let i = 0; i < diffLost.length; i++) {
      if (diffLost[i] === num - 1 || diffLost[i] === num + 1) {
        diffLost.shift();
        answer++;
      }
    }
  }
  return answer;
}

function solution(n, lost, reserve) {
  let answer = 0;

  // 여벌 체육복이 있는 학생 중 체육복을 읽어버린 학생은 lost, reserve에서 둘 다 제외
  const getFilteredStolenStudents = (students, compare) => {
    return students.filter((student) => !compare.includes(student)).sort((a, b) => a - b);
  };

  const filteredLost = getFilteredStolenStudents(lost, reserve);
  const filteredReserve = getFilteredStolenStudents(reserve, lost);

  // lost, reserve에 해당하지 않는 학생은 수업을 들을 수 있음
  answer += n - filteredLost.length;

  filteredLost.forEach((lostStudent) => {
    for (let i = 0; i < filteredReserve.length; i++) {
      if (filteredReserve[i] - 1 <= lostStudent && filteredReserve[i] + 1 >= lostStudent) {
        answer++;
        filteredReserve.shift();
      }
    }
  });
  return answer;
}
