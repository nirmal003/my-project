// it will convert the nested array into array

const arr = [1, [2, [3, [4, [5]]]], [6]];

//   finaly we need to change like [1,2,3,4,5]

const res = arr.flat(Infinity);

console.log(res);
