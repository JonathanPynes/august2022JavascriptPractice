// write a function that takes in an array and uses `concat` and `splice` to move the first half of an array and move it to the end of the array.

const array = ["This","is","a","longer","array","then","usual","I","love","learning","programming"];

const frontToBack = (array) => {
  let length = Math.round(array.length / 2);
  let back = [...array].splice(length);
  let front = [...array].splice(-length);
  console.log("back", back, "front", front)
  let answer = back.concat(front);
  console.log(answer);
}

frontToBack(array)