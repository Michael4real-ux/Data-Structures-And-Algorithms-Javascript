/**
 Create a function that determines whether all characters in a string are unique or not. Make it case-sensitive, meaning a string with both 'a' and 'A' could pass the test.

Input: String

Output: Boolean

Examples
isUnique('abcdef'); // -> true
isUnique('89%df#$^a&x'); // -> true
isUnique('abcAdef'); // -> true
isUnique('abcaef'); // -> false

 */

// // function isUnique(str){
// //  str.match(/[a-z]/gi);
// //  let hash = {};
// //  for(let char of str){
// //     if(!hash[char]){
// //         hash[char] = 1
// //     }else{
// //         hash[char]++
// //     }
// //  }

// //  for(let key of Object.keys(hash)){
// //     if(hash[key] !==1){
// //         return false
// //     }
// //     return true
// //  }
// // }

// // Solution 2
// // function isUnique(str){
// //    for(let char of str){
// //     if(str.indexOf(char) !== str.lastIndexOf(char)){
// //         return false
// //     }
// //     return true
// //    }
// // }

// // Solution 3
// // function isUnique(str){
// //     const char = str.split("").sort();

// //     for(let i = 0; i < char.length; i++){
// //         if(char[i] === char[i - 1]){
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // Solution 4
// // function isUnique(str){
// //  let hash = {};

// //  for(let i = 0; i < str.length; i++) {
// //     let char = str[i];
// //     if(hash[char]){
// //         return false;
// //     }
// //     hash[char] = true;
// //  }
// //  return true;
// // }

function isUnique(str){
   return new Set(str).size === str.length;
}



console.log(isUnique("abcdef"));
console.log(isUnique("abcdef")); // -> true
console.log(isUnique("89%df#$^a&x")); // -> true
console.log(isUnique("abcAdef")); // -> true
console.log(isUnique("abcaef")); // -> false
