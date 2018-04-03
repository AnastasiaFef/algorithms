// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

capitalize = str => {
    str = str.split(' ')
    let formatted = [];
    for(let word of str){
        word = word.split('');
        let letter = word.splice(0, 1).join('').toUpperCase();
        word = word.join('');
        formatted.push(letter + word);
    }
    return formatted.join(' ');
}

console.log(capitalize('a short sentence'), capitalize('a lazy fox'), capitalize('look, it is working!'));


//ADD TESTS