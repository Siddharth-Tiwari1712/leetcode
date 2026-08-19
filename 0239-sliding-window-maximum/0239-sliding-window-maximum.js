function maxSlidingWindow(nums, k) {

    const result = [];

    // Store indexes
    // Values will be in decreasing order
    const deque = [];

    for (let i = 0; i < nums.length; i++) {

        // --------------------------------
        // 1. Remove elements outside window
        // --------------------------------

        if (
            deque.length > 0 &&
            deque[0] <= i - k
        ) {
            deque.shift();
        }


        // --------------------------------
        // 2. Remove smaller elements
        // --------------------------------

        while (
            deque.length > 0 &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }


        // --------------------------------
        // 3. Add current index
        // --------------------------------

        deque.push(i);


        // --------------------------------
        // 4. Window is complete
        // --------------------------------

        if (i >= k - 1) {

            // Front contains the maximum
            result.push(nums[deque[0]]);
        }
    }

    return result;
}


// function maxSlidingWindow(nums, k) {

//     const result = [];

//     for (let i = 0; i <= nums.length - k; i++) {

//         let max = nums[i];

//         // Check all k elements in this window
//         for (let j = i; j < i + k; j++) {

//             max = Math.max(max, nums[j]);
//         }

//         result.push(max);
//     }

//     return result;
// }