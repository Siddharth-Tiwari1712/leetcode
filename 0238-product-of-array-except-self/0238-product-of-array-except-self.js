function productExceptSelf(nums) {
  let result = new Array(nums.length);

  let prefix = 1;

  // Product of everything to the LEFT
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  let suffix = 1;

  // Product of everything to the RIGHT
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * suffix;
    suffix = suffix * nums[i];
  }

  return result;
}

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