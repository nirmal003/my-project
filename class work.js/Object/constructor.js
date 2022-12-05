//    constructor method   its similar to the object

class person {
  constructor() {
    this.id = 103; //        directly set the property and value
    this.name = "Nirmal raj";
  }
}

var emp = new person();

console.log(emp.id + " " + emp.name);

class CompanyName {
  constructor() {
    this.company = "SEG";
  }
}

class Employee extends CompanyName {
  constructor(id, name) {
    //                    recive the 2 parameters

    super(); //                         this will the parent of companyName

    this.id = id; //         set the property and value

    this.name = name;
  }
}

var emp1 = new Employee(1, "Nirmal"); //     call the chid function with value's

var emp2 = new Employee(2, "Mahesh"); //     call the chid function with value's

console.log(emp1.id + " " + emp1.name + " " + emp1.company);

console.log(emp2.id + " " + emp2.name + " " + emp2.company);
