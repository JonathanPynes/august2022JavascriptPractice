// using a for loop

const a = [0, 1, 2, 3, 4, 5, 6, 7];

const entrys = (array) => {
  for (const [index, element] of array.entries()) {
    let answer = {index, element};
    console.log(answer)
  }
};

entrys(a);

// using a for...of loop

const forOfEntries = (array) => {
  const keyValuePair = array.entries();
  let answer = [];
  for (const element of keyValuePair) {
   answer.push(element)
  }
  console.log(answer)
}

forOfEntries(a);