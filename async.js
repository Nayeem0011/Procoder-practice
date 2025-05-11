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




function val(a, b) {
    console.log(a + b);
}

function claculat(a, b, valCallback) {
    valCallback(a, b)
}

claculat(10, 20, (a, b) =>{
    console.log(a + b);
})



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





function getData(dataId, getNextData) {
    setTimeout(() =>{
        console.log("Data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}
// Callback Hell
getData(1, () => {
    console.log("Getting Data1...");
    getData(2, () => {
        console.log("Getting Data2...");
        getData(3, () => {
            console.log("Getting Data3...");
            getData(4, () => {
                console.log("Getting Data End");
            });
        });
    });
});






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




// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     });
// };
// let finalVal = getData(123)
// console.log(finalVal);






// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("My first promise");
//         resolve("Success");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });





// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("My first promise");
//         reject("error")
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });





// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("My first promise");
//         reject("error")
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch(() => {
//     console.log("rejected");
// });





// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("My first promise");
//         reject("network error")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });





const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("My first promise");
        resolve("Success");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});






// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 3000)
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 3000)
//     });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {})
// })





// // Same code but a little different
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 3000)
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 3000)
//     });
// }

// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {})
// })





// // For one's data
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//         }, 5000)
//     });
// };

// // Promise chain
// getData(1)((res) => {
//     console.log(res);
// })





// // For many data
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//         }, 2000)
//     });
// };

// // Promise chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });




// // Better options
// // For many data
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//         }, 2000)
//     });
// };

// // Promise chain

// getData(1)
// .then((res) => {
//     console.log(res);
//     return getData(2);
// })
// .then((res) => {
//      console.log(res);
//      return getData(3);
// })
// .then((res) => {
//      console.log(res);
// });






// Or Better options
// For many data
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000)
    });
};

// Promise chain
console.log("Getting Data1...");
getData(1)
.then(() => {
    console.log("Getting Data2...");
    return getData(2);
})
.then(() => {
    console.log("Getting Data3...");
     return getData(3);
})
.then((res) => {
     console.log(res);
});








// Async-Await js

//Async
// async function hello() {
//     console.log("Hello");
// }



// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }



// // Same code but a little different
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();//1st
//     await api();//2nd
// }







// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//         }, 2000)
//     });
// };

// // Async-Await
// async function getAllData() {
//     console.log("Getting Data1...");
//     await getData(1);
//     console.log("Getting Data2...");
//     await getData(2);
//     console.log("Getting Data3...");
//     await getData(3);
//     console.log("Getting Data4...");
//     await getData(4);
//     console.log("Getting Data5...");
//     await getData(5);
//     console.log("Getting Data6...");
//     await getData(6);
//     console.log("Getting Data Emd");
// }
// getAllData();







function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000)
    });
};

// Async-Await
// Use IIFE
(async function getAllData() {
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
    console.log("Getting Data4...");
    await getData(4);
    console.log("Getting Data5...");
    await getData(5);
    console.log("Getting Data6...");
    await getData(6);
    console.log("Getting Data Emd");
}) ();

























