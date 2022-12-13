//                          in this method we will convert string to  array

const str = "1234567";

const str_arr = Array.from(str); //         str into  array of string for each char

console.log([...str]); //       both also same resluts

console.log(str_arr);

//                      we need to change str into array of number and it have 3 ways to do this

//                     let's go to try this

const num_arr = Array.from(str, mapFn); //                         this 1st one

function mapFn(X) {
  return Number(X);
}

console.log(num_arr);

const num_arr2 = Array.from(str, (X) => Number(X)); //             this 2nd one

console.log(num_arr2);

const num_arr3 = Array.from(str, Number); //                       this 3rd one

console.log(num_arr3);

//    we can remove duplicates in array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

const num = Array.from(new Set(nums));

console.log(num);

const frt = ["ball", "apple", "apple", "orange", "ball", "car", "wheel", "car"];

const fruits = Array.from(new Set(frt));

console.log(fruits);

const fruit = [...new Set(frt)]; // 2nd way to do without Array.from

console.log(fruit);
