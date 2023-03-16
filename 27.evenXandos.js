/**
 Task
Write a function that checks a string to see if it has the same amount of xs and os. The case of the characters should be ignored, so x and X are equivalent, as are o and O.

The method must return a boolean. The string can contains any other char, which will be ignored.

Examples
Input	         Output	                 Comments
"ooxx"	         true	
"xooxx"	         false	
"ooxXm"	         true	                 Ignore case
"zpzpzpp"	     true	                 When there are no xs or os, return true
"zzoo"	         false	 

Documentation
evenXAndO(str)
Parameters:
str: String
A string of characters.

Guaranteed Constraints:
The input will never be null or undefined.
The string may be empty.
Returns: boolean
Return true if the total number of xs and Xs is the same as the total number of os and Os (including zero). Otherwise, return false.
 */

function evenXAndO(s){
//Solution 1:
//  return (s.match(/[x]/gi) || []).length === (s.match(/[o]/gi) || []).length

 // Solution 2: Recommended solution if you are still a junior/ mid-level or you dont understand regex

 s = s.toLowerCase().split("")
 
 const filterX = s.filter((elem)=> elem === 'x').length;
 const filterO = s.filter((elem)=> elem === 'o').length;

 return filterX === filterO;

}

console.log(evenXAndO("ooxx"))
console.log(evenXAndO("xooxx"))
console.log(evenXAndO("ooxXm"))
console.log(evenXAndO("zpzpzpp"))
console.log(evenXAndO("zzoo"))