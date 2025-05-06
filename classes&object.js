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






















