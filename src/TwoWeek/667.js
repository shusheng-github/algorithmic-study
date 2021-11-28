/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function (nums) {
  let hashMap = {};
  for (let [i, num] of Object.entries(nums)) {
      if (num in hashMap) {
          hashMap[num][0]++;
          hashMap[num][2] = i;
      } else {
          hashMap[num] = [1, i, i];
      }
  }
  let maxNum = 0;
  let minLen = 0;
  for (let [num, left, right] of Object.values(hashMap)) {
      if (maxNum < num) {
          maxNum = num;
          minLen = right - left + 1;
      } else if ( maxNum === num ) {
          if ( minLen > (right - left + 1) ) {
              minLen = right - left + 1;
          }
      }
  }
  return minLen;
};