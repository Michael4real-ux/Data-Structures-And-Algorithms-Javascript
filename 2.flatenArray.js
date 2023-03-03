/**
 Flatten Array
Instructions
Write a function that will take an array of deeply nested arrays and extract every item, flattening the array. It should return a new array that contains the items of each internal array, preserving order.

Input: Array

Output: Array

Examples:
flatten([ [ [ [1], 2], 3], [4], [], [[5]]]);
// -> [1, 2, 3, 4, 5]

flatten(['abc', ['def', ['ghi', ['jkl']]]]);
// -> ['abc', 'def', 'ghi', 'jkl']
 */

function flatten(nestedArray) {
  let newArr = [];
  for(let char of nestedArray){
    if(Array.isArray(char)){
        let flattenArr = flatten(char) // recursion ;
        for(let elem of flattenArr){
            newArr.push(elem)
        }
    }else{
      newArr.push(char)
    }
  }
  return newArr;
}
console.log(flatten([ [ [ [1], 2], 3], [4], [], [[5]]]));
console.log(flatten(['abc', ['def', ['ghi', ['jkl']]]]));