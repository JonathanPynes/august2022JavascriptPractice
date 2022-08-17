//write a function that uses `pop` to empty any array and uses a while loop

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

const popOffWhile = (arr) => {
    while (arr.length > 0) {
        arr.pop();
    }
    return arr;
};

console.log(popOffWhile(array));
