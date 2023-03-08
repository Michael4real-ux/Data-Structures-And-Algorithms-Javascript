/**
 Problem: Give a number "n" find the first "n" elements of the fibonacci sequence
 
 Note: 
 -In mathematics a fibonacci sequence is a sequence in which each number is a sum of the two preceeding ones
 - The first two numbers in the sequence is 0 and 1
 e.g fibonacci(2) =[0,1];
     fibonacci(3) = [0,1,1];
     fibonacci(7) = [0,1,1,2,3,5,8]
 */
// Solution 1
// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

//Solution 2 - Recursion
function fibonacci(n) {
 if(n < 2){
  return n
 }
 return fibonacci(n -1) + fibonacci(n-2); 
  // this will give you the nth element not the first nth elements like the first solution if you want the nth element for the first solution return fib.length-1;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6));
