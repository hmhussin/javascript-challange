const sentence = 'hello my name is hussein'
function capitalizeFirstLetter(sentence) {
    let words = sentence.split(' ').map((word) => {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let rest = word.slice(1);
        console.log(firstLetter + rest)
        word=firstLetter + rest
    });
 return words.join(' ')

}
console.log(capitalizeFirstLetter(sentence))