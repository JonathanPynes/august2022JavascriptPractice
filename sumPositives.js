// write a function that ONLY sums up the numbers that are positive - e.g. [-1,3,4] = 7

const nums = [1,2,3,4,5,-1,-2,-3,-4,-5];

const sumPos = (array) => {
  let answer = array.reduce((pv, cv) => 
  cv > 0 ? cv + pv : pv
  )
  console.log(answer)
}
sumPos(nums)