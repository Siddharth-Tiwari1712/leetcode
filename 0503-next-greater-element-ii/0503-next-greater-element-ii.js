function nextGreaterElements(nums) {

  const n = nums.length;

  // Initially assume every answer is -1
  const result = new Array(n).fill(-1);

  // Stack will store indexes
  const stack = [];

  // We go through the array twice
  // This allows us to handle the circular nature
  for (let i = 0; i < 2 * n; i++) {

    // % n makes the array circular
    // Example:
    // i = 0 -> index 0
    // i = 1 -> index 1
    // i = 2 -> index 2
    // i = 3 -> index 0 again
    const currentIndex = i % n;
    const current = nums[currentIndex];

    // If current number is greater than
    // the number waiting in the stack,
    // we have found its next greater element
    while (
      stack.length > 0 &&
      current > nums[stack[stack.length - 1]]
    ) {

      const index = stack.pop();

      // Current number is the answer for this index
      result[index] = current;
    }

    // Only push indexes during the FIRST pass
    if (i < n) {
      stack.push(currentIndex);
    }
  }

  return result;
}

// First iteration:

// stack = []
// current = 1

// stack.length > 0
// 0 > 0 → false

// Don't check the second condition.

// push(0)

// stack = [0]
//   return result;
// }

// Second iteration:

// stack = [0]
// current = 3

// stack.length > 0
// 1 > 0 → true

// Now check:

// current > nums[stack[0]]

// 3 > nums[0]

// 3 > 1 → true

// Pop 0
// Answer for nums[0] = 3