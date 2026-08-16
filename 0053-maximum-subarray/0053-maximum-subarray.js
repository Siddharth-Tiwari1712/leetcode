var maxSubArray = function(nums) {

    let maxSum = -Infinity;
    let currSum = 0;

    for(let num of nums){
        currSum += num;
        maxSum = Math.max(maxSum, currSum);

        if(currSum < 0) currSum = 0;
    }

    return maxSum;
};


// Brute Force
// function productExceptSelf(nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;

//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product = product * nums[j];
//       }
//     }

//     result.push(product);
//   }

//   return result;
// }