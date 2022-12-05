//    in this method used to add the value at beginnimg of the array. its similar to push method

const num = [1, 2, 3, 4, 5];

num.unshift(0); //           it will add the value from beginning

const res = num.unshift(-1); //        in this case we can get length of the array and pushed also

console.log(num);

console.log(res);

//               so whatever you to unshift just go to this way

const nums = [1, 2, 3];

nums.unshift(-2, -1, 0); //          it will add the value from beginning in these same order

console.log(nums);
