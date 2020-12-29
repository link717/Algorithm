//Question
// 주어진 숫자 배열에서, 0을 배열의 마지막쪽으로 이동시켜주세요.
// 원래 있던 숫자의 순서는 바꾸지 말아주세요.
// * 새로운 배열을 생성해서는 안 됩니다.

const moveZeroes = nums => {
  const zeroCounts = nums.filter((num) => num === 0)
  return nums.filter((num) => num !== 0).concat(zeroCounts);
}