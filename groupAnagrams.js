// Question
// 다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

const groupAnagrams = strs => {
  let result = {};
  for(let str of strs) {
    let sortStr = str.split('').sort().join('');
    if (!result[sortStr]) {
      result[sortStr] = Array(str)
    } else {
      result[sortStr].push(str);
    }
  }
  return Object.values(result);
}


// 모범 답안
const groupAnagramsAnswer = strs => {
  const map = {};
  
  for (let str of strs) {
      const key = [...str].sort().join('');
      if (!map[key]) {
          map[key] = [];
      }
      map[key].push(str);       // 기존의 key 값에 할당된 값이 없을 경우, if문을 통해 빈 Array를 만들고 push하는 형태
  }
  return Object.values(map);
};
