               //Classes & Object in js


// Prototype Object Example

// const student = {
//     fullName: "Nayeem Islam",
//     age: 22,
//     marks: 84.3,
//     printMarks: function () {
//         console.log("Marks = ", this.marks);
//     }
// }
// console.log(student);



// const employee = {
//   calcTax() {
//     console.log("Tax rate is 10%");
//   }
// }

// Function Example

// const employee2 = {
//   calcTax2: function() {
//     console.log("Tax rate is 10%");
//   }
// }



// const employee = {
//   calcTax() {
//     console.log("Tax rate is 10%");
//   }
// }

// const karanNayeem = {
//   salary: 50000,
// }

// karanNayeem.__proto__ = employee;



// const employee = {
//   calcTax() {
//     console.log("Tax rate is 10%");
//   }
// }

// const karanNayeem = {
//   salary: 50000,
// }

// const karanNayeem2 = {
//   salary: 50000,
// }

// const karanNayeem3 = {
//   salary: 50000,
// }

// karanNayeem.__proto__ = employee;
// karanNayeem2.__proto__ = employee;
// karanNayeem3.__proto__ = employee;



// const employee = {
//   calcTax() {
//     console.log("Tax rate is 10%");
//   }
// }

// const karanNayeem = {
//   salary: 50000,
//   calcTax() {
//     console.log("Tax rate is 20%");
//   }
// }

// karanNayeem.__proto__ = employee;







// Classes in js

// class ToyotaCar {
//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("Stop");
//   }
// }

// let fortuner = new ToyotaCar();




// class ToyotaCar {
//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("Stop");
//   }

//   setBrand(brand) {
//     this.brand = brand;
//   }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")



// Constructor Creating a new object

// class ToyotaCar {
//   constructor(brand) {
//     console.log("Creating a new object");
//     this.brand = brand;
//   }

//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("Stop");
//   }
// }

// let fortuner = new ToyotaCar("fortuner");
// let lexus = new ToyotaCar();



class ToyotaCar {
  constructor(brand, milesge) {
    console.log("Creating a new object");
    this.brand = brand;
    this.milesge = milesge;
  }

  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 20);
console.log(lexus);




// Inheritance in js

// class Parent {
//   hello() {
//     console.log("Hello");
//   }
// }

// class Child extends Parent {}
// let obj = new Child()
// console.log(obj);


// Example
// class Person {
//   eat() {
//     console.log("eat");
//   }

//   sleep() {
//     console.log("sleep");
//   }
// }

// class Engineer extends Person {
//   wark() {
//     console.log("Solve Problems, Build Something");
//   }
// }
// let neyeemObj = new Engineer()
// console.log(neyeemObj);


// Example

// class Person {
//   constructor() {
//     this.species = "home spaiens"
//   }

//   eat() {
//     console.log("eat");
//   }

//   wark() {
//     console.log("no nothing");
//   }

//   sleep() {
//     console.log("sleep");
//   }
// }

// class Engineer extends Person {
//   wark() {
//     console.log("Solve Problems, Build Something");
//   }
// }

// class Doctor extends Person {
//   wark() {
//     console.log("Treat Patients");
//   }
// }
// let neyeemObj = new Engineer()
// console.log(neyeemObj);



// super Keyword


// class Person {
//   constructor() {
//     this.species = "home spaiens"
//   }

//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(brance) {
//     super();// To invoke parent class constructor
//     this.brance = brance;
//   }
//   wark() {
//     console.log("Solve Problems, Build Something");
//   }
// }

// let engObj = new Engineer("Chemical Engineer")
// console.log(engObj);


// Example

// class Person {
//   constructor() {
//     console.log("Enter parent construtor");
//     this.species = "home spaiens"
//   }

//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(brance) {
//     console.log("Enter child construtor");
//     super();// To invoke parent class constructor
//     this.brance = brance;
//     console.log("Exit child construtor");
//   }
//   wark() {
//     console.log("Solve Problems, Build Something");
//   }
// }

// let engObj = new Engineer("Chemical Engineer")
// console.log(engObj);


// Example

class Person {
  constructor(name) {
    this.species = "home spaiens"
    this.name = name;
  }

  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name);// To invoke parent class constructor
  }
  wark() {
    console.log("Solve Problems, Build Something");
  }
}

let engObj = new Engineer("Nayeem")
console.log(engObj);







class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); 
    this.age = age;
  }

  show() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const obj = new Child("Nayeem", 22);
obj.show(); 

