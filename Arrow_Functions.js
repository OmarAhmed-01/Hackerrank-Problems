//Complete the function in the editor. It has one parameter: an array, nums.
//It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

function modifyArray(nums){
    var modifiedArray = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            modifiedArray.push(nums[i] * 2);
        }
        else{
            modifiedArray.push(nums[i] * 3);
        }
    }
    return modifiedArray;
}