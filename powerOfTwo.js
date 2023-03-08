/**
 Problem: Given a positive integer 'n', determine if the number is a power of 2 or not.

 Note: An integer is a power of two if there exists an integer 'x' such that 
 'n' === 2^x

 isPowerOfTwo(1) ==true(2^0);
 isPowerOfTwo(2) ==true(2^1);
 isPowerOfTwo(5) ==false;

 */
// Solution 1
// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2
//   }
//   return true;
// }

 //Time - 0(n)
//space - 0(1)

// Solution 2 - Better solution
function isPowerOfTwo(n) {
   if( n < 1){
    return false;
   }
   return (n & (n-1)) === 0  
   //bitwise AND(to 32-bit integers and expressed by a series of bits (zeroes and ones)) e.g 5 = 00000000000000000000000000000101
   // 3 = 00000000000000000000000000000011 note the last number is 1 & 1 which will give 1 as final output, if you have 0 and 1  or vice versa  the final number it gives 0. In our case our it will be 5 & 4 if we are testing with 5 the result will be 0, because 4 will have 0 at the end if changed to bitwise. That is why 5 is false.
}
 //Time - 0(1)
//space - 0(1)
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
