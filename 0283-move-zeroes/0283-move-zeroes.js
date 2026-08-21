// We use:

// i = scans the array
// j = position where next non-zero goes
// Solution
function moveZeroes(nums) {


    let j = 0;


    for (let i = 0; i < nums.length; i++) {


        // If current number is not zero
        if (nums[i] !== 0) {


            // Put it at j
            [nums[i], nums[j]] = [nums[j], nums[i]];


            j++;
        }
    }


    return nums;
}