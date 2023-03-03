/**
 Remove Dupes
Instructions
Write a function that takes in a string and returns a new string. The new string should be the same as the original with every duplicate character removed.

Input: String

Output: String

Examples
'abcd' -> 'abcd'
'aabbccdd' -> 'abcd'
'abcddbca' -> 'abcd'
'abababcdcdcd' -> 'abcd'
 */
  // Solution 1
  
// function removeDupes(str) {
//     const hash = {};
//     const arrStore = [];
//     for(let i =0; i < str.length; i++){
//         let char = str[i];
//        if(!hash[char]){
//          hash[char] = true
//          arrStore.push(char)
//        }
//     }
//     return arrStore.join("")
// }

 // Solution 2

function removeDupes(str) {
 const uniqueChar = new Set(str);
 return Array.from(uniqueChar).join("")
}
console.log(removeDupes('abcd'))
console.log(removeDupes('aabbccdd'))
console.log(removeDupes('abcddbca'))
console.log(removeDupes('abababcdcdcd'))