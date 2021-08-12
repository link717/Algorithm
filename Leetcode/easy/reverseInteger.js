/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/


var reverse = function(x) {
  let answer = "";
  let mark = x >= 0 ? 1 : -1
  while(x !== 0) {
      let num = (x % 10);
      answer += Math.abs(num);
      x = parseInt(x / 10);
  }
  answer *= mark;
  
  if (answer < Math.pow(-2, 31) || answer > (Math.pow(2, 31) - 1)) {
      return 0
  } else return answer;

};