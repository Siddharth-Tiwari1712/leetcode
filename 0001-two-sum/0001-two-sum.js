function twoSum(nums, target) {
  const seen = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
  return [];
}

// Brute Force 
// var twoSum = function(nums, target) {

//     for(let i = 0; i < nums.length; i++){

//         for(let j = i + 1; j < nums.length; j++){

//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }

//     return [-1, -1];
// };