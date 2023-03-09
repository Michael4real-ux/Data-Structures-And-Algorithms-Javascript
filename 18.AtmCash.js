/**
An ATM only has 100, 50 and 20 dollar bills (USD) available to be dispensed.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

Here is the specification for the withdraw method you'll complete:

withdraw(amount)
Parameters
amount: int - Amount of money to withdraw. Assume that the amount is always divisible into 100, 50 and 20 bills.

Return Value
Array<int> - An array of 3 integers representing the number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).

Constraints
40 ≤ amount ≤ 10,000

Examples
amount	Return Value
250	[2,1,0]
260	[2,0,3]
370	[3,1,1]

 */

function withdraw(amount) {
 // This is to ensure that the amount user withdraw is not a above range(-1 means not found)
 if(amount < 40 || amount > 10000){
  return -1;
 }

 //Declare a variable to track each bills
 let hundred = 0;
 let fifty = 0;
 let twenty = 0;

 //This is to make sure that the amount Atm will dispense is within the smallest denominations it as.
 while(amount >= 20){
// starting from the highest bill in the atm, the modulo below means how many 100 can you find in the amount to be withdrawn, e.g if its user wants to withdraws 250 the ATm will surely give out 100 bill twice then fifty will be left right, we need to do the math by keeping track of the amount left and how many bills was given.
  if(amount % 100 === 0){
    //Amount will reduce by 100 
     amount -= 100;
     // Track the hundred bills
     hundred++

  }else if(amount % 50 === 0){
    amount -=50;
    fifty++
  }else{
    amount -=20;
    twenty++
  }
 }

 return [hundred, fifty, twenty]
}
console.log(withdraw(40))
console.log(withdraw(60))
console.log(withdraw(230))
console.log(withdraw(250))
console.log(withdraw(260))
console.log(withdraw(370))
console.log(withdraw(10001))
