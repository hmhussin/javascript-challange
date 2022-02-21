//find the summation of all number without the max number if the max number equal 
//sum return true otherwise return false
const arr = [1, 2, 6, 4, 13]
function arraySum(arr) {
    const max = Math.max(...arr)
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        console.log(sum)
    }
    console.log(sum)
    if (sum === (2 * max)) { return true; }
    else { return false; }
}
console.log(arraySum([1, 2, 6, 4, 13]))
console.log(arraySum([1,2,6,4,15]))