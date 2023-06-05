function findMinimumElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < nums[right]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return nums[left];
  }
  const nums = [3, 4, 5, 1, 2];
  console.log(`
  The Minimum element of this array [${nums}] is : ${findMinimumElement(nums)}.
  `);