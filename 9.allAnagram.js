/**
 Instructions
Write a function that takes in an array of strings. Return true if all strings are anagrams of one another and false if even a single string is not an anagram of the others.

Input: Array of Strings

Output: Boolean

Examples
allAnagrams(['abcd', 'bdac', 'cabd']); // true
allAnagrams(['abcd', 'bdXc', 'cabd']); // false
Hints
Think about what it means for two strings to be anagrams. They should all have the same characters present in the same number, perhaps in a different order.
It would make sense to express the time complexity in terms of two variables.

 */

function allAnagrams(strings) {
  let sortedString = strings.map((elem)=> elem.split('').sort().join(''))

  for(let i =1; i< strings.length; i++){
    if(sortedString[i] !== sortedString[0]){
        return false
    }
  }
  return true;
}
console.log(allAnagrams(['abcd', 'bdac', 'cabd']));
console.log(allAnagrams(['123', '132', '213', '231', '312', '321']));
console.log(allAnagrams(['abcd', 'bdXc', 'cabd']));
console.log(allAnagrams(['123', '122']));