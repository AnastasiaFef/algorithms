// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


var reverseInt = function (int) {
    console.log(int)

    //method 1
    // let intString = int.toString();
    // let reversed = '';
    // let intReversed = 0;
    // for(let char of intString){
    //     reversed = char + reversed;
    // }
    
    // // intReversed = Number(reversed);
    // intReversed = parseInt(reversed)
    // if( int < 1 ){
    //     intReversed = intReversed * -1;
    // }
    // return intReversed;



    //method 2
    let reversedStr = '';
    let intArr = int.toString().split('');
    for(let num of intArr){
        reversedStr = num + reversedStr;
    }
    let reversedInt = parseInt(reversedStr);
    reversedInt = reversedInt * Math.sign(int);

    return reversedInt;
}

module.exports = reverseInt;
