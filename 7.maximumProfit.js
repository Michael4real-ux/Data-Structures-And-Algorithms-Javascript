/**
 Maximum Profits
Instructions
Suppose we could access yesterday’s prices for a certain stock as a chronological list. Write a function that takes the list and returns the highest profit possible from one purchase and one sale of the stock yesterday.

For example, a stock price list of [10, 7, 5, 8, 11, 9] shows that the stock started at 10 and ended at 9, going through the numbers chronologically. There is at least a 1-minute difference between the stock prices.

Taking that array as input, our function should return 6, the maximum possible profit from buying when the price was 5 and selling when the price was 11.

If no profit can be made, return 0.

No “shorting” — you must buy before you sell. You may not buy and sell in the same time step.

Input: Array of Numbers

Output: Number
 */

function getMaxProfit(prices) {

   // Solution 1
//   let maxProfit = [0]
//   for(let i = 0; i< prices.length; i++){
//     for(j=i + 1; j<prices.length; j++){
//         maxProfit.push(prices[j] - prices[i]);
//     }
//   }
//   return Math.max(...maxProfit)

   // Solution 2
 let minPrice = Infinity;
 let maxProfit = 0;
 for(let currentPrice of prices){
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
 }
 return maxProfit
}
console.log(getMaxProfit([10, 7, 5, 8, 11, 9])) // -> 6;
console.log(getMaxProfit([1, 2, 3, 4, 5])) // -> 4;
console.log(getMaxProfit([5, 4, 3, 2, 1])) //->0;
console.log(getMaxProfit([5, 20, 4, 10, 1])) //->15 ;