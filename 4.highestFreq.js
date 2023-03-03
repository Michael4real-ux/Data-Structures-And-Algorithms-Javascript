/**
 Highest Frequency
Instructions
Write a function that takes an array of strings and returns the most commonly occurring string in that array.

If there are multiple strings with the same high frequency, return the one that finishes its occurrences first, while going left to right through the array.

Input: Array of Strings
 ['a', 'b', 'c', 'c', 'd', 'e'] -> c
 ['abc', 'def', 'abc', 'def', 'abc'] -> abc
 ['abc', 'def'] -> abc
 ['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ] -> ghi
Output: String
 */

function highestFrequency(strings) {
 const hash = {};
 let maxFrequency = 0;
 let mostFrequentString = strings[0]
 for(let char of strings){
    if(!hash[char]){
        hash[char] = 1;

    }else{
        hash[char]++
    }

    if(hash[char] > maxFrequency){
      maxFrequency = hash[char]
      mostFrequentString = char
    }
 }
  return mostFrequentString
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"]));
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"]));
console.log(highestFrequency(["abc", "def"]));
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
);
