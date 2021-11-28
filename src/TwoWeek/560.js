/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function (nums, k) {
  let preSum = 0;
  let count = 0;
  let hashMap = {0: 1};
  for (let i = 0; i < nums.length; i++) {
      preSum += nums[i];
      if (hashMap[preSum - k]) {
          count += hashMap[preSum - k];
      }
      if (hashMap[preSum]) {
          hashMap[preSum] += 1;
      } else {
          hashMap[preSum] = 1;
      }
  }
  return count;
};