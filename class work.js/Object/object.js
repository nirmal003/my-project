//                 basics of object

const person = {
  fname: "nirmal",

  lname: "raj",

  age: "27",

  color: "white",

  fullname: () => {
    return this.fname + " is " + this.age + " old. and he is from " + this.city;
  },
};

person.city = "bengalore"; //      Push the property and value in object method

delete person.age; //      Delete the property in the object

console.log(person.fname);

console.log(person.fullname());
