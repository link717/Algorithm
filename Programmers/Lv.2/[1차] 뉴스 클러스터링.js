/*
자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다.
두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때, 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로,
집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다.
집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니따로 J(A, B) = 1로 정의한다.
자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다.
다중집합 A는 원소 1을 3개 가지고 있고, 다중집합 B는 원소 1을 5개 가지고 있다고 하자.
이 다중집합의 교집합 A ∩ B는 원소 1을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 1을 max(3, 5)인 5개 가지게 된다.
다중집합 A = {1, 1, 2, 2, 3}, 다중집합 B = {1, 2, 2, 4, 5}라고 하면, 교집합 A ∩ B = {1, 2, 2},
합집합 A ∪ B = {1, 1, 2, 2, 3, 4, 5}가 되므로, 자카드 유사도 J(A, B) = 3/7, 약 0.42가 된다.

입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고,
기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다.
예를 들어 ab+가 입력으로 들어오면, ab만 다중집합의 원소로 삼고, b+는 버린다.
다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. AB와 Ab, ab는 같은 원소로 취급한다.

입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 유사도 값은 0에서 1 사이의 실수이므로,
이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.
*/


const makeSet = (str) => {
  let setLists = [];
  let transStr = str.toLowerCase();
  for (let i = 0; i < transStr.length - 1; i++) {
    let doubleStr = transStr.slice(i, i + 2);
    let isValid = [...doubleStr].every(el => el >= "a" && el <= "z" );
    if (isValid) setLists.push(doubleStr);
  }
  return setLists.sort();
} 

const solution = (str1, str2) => {
  let set1 = makeSet(str1);
  let set2 = makeSet(str2);
  let interSectionCount = 0;
  let combinedSetCount = 0;
  
  if (!set1.length && !set2.length) {
    return 65536;
  } else {
    for (let j of set1) {
      if (set2.includes(j)) {
        set2.splice(set2.indexOf(j), 1);
        interSectionCount++;
      } 
    }
    combinedSetCount = set1.length + set2.length;
  }
 return Math.floor(interSectionCount/combinedSetCount*65536);
}