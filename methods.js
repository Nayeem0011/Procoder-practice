
               // Array Map Method


// let arr = [34, 24, 52, 62, 72, 87, 83];

// arr.map((val) => {
//     console.log(val);
// });



// let arr = [34, 24, 52, 62, 72, 87, 83];

// let newArr = arr.map((val) => {
//     return val
// });

// console.log(newArr);



// let arr = [34, 24, 52, 62, 72, 87, 83];

// let newArr = arr.map((val) => {
//     return val * val
// });

// console.log(newArr);








// Array Filter Method



// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let oddArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });

// console.log(oddArr);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let oddArr = arr.filter((val) => {
//     return val > 3;
// });

// console.log(oddArr);



// Array Reduce Method

// let arr = [1, 2, 3, 4]

// let resul = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(resul);



// let arr = [1, 2, 3, 4]

// let resul = arr.reduce((res, curr) => {
//     return res > curr ? res : curr;
// })

// console.log(resul);



// let arr = [1, 2, 3, 4]

// let resul = arr.reduce((res, curr) => {
//     return res < curr ? res : curr;
// })

// console.log(resul);



// Let Practice


// let marks = [95, 34, 62, 90, 25, 83, 92, 73, 48, 49, 99];

// let high = marks.filter((val) => {
//     return val > 90;
// });

// console.log(high);


// let n = prompt("Enter a numbet :");

// let arr = [];

// for (let i = 1; i<=n; i++) {
//     arr [i-1] = i;
// }

// console.log(arr);



// let n = prompt("Enter a numbet :");

// let arr = [];

// for (let i = 1; i<=n; i++) {
//     arr [i-1] = i;
// }

// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(sum);







let n = prompt("Enter a numbet :");

let arr = [];

for (let i = 1; i<=n; i++) {
    arr [i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log("sum =", sum);

let factoril = arr.reduce((res, curr) => {
    return res * curr;
})

console.log("factoril =", factoril);


