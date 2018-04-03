// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

anagrams = (string1, string2) => cleanString(string1) === cleanString(string2);

cleanString = str => str.toLowerCase().split('').sort().join('').replace(/[^0-9a-z]/gi, '');

console.log(anagrams('rail safety', 'fairy tales'), anagrams('RAIL! SAFETY!', 'fairy tales'), anagrams('Hi there', 'Bye there'))


// newAnagrams = (string1, string2) => ({
//     console.log('sdfvw');
//     string1.toLowerCase().split('').sort().join('').replace(/[^0-9a-z]/gi, '') === string2.toLowerCase().split('').sort().join('').replace(/[^0-9a-z]/gi, '') })