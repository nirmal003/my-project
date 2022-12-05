//            in this condition we can check true or flase

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

const res = nums.every(isPositive);

function isPositive(item) {
  return item > 0; // check all array are positive
}

console.log(res);

const nev = nums.every((item) => item < 0); // check all array are negative

console.log(nev);

// check inside the array object have a particular property for every

const poeple = [
  {
    name: "nirmal",
  },
  {
    name: "mahesh",
  },
  {
    name: "amit",
  },
  {
    name: "sunil",
  },
];

const check = poeple.every((item) => item.name !== undefined);

console.log(check);

// check inside the array is array or string

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arr = array.every((item) => Array.isArray(item));

console.log(arr);

// check inside the array is array or string

const str = [[1, 2, 3], "456", [7, 8, 9]];

const get = str.every((item) => Array.isArray(item));

console.log(get);
