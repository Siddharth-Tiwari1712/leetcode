function removeDuplicates(nums) {
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Look at:

// nums[i] !== nums[k - 2]

// We ask:

// "Is the current number different from the number two positions behind?"

// If yes, we can keep it.