
function mathSequences(arr) {
    // we will define Set dataStructure as it accept unique value
    let arithmetic = new Set();
    let geometric = new Set();
    for (let i = 1; i < arr.length; i++)
    {
        let arithmeticResult = arr[i] - arr[i - 1];
        arithmetic.add(arithmeticResult);
        let geometricResult = arr[i] / arr[i - 1];
        geometric.add(geometricResult)
    }
    // note that return happen only one time
    if (arithmetic.size === 1)
    { return 'arithmetic' }
    if (geometric.size === 1)
    { return 'geometric' }
    return -1; 
}
console.log(mathSequences([2, 4, 6, 8]));
console.log(mathSequences([2, 4, 8, 16]));
console.log(mathSequences([1, 9, 50, 8]));
