//    it will give's the array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

const double = nums.map((value, index, arr) => {
  return value * 2; //     doubled value
});

console.log(double);

const multiply = nums.map((value, index, arr) => {
  return value * index; //    multiply with index
});

console.log(multiply);

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

//  by using map to find the each product value

const totalproductvalue = product.map((item) => item.price * item.count);

console.log(totalproductvalue);

// to get the each product name and product value by using object inside the map

const productvalue = product.map((item) => ({
  name: item.name,
  totalvalue: item.price * item.count,
}));

console.log(productvalue);

// string to number 1st & 2nd method both are same

const str = ["1", "2", "3", "4", "5", "6"];

const number = str.map((e) => Number(e));

console.log(number);

// string to number 1st & 2nd way both are same

const num = str.map(Number); // this is simple way to change string to number

console.log(num);
