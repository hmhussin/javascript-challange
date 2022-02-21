let str = 'abcdefgh';
function unique(str) {
let tempSet = new Set();
    for (let letter of str)
    {
        if (tempSet.has(letter)) {
            return 'not unique';
        }
        tempSet.add(letter)
    }    
    return 'unique';
}
console.log(unique(str))
console.log(unique('abcdade'))