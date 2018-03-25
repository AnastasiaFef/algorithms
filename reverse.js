// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//    reverse('apple') === 'leppa'
//    reverse('hello') === 'olleh'
//    reverse('Greetings!') === '!sgniteerG'

var inquirer = require('inquirer');
let givenString = process.argv[2];

var reverse = function(givenString){
    //backward loop through given string, save to new one
    let newString = '';
    for (let i = givenString.length - 1; i >= 0; i--) {
        newString += givenString[i];
    }
    // console.log(newString)

    //loop through each char of given string, save each to new one upfront
    let newString2 = '';
    for (let char of givenString){
        newString2 = char + newString2;
    }
    // console.log(newString2)

    //reverse the array of characters
    return givenString.split('').reverse().join('');
}

module.exports = reverse;