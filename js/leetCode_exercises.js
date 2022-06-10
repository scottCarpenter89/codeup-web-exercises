/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // the array of numbers needs to add up to the target therefore,
    // they cannot be larger than the target
    // so if the number at the index is greater than the target it is pushed
    let numsLessThanTarget = nums.filter(num => num < target);


    let resultArray = [];

    for (let i = 0; i < numsLessThanTarget.length; i++) {
        let num1 = numsLessThanTarget[i];
        console.log(`Outer loop index ${num1}`);
        for (let j = 1; j < numsLessThanTarget.length; j++) {
            console.log(`Inner loop index ${j}`);
            let sum = num1 + numsLessThanTarget[j];
            console.log(`Iteration sum: ${sum}`);
            if (sum === target) {
                resultArray.push(numsLessThanTarget.indexOf(i), numsLessThanTarget.indexOf(j));
                break;
            }
        }
    }
    return resultArray;
};

console.log(twoSum([1, 11, 6, 4, 9], 10));