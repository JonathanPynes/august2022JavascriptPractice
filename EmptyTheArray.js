//write a function that uses `pop` to empty any array and uses a `forEach` construct

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

const popOff = (arr) => {
    console.log("arr before", arr);
    let copy = [...arr];
    copy.forEach((e) => arr.pop());
    console.log("copy", copy);
    console.log("arr after:", arr);
    return arr;
};

console.log(popOff(array));
