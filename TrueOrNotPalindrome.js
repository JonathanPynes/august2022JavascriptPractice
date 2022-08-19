// write a function that uses a traditional `for` loop to return true if a word is a palindrome (i have hints here, lmk if u cannot figure it out)

const string0 = "wow"; //true
const string1 = "tits"; //false
const string2 = "radar"; //true
const string3 = "madam"; //true
const string4 = "jon"; //false


const isItPalin = (string) => {
  //regex to remove special chars
  let newString = [];
  for (let index = (string.length -1); index >= 0; index--) {
    newString = [...newString, string[index]];;
  }
  let join = newString.join("");
  return join === string ? true : false;
}

console.log( {
0: isItPalin(string0),
1: isItPalin(string1),
2: isItPalin(string2),
3: isItPalin(string3),
4: isItPalin(string4),
})