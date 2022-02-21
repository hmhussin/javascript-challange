let str = 'abcdefgh';
function unique(str) {
let tempSet = new Set();
for (let i = 0; i < str.length; i++)
{tempSet.add(str[i]);}
console.log(tempSet)
if (tempSet.size === str.length)
{return 'unique';}
else
{return 'not unique';}    
}
console.log(unique(str))
console.log(unique('abcdade'))