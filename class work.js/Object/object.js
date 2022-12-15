//                 basics of object

const person = {
  fname: "nirmal",

  lname: "raj",

  age: "27",

  color: "white",

  fullname: function () {
    return this.fname + " is " + this.age + " old. and he is from " + this.city;
  },
};

person.city = "bengalore"; //      Push the property and value in object method

console.log(person.fname);

console.log(person.fullname());

delete person.age; //      Delete the property in the object

console.log(person.fullname());

const arr = [1, 2, 3, 4];

const obj = { ...arr };

console.log(obj);

const promise = new Promise((res) => res(2));

console.log(promise);

promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return 0;
  })
  .then((v) => {
    console.log(v);
    return 1;
  })
  .then((v) => {
    console.log(v);
  });

const array = [6, 7, 8];

for (let i in array) {
  console.log(i);
}

for (let i of array) {
  console.log(i);
}
