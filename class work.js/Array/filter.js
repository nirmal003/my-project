const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9];

const even = nums.filter(isEven); //  call the finc.... filter into the function

function isEven(value) {
  return value % 2 === 0; //   find the even number
}

console.log(even);

//  find the odd number in single line code

const odd = nums.filter((value) => value % 2 === 1); //  call the finc.... filter inside the function

console.log(odd);

// Can filter the object-array

const people = [
  {
    name: "Nirmal",
    age: 27,
  },
  {
    name: "Mahesh",
    age: 22,
  },
  {
    name: "Pradeep",
    age: 17,
  },
];

const adults = people.filter((parson) => parson.age >= 18); // filter with camparison

console.log(adults);

// remove duplicates in numbers

const removeduplicate = nums.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(removeduplicate);

const duplicate = nums.filter((value, index, arr) => {
  return arr.indexOf(value) !== index;
});

console.log(duplicate);

// remove duplicates in string

const str = ["ball", "apple", "apple", "orange", "ball", "car", "wheel", "car"];

const remove_duplicate = str.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(remove_duplicate);

//   will get only duplicate values

const duplicates = str.filter((value, index, arr) => {
  return arr.indexOf(value) !== index;
});

console.log(duplicates);
