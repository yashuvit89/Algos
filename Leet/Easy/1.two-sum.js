/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (39.24%)
 * Total Accepted:    1.2M
 * Total Submissions: 3.1M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force
/* var twoSum = function(nums, target) {
  var i = 0;

  for (i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}; */

var twoSum = function(nums, target) {
  let hashMap = nums.reduce((acc, currValue, i) => {
    acc[currValue] = i;
    return acc;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let value = hashMap[diff];
    if (value && value !== i) {
      return [i, hashMap[diff]];
    }
  }
};
