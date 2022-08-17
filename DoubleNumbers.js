// write a function that maps an array of numbers and doubles them

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapDouble = (arr) => {
    return arr.map((num) => num * 2);
};

console.log(mapDouble(numbers));
