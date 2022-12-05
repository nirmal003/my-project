//     it will search the provided value in the array and return true or false

const fruits = ["apple", "orange", "banana", "lemon", "pomegranate"];

const res = fruits.includes("apple");

console.log(res);

if (res) {
  console.log("yes,we can buy the apple");
} else {
  console.log("sad....we can't buy the apple");
}

const res2 = fruits.includes("grapes");

console.log(res2);
