//[10 ..... 20] 

function missing (arr){
    res = [];
    // for(let i=arr[0]; i<=arr[arr.length-1]; i++){
        // for(let element of arr){
        //     if(element !== i){
        //         res.push(i)
        //     }
        // }
    // }

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]+1 !== arr[i+1]){
            for(let k=arr[i]+1; k<arr[i+1]; ++k)
            res.push(arr[i]+1)
            // if(arr[i]+2 !== arr[i+2])
        }
    }

    return res
}


console.log(missing([10, 11, 12, 19, 20]))