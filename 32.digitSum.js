/**
 You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be addTwoDigits(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10≤n≤99.

[output] integer

The sum of the first and second digits of the input number.
 */
function addTwoDigits(n) {
   return String(n).split("").reduce((acc, elem)=>acc + parseInt(elem) ,0)
}
console.log(addTwoDigits(29))