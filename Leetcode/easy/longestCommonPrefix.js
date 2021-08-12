/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/



var longestCommonPrefix = function(strs) {
  if (!strs[0]) {
      return ""
  } else {
      const compareStr = strs[0];
      let answer = "";
      for (let i = 1; i <= compareStr.length; i++) {
          let prefix = compareStr.substr(0, i);
          let isValid = strs.every(el => el.startsWith(prefix));
          if (isValid) {
              answer = prefix;
          } else {
              break;
          }
      }
      return answer;
  }
};