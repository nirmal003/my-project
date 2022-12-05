//     it will give the finded value or undefined

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

const res = names.find((name) => {
  return name === "nirmal";
});

console.log(res);

//    in object will give property and value's of object

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

const person = people.find((person) => {
  return person.name === "Mahesh";
});

console.log(person);

//                           you will get value of property

const age = people.find(man).age;

function man(person) {
  return person.name === "Mahesh";
}

console.log(age);
