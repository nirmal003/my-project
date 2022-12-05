//    it will give the value one by one and similar to for loop

const nums = [1, 2, 3, 4, 5];

let sum = 0;

nums.forEach((value, index, arr) => {
  console.log(value);
});

nums.forEach((value, index, arr) => {
  sum += value;
});

console.log(sum);

//      we will count value in the array

const letters = ["a", "b", "c", "a", "a", "(", "("];

const count = {};

letters.forEach((value, index, arr) => {
  if (count[value]) {
    count[value]++;
  } else {
    count[value] = 1;
  }
});

console.log(count);

console.log(count.a);
