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
// let age = 20;
// if (age >= 18) {
//     if (age >= 50) {
//         console.log("Senior");
//     } else {
//         console.log("Middle");
//     }
// } else {
//     console.log("Chail");
// }

// // Nesting loop
// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }



// function getData(dataId) {
//     setTimeout(() =>{
//         console.log("Data", dataId);
//     }, 2000)
// }
// getData(1234)




// function getData(dataId, getNextData) {
//     setTimeout(() =>{
//         console.log("Data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }
// // Callback Hell
// getData(1, () => {
//     getData(2);
// });




// function getData(dataId, getNextData) {
//     setTimeout(() =>{
//         console.log("Data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }
// // Callback Hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });




// function getData(dataId, getNextData) {
    // setTimeout(() =>{
    //     console.log("Data", dataId);
    //     if (getNextData) {
    //         getNextData();
    //     }
    // }, 2000)
// }
// // Callback Hell
// getData(1, () => {
//     console.log("Getting Data1...");
//     getData(2, () => {
//         console.log("Getting Data2...");
//         getData(3, () => {
//             console.log("Getting Data3...");
//             getData(4, () => {
//                 console.log("Getting Data End");
//             });
//         });
//     });
// });






// Promise 

// let promise = new Promise((resolve, reject) => {
//     console.log("My first promise");
//     resolve("Success")
// });



// let promise = new Promise((resolve, reject) => {
//     console.log("My first promise");
//     reject("Some error")
// });


// Promise
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     });
// };
// let finalVal = getData(123)
// console.log(finalVal);




function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
            if (getNextData) {
                getNextData();
            }
        }, 5000)
    });
};
let finalVal = getData(123)
console.log(finalVal);

















