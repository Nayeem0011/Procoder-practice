               // Async In Js

// Asynchronous

// function hello() {
//     console.log("Hello");
// }
// setTimeout(hello, 3000);


// setTimeout(() => {
//     console.log("Hello");
// }, 3000);


// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// console.log("Three");
// console.log("Four");



// Callbacks

// function val(a, b) {
//     console.log(a + b);
// }

// function claculat(a, b, valCallback) {
//     valCallback(a, b)
// }

// claculat(10, 20, val)




// function val(a, b) {
//     console.log(a + b);
// }

// function claculat(a, b, valCallback) {
//     valCallback(a, b)
// }

// claculat(10, 20, (a, b) =>{
//     console.log(a + b);
// })



// Callbacks Hell

// Nesting if else
let age = 20;
if (age >= 18) {
    if (age >= 50) {
        console.log("Senior");
    } else {
        console.log("Middle");
    }
} else {
    console.log("Chail");
}

// Nesting loop
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(i, str);
}





























