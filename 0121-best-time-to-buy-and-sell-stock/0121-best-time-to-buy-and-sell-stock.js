function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

// Brute Force
// function maxProfit(prices) {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {

//     for (let j = i + 1; j < prices.length; j++) {

//       let profit = prices[j] - prices[i];

//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }

//     }
//   }

//   return maxProfit;
// }