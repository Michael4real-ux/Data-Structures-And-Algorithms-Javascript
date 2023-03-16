/**
 Find the Parity Outlier

 Task
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Specification
findOutlier(integers)
Parameters
integers: Array<Number>

Return Value
Number - The only odd or even number

Examples
                     integers	                             Return Value
Only odd number	    [2,4,0,4,11,2602,36]	                   11
Only even number	[160,3,1719,19,13,-21]	                   160
 */

function findOutlier(integers) {
    
// Solution 1: This will cost us space
// let evenArray = [];
// let oddArray = [];

//   for(let i = 0; i < integers.length; i++){
//     if(integers[i] % 2 === 0){
//       evenArray.push(integers[i])
//     }else{
//         oddArray.push(integers[i])
//     }
//   }

//   if(evenArray.length === 1){
//     return evenArray[0];
//   }else{
//     return oddArray[0]
//   }

// Solution 2
let evenArray = integers.filter((elem)=> elem % 2 === 0)
let oddArray = integers.filter((elem)=> elem % 2 !== 0)

if(evenArray.length === 1){
    return evenArray[0]
}else{
    return oddArray[0]
}
    
};
console.log(findOutlier([2,4,0,4,11,2602,36]))
console.log(findOutlier([160,3,1719,19,13,-21]))