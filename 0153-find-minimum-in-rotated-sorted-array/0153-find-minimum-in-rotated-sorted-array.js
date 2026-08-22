var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        const mid = Math.floor((left + right) / 2);

        // Minimum must be to the right of mid
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }

        // Minimum is at mid or to the left
        else {
            right = mid;
        }
    }

    return nums[left];
};