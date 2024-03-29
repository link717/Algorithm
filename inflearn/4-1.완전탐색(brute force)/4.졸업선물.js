// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.

let budget = 28;
let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function solution(budget, arr) {
  let answer = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const sortedArr = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    let sum = budget,
      presentCnt = 0;
    sortedArr[i][0] = sortedArr[i][0] / 2;
    for (let j = 0; j < n; j++) {
      const [productPrice, shippingFee] = sortedArr[j];
      const totalPrice = productPrice + shippingFee;
      if (sum >= totalPrice) {
        sum -= totalPrice;
        presentCnt++;
      } else {
        break;
      }
    }
    answer = Math.max(answer, presentCnt);
  }
  return answer;
}
