/**
 Stringy Strings

 Task
Write a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

Specification
stringy(size)
Parameters
size: int - Size of the output of alternating '1s' and '0s'

Return Value
char* - A string of alternating '1s' and '0s' determined by size

Examples
Input size	Output
6	       '101010'
4	       '1010'
12	       '101010101010'
The size will always be positive (or zero) and will only use whole numbers.
 */

function stringy(size){
  let result = '';
  for(let i =1; i <= size; i++){
    if(i % 2 === 0) result +=0;
    if(i % 2 !== 0) result +=1;
  } 
  return result; 
};
console.log(stringy(6))
console.log(stringy(12))
console.log(stringy(4))