// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// var inquirer = require('inquirer');
// let givenString = process.argv[2];


module.exports = function(givenString){
    // compare each letters
    let reversed = '';
    for (let char of givenString){
        reversed = char + reversed;
    }
    console.log(givenString === reversed)

    // comparing to reverse string
    console.log(givenString === givenString.split('').reverse().join(''))
}
