/**
 Problem: Given an integer "n", find the factorial of that integer

 Note: 
 - In mathematics factorials of a non-negative integer 'n' denoted n!,
 is the product of all positive integers less than or equal to n;
- Factorial of 0 is 1 (Dont stress your head over this(LOL))
 factorial(4) = 4 * 3 * 2 * 1 = 24
 factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

 */

 function factorial(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
      result *= i;
    }
    return result;
 }

 console.log(factorial(0))
console.log(factorial(3))
console.log(factorial(7))