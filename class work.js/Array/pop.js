//   remove the last value from the array

const num = [1, 2, 3, 4, 5];

num.pop(); //          it will remove the value from pos.4

num.pop(); //          it will remove the value from pos.3

console.log(num);

//     if you want to find the removed value just do this way

const nums = [1, 2, 3, 4, 5];

const removedvalue1 = nums.pop(); //          it will remove the value from pos.4

const removedvalue2 = nums.pop(); //          it will remove the value from pos.3

console.log(nums);

//    now you will get the removed value

console.log(removedvalue1);

console.log(removedvalue2);
