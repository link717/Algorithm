/*
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면
다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
*/

function solution(clothes) {
  let clothesHash = {};

  for (let clothe of clothes) {
    let clotheType = clothe[1];
    if (clothesHash[clotheType] == null) {
      clothesHash[clotheType] = 1;
    } else {
      clothesHash[clotheType]++;
    }
  }

  return Object.values(clothesHash).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

// 2023-03-16
function solution(clothes) {
  const myClothesMap = new Map();
  clothes.forEach((el) => {
    const [name, type] = el;
    myClothesMap[type] ? myClothesMap[type]++ : (myClothesMap[type] = 1);
  });
  return Object.values(myClothesMap).reduce((prev, cur) => prev * ++cur, 1) - 1;
}
