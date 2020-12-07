// Question
// prices는 배열이며, 각 요소는 매일의 주식 가격입니다.
// 만약 한 번만 거래할 수 있다면 = 사고 팔 수 있다면,
// 제일 큰 이익은 얼마일까요?

const maxProfit = prices => {
  let resutlArr = [];
  for(let i = 0 ; i < prices.length ; i++) {
    for(let j = i; j <prices.length; j++) {
      if(prices[i] < prices[j]) {
        resutlArr.push(prices[j] - prices[i]);
      }
    }
  }
  return resutlArr.length ? Math.max(...resutlArr) : 0;
};