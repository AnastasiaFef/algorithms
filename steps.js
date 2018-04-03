// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {    
    let i = 1;
    while(i < n){
        let hash = '';
        for(let o = 0; o < i; o++){
            hash += '#';
        }
        console.log(hash);
        i++;
    }
}

steps(55)

// module.exports = steps;