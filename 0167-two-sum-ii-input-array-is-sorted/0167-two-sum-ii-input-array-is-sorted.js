/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        let left = 0;
   let right = numbers.length-1;
for(i=0; i<numbers.length; i++) {
    if((numbers[left]+numbers[right]==target)){
        return [left+1,right+1];
    }

    else if(numbers[left]+numbers[right]<target) left++;
    else right--
    // for(j=i+1; j<arr1.length; j++){
    //     console.log("Print numbers", arr1[i], arr1[j]);
    //     if(arr1[i]+arr1[j]==18){
    //         console.log( 'Output'+ [i,j])
    //     }
    // }


}
};