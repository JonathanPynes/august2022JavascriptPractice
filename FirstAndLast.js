// write a function that takes an array of at least size 3 and returns an array of the first element and the last element.
const array1 = [1, 2];
const array2 = [1, 2, 3, 4, 5, 6, 7];
const array3 = [1, 2, 3];

const firstAndLast = (arr) => {
    try {
        if (arr.length >= 3) {
            let answer = [];
            let first = arr.shift();
            let last = arr.pop();
            answer.push(first, last);
            return answer;
        } else {
            return error;
        }
    } catch (error) {
        return `might not be long enough ...or... ${error}`;
    }
};

console.log("arr1", firstAndLast(array1));
console.log("arr2", firstAndLast(array2));
console.log("arr3", firstAndLast(array3));
