// write a function that given an argument `n`, 
// uses `slice` (do not use `filter`) to return the array but with the nth element removed,
// it should console log error if the nth element is out of bounds.

const array = ["this", "is", "an", "array", "of", "strings", "yahoo!"];

const sliceEm = (array, n) => {
  let answer = [];
  if (array[n] === undefined) {
    console.log("n is out of bounds");
  }
  else if (array[n] !== undefined) {
    let firstHalf = array.slice(0, n);
    let newStart = n + 1;
    let secondHalf = array.slice(newStart);
    answer.push(firstHalf, secondHalf);
    console.log(answer.flat());
  }
}

sliceEm(array, 10)
sliceEm(array, 3)