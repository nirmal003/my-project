//    in this method will give to the compressed value like sum,max,min....etc

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

// initialy acc value is zero,then later will re-assign every retrun value

const total = nums.reduce((acc, value) => {
  return acc + value;
});

console.log(total);

const max = nums.reduce((acc, value) => {
  if (acc > value) {
    return acc;
  } else {
    return value;
  }

  // acc > value ? `${acc}` : `${value}`;
});

console.log(max);

const min = nums.reduce((acc, value) => {
  if (acc < value) {
    return acc;
  } else {
    return value;
  }
});

console.log(min);

//    compress the object value

const product = [
  {
    name: "laptop",
    price: 1500,
    count: 11,
  },
  {
    name: "desktop",
    price: 3000,
    count: 4,
  },
  {
    name: "phone",
    price: 3000,
    count: 6,
  },
];

const productvalue = product.reduce(
  (acc, value) => acc + value.price * value.count,
  0
);
console.log(productvalue);

const productPriceCategory = product.reduce((acc, value) => {
  if (acc[value.price]) {
    acc[value.price] = ++acc[value.price];
  } else {
    acc[value.price] = 1;
  }
  return acc;
}, {});

console.log(productPriceCategory);

// console.log("im here", __dirname);

// console.log("im here", __filename);

// const fs = require("fs").writefilesync("aaa.txt");

// console.log(fs);
