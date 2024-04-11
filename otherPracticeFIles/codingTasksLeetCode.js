// Contains Duplicate
let array1 = [1,2,3,1];
let array2 = [1,2,3,4];
let array3 = [1,1,1,3,3,4,3,2,4,2];

var containsDuplicate = function(nums) {
  nums.sort();
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i+1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate(array1))
console.log(containsDuplicate(array2))
console.log(containsDuplicate(array3))

// Reverse String
let revString = ["h","e","l","l","o"]

var reverseString = function(s) {
  let first = 0;
  let last = s.length-1;
  while (first <= last) {
    let temp = s[first]
    s[first] = s[last]
    s[last] = temp
    first ++
    last --
  }
  return s
};

console.log(reverseString(revString))