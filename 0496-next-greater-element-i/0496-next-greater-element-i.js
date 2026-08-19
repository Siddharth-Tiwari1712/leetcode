function nextGreaterElement(nums1, nums2) {

  // Store the index of every number in nums2
  const position = new Map();

  for (let i = 0; i < nums2.length; i++) {
    position.set(nums2[i], i);
  }

  const result = [];

  // Check every number in nums1
  for (let num of nums1) {

    // Find where num exists in nums2
    const startIndex = position.get(num);

    let greater = -1;

    // Look to the right of num
    for (let j = startIndex + 1; j < nums2.length; j++) {

      // Found the first greater element
      if (nums2[j] > num) {
        greater = nums2[j];
        break;
      }
    }

    result.push(greater);
  }

  return result;
}