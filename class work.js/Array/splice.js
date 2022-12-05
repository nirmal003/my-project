//      it will change the original array

const nums = [1, 2, 3, 4, 5];

nums.splice(1, 2); //                     it means will remove 2value's from "idx-1"

console.log(nums);

const num = [1, 2, 3, 4, 5, 6];

const deleted = num.splice(0, 3); //     it means will remove the 3value's from "idx-0"

console.log(num); //                     it will give the spliced array

console.log(deleted); //                what are the deleted values

//                 also we can push the value into the array

const number = [1, 2, 3, 4, 5];

const del = number.splice(2, 1, 0, 6); // here we removed one value(from "idx-2") and push the 2value's(0,6)

console.log(number); //             we will get newArr

console.log(del); //             we removed one value from the "idx-2"
