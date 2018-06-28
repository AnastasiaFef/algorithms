// given stock price [11, 8, 5, 7, 12, 9, 4]
// get max profit

function best_profit (arr){
    let bestProfit = 0; let cMin = arr[0];
    for (let element of arr){
        if(element < cMin) cMin = element;
        else if(bestProfit < (element - cMin)) bestProfit = element - cMin;   
    }
    return bestProfit
}

console.log(best_profit([111, 11, 8, 110, 5, 7, 12, 9, 4]))