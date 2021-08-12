/*
LZW 압축은 다음 과정을 거친다.

길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
단계 2로 돌아간다.

예를 들어 입력으로 KAKAO가 들어온다고 하자.

현재 사전에는 KAKAO의 첫 글자 K는 등록되어 있으나, 두 번째 글자까지인 KA는 없으므로, 
첫 글자 K에 해당하는 색인 번호 11을 출력하고, 다음 글자인 A를 포함한 KA를 사전에 27 번째로 등록한다.
두 번째 글자 A는 사전에 있으나, 세 번째 글자까지인 AK는 사전에 없으므로, A의 색인 번호 1을 출력하고, AK를 사전에 28 번째로 등록한다.
세 번째 글자에서 시작하는 KA가 사전에 있으므로, KA에 해당하는 색인 번호 27을 출력하고, 다음 글자 O를 포함한 KAO를 29 번째로 등록한다.
마지막으로 처리되지 않은 글자 O에 해당하는 색인 번호 15를 출력한다.
*/

const solution = (msg) => {
  // 사전 생성
  let dictionary = {};
  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65+i)] = i + 1 ; 
  }
  let maxIdx = 26;
  
  // 색인번호 검색
  let stack = [];
  let currentIdx = 0;

  while (currentIdx < msg.length) {
    let currentStr = "";

    for (let j = currentIdx; j < msg.length; j++) {
      let w = msg.substring(currentIdx, j + 1);
      
      if(dictionary[w]) {
        currentStr = w;
      } else {
        dictionary[w] = ++maxIdx
        break;
      }
    }
    stack.push(dictionary[currentStr]);
    currentIdx += currentStr.length;
  }
  return stack;
}