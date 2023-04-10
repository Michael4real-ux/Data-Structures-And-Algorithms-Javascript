/**
 Largest Number
Description
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be largestNumber(n) = 99.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
1≤n≤9.

[output] integer

The largest integer of length n.
 */

function largestNumber(n) {
    console.log(new Array(n).fill(9).join(""))
//    return Number(new Array(n).fill(9))
}
console.log(largestNumber(2))