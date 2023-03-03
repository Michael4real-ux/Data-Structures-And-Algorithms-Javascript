/**
 Array Subset
Instructions
Write a function that accepts two parameters, both arrays. The arrays can have both strings and numbers. Return true if the second array is a subset of the first.

In other words, determine if every item in the 2nd array is also present somewhere in the 1st array.

Input: Array of Numbers & Strings, Array of Numbers & Strings

Output: Boolean

Examples
arraySubset([2, 1, 3], [1, 2, 3]); // -> true
arraySubset([2, 1, 1, 3], [1, 2, 3]); // -> true
arraySubset([1, 2], [1, 2, 3]); // -> false
arraySubset([1, 2, 3], [1, 2, 2, 3]); // -> false

 */

function arraySubset(arr, sub) {
    // Your code here
   if(sub.length > arr.length){
       return false;
   }
   for(let char of sub){
       let arrIndex = arr.indexOf(char)
       if(arrIndex === -1){
        return false;
       }
       delete arr[arrIndex];
   }
   return true;
}
 console.log(arraySubset([1, 2, 3], [1, 2, 3]))
 console.log(arraySubset([1, 2, 3], [1, 2]));
console.log(arraySubset([1, 2], [1, 2, 3]));
console.log(arraySubset([1, 2, 3], [1, 2, 2, 3]));

// console.log(arraySubset("abc", "abc"))
// console.log(arraySubset("abc", "ab"));
// console.log(arraySubset("ab", "abc"));
// console.log(arraySubset("abc", "abbc"));