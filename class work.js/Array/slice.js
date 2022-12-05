//         it will give the sliced newArr and it will not distrub the original array

const nums = [1, 2, 3, 4, 5, 6];

const res = nums.slice(1, 4); //        it means index "1" to "3" will give an array

console.log(res);

//                  check our original array

console.log(nums);

//                 we have negative value also but will consider in last pos of array

const res2 = nums.slice(0, -1); //    it means index "0" to "idx-1" will give an array

console.log(res2);
