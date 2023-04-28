// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
// 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.

//행: 학생 4명의 시험 등수별로 정렬한 결과
//열: 각각의 테스트 시행

let tests = [
  [3, 4, 1, 2], // 3번 학생이 1등, 4번 학생이 2등했다고 이해해야 한다.
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

function solution(tests) {
  let answer = 0;
  let testCnt = tests.length;
  let studentCnt = tests[0].length;

  for (let mentor = 1; mentor <= studentCnt; mentor++) {
    for (let mentee = 1; mentee <= studentCnt; mentee++) {
      let cnt = 0;
      for (let dx = 0; dx < testCnt; dx++) {
        let mentorRank,
          menteeRank = 0;
        for (let dy = 0; dy < studentCnt; dy++) {
          if (tests[dx][dy] === mentor) mentorRank = dy;
          if (tests[dx][dy] === mentee) menteeRank = dy;
        }
        if (mentorRank < menteeRank) cnt++;
      }
      if (cnt === testCnt) answer++;
    }
  }
  return answer;
}
