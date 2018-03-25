// --- Directions
// these questions are the same:
// Given a string, return the character that is most
// commonly used in the string.
// What is the most common character in a string?
// Does the given string have any repeated characters in it?

// this question is not quite the same but uses similar logic:
// Does string A have the same characters as string B (is it an anagram)?

// --- Examples
// maxChar("aabcccccccd") === "c"
// maxChar("apple 1231111") === "1"


let maxChar = function (string) {
    let charObj = {};
    for(let char of string){
        if(charObj[char]){
            charObj[char] += 1; 
        }
        else{
            charObj[char] = 1
        }
    }
    
    // return(charObj)
    let mostCommonLetter = '';
    let numOfReps = 0;
    for(let char in charObj){
        if(charObj[char] > numOfReps){
            numOfReps = charObj[char];
            mostCommonLetter = char;
        }
    }
    console.log(mostCommonLetter)
}

maxChar('apple 1231111')