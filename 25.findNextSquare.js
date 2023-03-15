/** 
 Find the Next Perfect Square

 Task
You might know some pretty large perfect squares. But what about the next one?

Create a method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples
Input	Output	Comments
121	    144	
625   	676	
114	    -1	Since 114 is not a perfect square

Documentation
findNextSquare(num)
Parameters:
num: long or int
An integer greater than 0.

Guaranteed Constraints:
The input will always be an integer, it will never be null or undefined.
The input integer will always be greater than 0 (no negative inputs).
Returns: long or int
If the input is a perfect square, return the next perfect square.

If it is not a perfect square, return -1.
 */

function findNextSquare(num){

    //Solution 1
//   let square = Math.sqrt(num);
//   if(!Number.isInteger(square)){
//     return -1
//   }
//   let nextSquare = square + 1
//   return Math.pow(nextSquare,2);

//Solution 2

let square = Math.sqrt(num);
return square % 1 === 0 ? Math.pow((square + 1), 2) : -1

};

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));