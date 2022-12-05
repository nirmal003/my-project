//    reverse the array value

const num = [1, 2, 3, 4, 5];

num.reverse();

console.log(num);

//          if we don't want to change the original array. So just do this

const nums = [1, 2, 3, 4, 5];

const res = nums.concat().reverse(); //    concat() is store the nums in res then reversed

console.log(nums); //        original array

console.log(res);

//                           or we can use spread operator

const newArr = [...nums].reverse(); //     spread operator

console.log(nums);

console.log(newArr);

//       and we can reverse strijng also by using split and join function

const str = "we are going to bengalore";

const str2 = str.split("").reverse().join("");

console.log(str2);
