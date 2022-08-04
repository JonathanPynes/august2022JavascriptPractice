//write a function that sums up an array of numbers using reduce.
const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (arr) => {
    let answer = arr.reduce((pv, cv) => pv + cv);
    return answer;
};

console.log(sum(arrayOfNum));
