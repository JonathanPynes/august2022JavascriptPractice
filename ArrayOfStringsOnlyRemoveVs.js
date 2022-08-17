// write a function that only uppercases arrays of strings

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = ["I am Jon", "This is an array", "These are strings"];
const arrayThree = [
    "I am Jon",
    "This is an array",
    "These are strings",
    1,
    2,
    3,
];

const regex = /[aeiou]/gi;

const upperCaseStrings = (arr) => {
    try {
        if (arr.every((i) => typeof i == "string")) {
            let newArr = arr.map((el) => el.toUpperCase());
            let answer = newArr.map((e) => e.replace(regex, ""));
            return answer;
        } else {
            return err;
        }
    } catch (err) {
        return `this array [${arr}] contains things other than strings ...or... ${err}`;
    }
};

console.log({
    array1: upperCaseStrings(arrayOne),
    array2: upperCaseStrings(arrayTwo),
    array3: upperCaseStrings(arrayThree),
});
