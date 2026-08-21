function search(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {

            // Target is on right side
            left = mid + 1;

        } else {

            // Target is on left side
            right = mid - 1;
        }
    }

    return -1;
}