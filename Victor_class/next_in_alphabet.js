//find next alphabetical string

// arr = [1,2,3,1,4,3]
// should return [1,2,3,3,1,4]

function next(str){
    str = str.split('');
    for(let i=1; i<str.length; i++){
        if(str[str.length-i] > str[str.length-i-1]){
            console.log(str[str.length-1] + ">" + str[str.length-2])
            let save = str[str.length-i];
            str[str.length-i] = str[str.length-i-1];
            str[str.length-i-1] = save
            return str.join('')
        }
    }
}

console.log(next('abcd'));
console.log(next('sunny'));
console.log(next('abdc'));


