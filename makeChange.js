// Given an amount of dollars and the total of the object 

function makeChange(total, givenAmount) {
    total = parseFloat(total).toFixed(2);
    givenAmount = parseFloat(givenAmount).toFixed(2);
    console.log(total, givenAmount)
    if(total > givenAmount){
        return console.log('You suck!')
    }
    let changeArr = [];
    let remainder = givenAmount - total;
    remainder = parseFloat(remainder).toFixed(2)
    console.log(remainder)
    let quarters = 0;
    while(remainder > 0.24){
        remainder -= 0.25;
        quarters += 1;
    }
    changeArr.push(quarters);

    let dime = 0;
    while(remainder > 0.09){
        remainder -= 0.10;
        dime += 1;
    }
    changeArr.push(dime)

    let nickel = 0;
    while(remainder > 0.04){
        remainder -= 0.05;
        nickel += 1;
    }
    changeArr.push(nickel)

    let penny = 0;
    while(remainder > 0.01){
        remainder -= 0.01;
        penny += 1;
    }
    changeArr.push(penny)

    return changeArr
  }
  
  // example inputs
  
  console.log(makeChange("5.5","6.00")) // output ::> [2, 1, 1, 0]





//   mdschiller [2:59 PM]
// const coins = [25, 10, 5, 1];

// function makeChange(total, givenAmount) {
//    remainder = ( parseFloat(total) - parseFloat(givenAmount) ) * 100;
//    var result = [];
//    coins.forEach(function(value, i) {
//        result.push(Math.floor(remainder/value));
//        remainder = remainder%value;
//    });
//    console.log(result);
// }

// makeChange("2.00", "1.11");