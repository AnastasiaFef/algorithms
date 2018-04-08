// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//    [[1, 2],
//     [4, 3]]
//   matrix(3)
//    [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//    [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


const getNumber = array => parseInt(array.splice(0, 1).join(''));

function matrix (size) {
    let maxNum = size ** 2;
    let theArray = []

    //create an array of empty arrays
    for(let i=1; i <= size; i++){
        theArray.push([]);
    }

    //create array of all numbers that need to be put to theArray
    arrayOfAllNums = [];
    for(let j=1; j <= maxNum; j++){
        arrayOfAllNums.push(j)
    }

    //circling around arrays for Math.ceil(size/2) times
    for(let i=0; i < Math.ceil(size/2); i++){

        //go to the right
        // push n-(i*2) nums to arrays[i] (use splice(i+x, 0, num))
        for (let x=0; x <= size-(i*2); x++) {
            if(theArray[i].length < size){
                let num = getNumber(arrayOfAllNums);
                theArray[i].splice(i+x, 0, num);
            }
        }

        //go down
        // Loop through arrays[i+1 to n-1-i], splice(i, 0, num)
        for(let a=i+1; a < size-i; a++){
            let num = getNumber(arrayOfAllNums);
            theArray[a].splice(i, 0, num)
        }

        //go to the left
        // splice(i, 0, num) n-1-(i*2) times to arrays[n-1-i]
        for(let r=0; r < size-1-(i*2); r++){
            const num = getNumber(arrayOfAllNums);
            theArray[size-1-i].splice(i, 0, num)
        }

        //go up
        //loop through arrays[n-2-i to i+1] splice(i, 0, num)
        for(let y=size-2-i; y > i; y--){
            let num = getNumber(arrayOfAllNums);
            theArray[y].splice(i, 0, num)
        }
    }

    return (theArray)
}

console.log("matrix(8):")
console.log(matrix(8))
console.log("matrix(7):")
console.log(matrix(7))
console.log("matrix(9):")
console.log(matrix(9))



