// [1,2 3] [2,3,4] -> [1,2,3,4]

function merge(arr1, arr2){ 

    // for(let element of arr1){           ///o(n^2)
    //     if(!arr2.includes(element)){
    //         arr1.push(element);
    //     }
    // }



    //if arrays are always sorted:
    // 1. check for elements in arr2 that are bigger than last el of arr1
    // for(let el of arr2){
    //     if(arr1[arr1.length-1] < el){
    //         arr1.push(el)
    //     }
    // }



    // [1,3,7], [2,7,10]
    // for(let i=0; i<arr1.length; i++){
    // }

    // while(i <  arr1.length && j < arr1.length){
    // }

    return [...new Set([...arr1, ...arr2])]

    // return arr1;
}

console.log(merge([1,2,3], [2,3,4]))

// let res = [];
// let array1 = [1,2,3];
// let array2 = [2,3,4];
// let array = array1.concat(array2); //same as [...array1, ...array2] -> [1,2,3,2,3,4]



