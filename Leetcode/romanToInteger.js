// Question Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.\
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
  const symbols = {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
  }
  let answer = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let isCompare = symbols[s[i]] >= symbols[s[i + 1]];
    isCompare ? answer += symbols[s[i]] : answer -= symbols[s[i]];
  }
  return answer + symbols[s.charAt(s.length -1)];
};