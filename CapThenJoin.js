//write a function that maps an array of characters into upper case then
//outputs a full word joined together e.g. ['h','i'] -> ['H', 'I'] -> 'HI'

const charArray = ["h", "i"];

const capThenJoin = (arr) => {
    let string = "";
    let upperCaseArr = arr.map((char) => char.toUpperCase());
    string = upperCaseArr.join("");
    return string;
};

console.log(capThenJoin(charArray));
