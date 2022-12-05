//   it will give ascending,discending order and alphabetical order

const names = [
  "nirmal",
  "mahesh",
  "pradeep",
  "amit",
  "sunil",
  "mahesh",
  "amit",
  "sunil",
];

names.sort();

console.log(names);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

//  (a-b) < 0.....return a value.

//  (a-b) = 0.....nothing will changed.

//  (a-b) > 0.....return b value.

const ascendingorder = nums.sort((a, b) => {
  return a - b;
});

console.log(ascendingorder);

const discendingorder = nums.sort((a, b) => b - a);

console.log(discendingorder);

const product = [
  {
    name: "laptop",
    price: 2500,
    count: 8,
  },
  {
    name: "desktop",
    price: 2000,
    count: 4,
  },
  {
    name: "phone",
    price: 1000,
    count: 6,
  },
];

product.sort(); //           nothing will change

console.log(product);

// ordered price wise

product.sort((a, b) => a.price - b.price);

//   if you want to discending order just do (b.price-a.price)

console.log(product);
