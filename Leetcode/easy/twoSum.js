/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
You can return the answer in any order.
*/

// 2021-02-08
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      let otherNum = (target - nums[i]);
      if (nums.indexOf(otherNum) !== -1 && nums.indexOf(otherNum) !== i) {
        return [i, nums.indexOf(otherNum)];
      }
  }
};

//2021-08-09
let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      let pairNum = target - nums[i];
      let pairNumIndex = nums.indexOf(pairNum) != i ? nums.indexOf(pairNum) : -1;
      
      if (pairNumIndex > -1) return [i, pairNumIndex];
  }
};