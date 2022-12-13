//    this method will change the array value with a provided value

const nums = [1, 2, 3, 4, 5, 6];

nums.fill(0);

console.log(nums);

const num = [1, 2, 3, 4, 5, 6];

num.fill(0, 1, 5); //      also we can mention the start and end index

console.log(num);

//   and we can create the new array with help of function

function fillnums(n) {
  return Array(n) //          Array(n) means length of the array
    .fill(0)
    .map((_, idx) => idx + 1);
}

console.log(fillnums(10));

//     2nd way to do this

const ary = new Array(10).fill().map((_, idx) => idx + 1);

console.log(ary);
