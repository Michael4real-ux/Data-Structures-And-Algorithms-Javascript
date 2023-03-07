/**
 Problem: Give a number "n" find the first "n" elements of the fibonacci sequence
 
 Note: 
 -In mathematics a fibonacci sequence is a sequence in which each number is a sum of the two preceeding ones
 - The first two numbers in the sequence is 0 and 1
 e.g fibonacci(2) =[0,1];
     fibonacci(3) = [0,1,1];
     fibonacci(7) = [0,1,1,2,3,5,8]
 */

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
