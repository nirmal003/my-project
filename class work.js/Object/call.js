//    using this key to fetch value from call()----method

//    here we are merging 2 object with help of call()----method

const person = {
  fullName: function (city, country) {
    return (
      this.firstName + " " + this.lastName + " from " + city + " in " + country
    );
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "bengalore", "india"));

console.log(person.fullName.call(person2, "bengalore", "india"));
