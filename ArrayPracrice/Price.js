// for a given array with price of 5 items ->[250,645,300,900,550]] . All items have an offer of 10% OFF on them. Change the array to store final price after apply offer.
let prices = [250, 645, 300, 900, 550];
for (let i=0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i]*10/100);
}   
console.log(prices);