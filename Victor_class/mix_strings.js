// given string: 'abc'
// return all mixed options like: 'abc', 'acb', 'bca'

function mix_it(string){
    const res = [];
    string = string.split('');
    for (let i=0; i<string.length-1; i++){
        res.push(string);
        let lett = string[i];
        string[i] = string[i+1];
        string[i+1] = lett;
        let new_str = string.join('');
        res.push(new_str);
    }
    return res
}

console.log(mix_it('abc'))