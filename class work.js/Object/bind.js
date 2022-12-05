//    using this key to fetch value from bind()----method

//    here we are merging 2 object with help of bind()----method

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

const displayp1 = person.fullName.bind(person1, "bengalore", "india");

const displayp2 = person.fullName.bind(person1, "bengalore", "india");

console.log(displayp1());

console.log(displayp2());
