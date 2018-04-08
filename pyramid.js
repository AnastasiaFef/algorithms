// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for(let i=1; i <= n; i++){
        let spaces = ''
        const spacesNumber = n - i;
        for(let o=0; o < spacesNumber; o++){
            spaces += ' ';
        }
        let hashes = '#';
        for(let h=1; h < i; h++){
            hashes += '##'
        }
        console.log(spaces, hashes)
    }
}

module.exports = pyramid;

pyramid(1)
pyramid(5)
pyramid(77)

