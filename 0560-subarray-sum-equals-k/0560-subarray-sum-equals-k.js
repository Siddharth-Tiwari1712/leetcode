// Key idea: Prefix Sum

// Suppose:

// nums = [1, 2, 3]

// Prefix sums:

// 1
// 3
// 6

// If current sum is:

// currentSum

// We need an earlier prefix:

// currentSum - k

// Because:

// currentSum - previousSum = k
// Code
var subarraySum = function(nums, k) {

    const map = new Map();

    // Sum 0 has occurred once
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of nums) {

        sum += num;

        // Have we seen a prefix sum that makes
        // the current subarray equal to k?
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // Store how many times this prefix sum occurred
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};
// Pattern
// Subarray + target sum
//         ↓
// Prefix Sum + HashMap