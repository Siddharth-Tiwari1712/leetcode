function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
}

// Why start from the end?

// Because nums1 has empty spaces at the end:

// [1,2,3,0,0,0]
//        ↑     ↑
//       real  empty

// If we start from the beginning, we could overwrite values we still need.

// Instead:

// i → last real element in nums1
// j → last element in nums2
// k → last position in nums1
// i = 2 → 3
// j = 2 → 6
// k = 5

// Compare:

// 3 vs 6

// 6 is bigger:

// nums1[5] = 6

// Then:

// i = 2
// j = 1
// k = 4

// Compare:

// 3 vs 5

// Put 5: