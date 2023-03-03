/**
 There are 3 types of possible string mutations: character insertion, character deletion, or character substitution. Write a function that accepts 2 strings and returns true if the strings are the same except for 0 or 1 mutations. Return false otherwise.

Inputs: String, String

Output: Boolean

Examples:
Single Deletion:

'abcd', 'abc'
'abcd', 'acd'
Single Insertion:

'abcd', 'abcde'
'abcd', 'abXcd'
Single Substitution:

'abcd', 'abXd'
'abcd', 'Xbcd

 */

// function singleMutation(str1, str2) {
//   if (Math.abs(str1.length - str2.length) > 1) {
//     return false;
//   }
//   let mutation = 0;
//   for (let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
//     if (str1[i] !== str2[j]) {
//       mutation++;
//       if (mutation > 1) {
//         return false;
//       }
//       if (str1.length > str2.length) {
//         j--;
//       } else if (str2.length > str1.length) {
//         i--;
//       }
//     }

//   }

//   return true;
// }

// console.log(singleMutation("abcd", "abXX")); //-false;
// console.log(singleMutation("abcd", "aXcX")); //-false;
// console.log(singleMutation("abcd", "aXc")); //-false;
// console.log(singleMutation("abcd", "aXcde")); //-false;
// console.log(singleMutation("abcd", "abc")); //-true;
//  console.log(singleMutation("abcd", "abXcd")); //-true;
// console.log(singleMutation("abcd", "abXd")); //-true;
// console.log(singleMutation("abcd", "ab")); //-false;
// console.log(singleMutation("abcd", "abcdef")); //-false;

