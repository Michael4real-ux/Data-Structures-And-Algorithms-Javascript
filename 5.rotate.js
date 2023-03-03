/**
 String Rotation
Instructions
Create a function that takes in 2 strings as parameters.

Return true if the strings are rotations of each other. Otherwise, return false.

Input: String, String

Output: Boolean

Examples#
The following sets of strings are rotations:

"rotation"  "tationro" "tionrota"

"javascript"  "scriptjava"  "iptjavascr"

"RotateMe"  "teMeRota"  "eRotateM"
 */

function stringRotation(str1,str2){
    // Solution 1

//   if(str1.length !== str2.length){
//     return false;
//   }

//   for(let i =0; i < str1.length; i++){
//     let rotation = str1.slice(i, str1.length) + str1.slice(0,i)
//     if(rotation === str2){
//         return true
//     }
//   }
//   return false;

//Solution 2

return str1.length === str2.length && (str1+ str1).includes(str2)
}
console.log(stringRotation("rotation", "tationro"));
console.log(stringRotation("javascript", "scriptjava"));
console.log(stringRotation("RotateMe", "teMeRota"));
console.log(stringRotation("RotateMe", "abcdefgh"))