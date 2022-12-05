//     it will be check array atleast one value is pass the condition or not

//     & then it will return true or false

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

const res = nums.some((value) => {
  return value > 5;
});

console.log(res);

//     check product price is less the 1000

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

const lowprice = product.some((value) => {
  return value.price < 1000;
});

console.log(lowprice);
