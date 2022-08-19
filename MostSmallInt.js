// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const nums1 = [-1, 2, 3, 4];
const nums2 = [34, 15, 88, 2];
const nums3 = [34, -345, -1, 100];

const findLowest = (array) => {
  let answer = array.reduce((pv, cv) => {
   return cv > pv ? pv : cv;
 })
 return console.log(answer);
};

findLowest(nums1);
findLowest(nums2);
findLowest(nums3);