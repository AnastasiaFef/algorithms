// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0```


function vowels(string) {
    let lettersArray = string.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsNumber = 0;
    for(let letter of lettersArray){
        if(vowels.indexOf(letter) != -1) {
            vowelsNumber ++;
        }
    }
    return vowelsNumber
}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));
