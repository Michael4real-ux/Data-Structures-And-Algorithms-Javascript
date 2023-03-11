/*Array Packing: Sum and Product

Task
Given an array of 2k integers (for some integer k, which will be betwen 0 and 5 inclusive), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Specification
packArray(arr)
Parameters
arr: Array<number> - An array of integers to be packed

Return Value
number - The final product

Constraints
arr.length == 2k

0 ≤ k ≤ 5

-9 ≤ arr[i] ≤ 99

Example
For arr = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

*/

/*  Solution 1 : Brute force Approach. 
  This solution will only work for the first test case the second is suppose to give 64, but for solution 1 it will give you 16. The solution will work on (Qualified also own by codewars) but will fail on code wars, try it on codewars.
  https://www.codewars.com/kata/588854201361435f5e0000bd/train/javascript
*/

// function packArray(integers) {
//   let firstResult = [];
//   let secondResult = [];
//   if (integers.length === 1) {
//     return integers[0];
//   }

//   for (let i = 1; i < integers.length; i += 2) {
//     firstResult.push(integers[i] + integers[i - 1]);
//   }

//   for(let i = 1; i < firstResult.length; i+=2){
//     secondResult.push(firstResult[i] * firstResult[i-1])
//   }
 
//   return secondResult.reduce((acc, elem)=> acc + elem ,0)
// }


// Solution 2 - Recursion(it is possible to add a default parameter even if it is not given take note and also create helper fuctions)

//helper function for sum
function sum(integers){
 let newArr = [];
 for(let i = 1; i < integers.length; i+=2){
  newArr.push(integers[i] + integers[i-1])
 }
 return newArr;
}

//console.log(sum([1, 2, 3, 4, 5, 6, 7, 8]));

//helper function for product
function product(integers){
    let newArr = []
    for(let i =1; i < integers.length; i+=2){
       newArr.push(integers[i] * integers[i-1])
    }
    return  newArr
}

// console.log(product([3, 7, 11, 15]));

//Main function
function packArray(integers, isTrue = true) {
  if(integers.length === 1){
    return integers[0]
  }else{
    if(isTrue){
        return packArray(sum(integers), false) // recursion
    }else{
        return packArray(product(integers), true) //recursion
    }
  }
}

console.log(packArray([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(packArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 64
