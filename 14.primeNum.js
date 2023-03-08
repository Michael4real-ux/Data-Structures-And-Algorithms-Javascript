/**
 Given a natural number 'n', determine if the number is prime or not.

 Note: A prime is a natural greater than 1 that is not a product of two smaller number

 isPrime(5) = true(1 * 5 or 5 * 1) // no any other smaller like 2,3,4 can multiply to give you 5 five right means 5 is a prime number

 isPrime(4) = false(1 * 4, 2 * 2, 4 * 1)

 */

 function isPrime(n){
    if( n < 2){
        return false;
    }

    for(let i = 2; i < n; i++){
     if(n % i === 0){
        return false;
     }
    }
   return true;
 }
 console.log(isPrime(4));
 console.log(isPrime(5));
 console.log(isPrime(2));