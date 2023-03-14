/*
Array Of Products

Write a function that takes a non-empty array of integers and return an array of 
the same length, where each element in the output array is equal  to the product
of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number in the input array other than input[i];

input [5,1,4,2]

Sample Output
[8, 40, 10,20]

// 8 is equal  to 1 * 4 * 2
// 40 is equal to 5 * 4 * 2
// 10 is equal to 5 * 1 * 2
// 20 is equal to 5 * 1 * 4
*/



function arrayOfProducts(array){
    /*Solution 1: Brute-force Approach(this wont pass on leetcode  0(n) is required and this is o(n^2) complexity);
    
    https://leetcode.com/problems/product-of-array-except-self/
    */

//   const output = [];
//   for(let i =0; i < array.length; i++){
//     let product = 1;
//     for(let j =0; j < array.length; j++){
//       if(i !== j){
//         product *= array[j];
//       }
//     }
//     output.push(product)
//   }
//  return output

// Solution 2
let left = new Array(array.length).fill(0);
left[0] = 1;

let right = new Array(array.length).fill(0);
right[array.length - 1] = 1;

for(let i = 1; i < array.length; i++){
    left[i] = left[i -1] * array[i -1];
}

for(let j = array.length-2; j >=0; j--){
  right[j] = right[j + 1] * array[j + 1];
}

for(let i = 0; i < array.length; i++){
    array[i] = left[i] * right[i]
}
 
return array

}

console.log(arrayOfProducts([5,1,4,2]))
console.log(arrayOfProducts([9,3,2,1,9,5,3,2])) // [1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290]

console.log(arrayOfProducts([4,4]))// [4,4]
