//find the longest word in a sentence
const sentence = 'hello my Name is mo abdo'
function longestWord(sentences) {
    //1st split string into array of strings
    const words = sentences.split(' ')
    // assign longest word to empty
    let longest = '';
    // note for .... of   expression 
    for (let word of words )
    {//check length of every item in array
        if (longest.length < word.length)
        {longest = word;}  
    }
    return longest;
}
console.log(longestWord(sentence))