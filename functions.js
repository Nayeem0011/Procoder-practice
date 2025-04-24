             // javascipt functions
 

//Basic Functions
// function myName(){
//     console.log("Nayeem");
// }
// myName();





//Parameter functions
// function myName(names){
//     console.log("My name is" + names);
// }
// myName(" Nayeem"); //Argument Functions



// Added parameter
// function myName(names, age){
//     console.log("My name is" + names, "my age" + age);
// }
// myName(" Nayeem", " 20"); //Added argument



// function myName(names, age){
//     console.log("My name is" + names, "my age" + age);
// }
// myName(" Nayeem,", " 20");


function isSubmit() {
    console.log("Submitted");
}
document.getElementById("btn").addEventListener("click", isSubmit);



// Self-Invokeing Function
// (function () {
//     console.log("Hello self");
// })();



// (function (message) {
//     console.log("Hello self", message);
// })("Nayeem");





//Function Expression

// let names = function() {
//     console.log("hello");
// };
// names();


// let maths = function(a, b) {
//     return a + b;
// }
//  const result = maths(20, 30);
//  console.log(result);



// let num = function(a, b) {
//     return a * b;
// }
// let sum = num (10, 30)
// console.log(sum);




// let maths = function(a, b) {
//     return a + b;
// }
//  console.log(maths(20, 30));



// let maths = function(a, b) {
//     return a * b;
// }
//  console.log(maths(20, 30));






// function firstName() {
//     let firstName = "Nayeem"
//     console.log(firstName);
// }
// firstName()



// function firstName() {
//     let firstName = "Nayeem"
// }
// console.log(firstName); //It woan't work from here
// firstName()



// let num = function(a, b) {
//     return a * b;
// }
// let sum = num (10, 30)
// console.log(sum);




// let arr = [12, 31, 5, 3, 56, 6, 7, 12, 54, 7, 9];
// let prr = arr.reduce((prev, curr) => {
//     return prev + curr
// })
// console.log(prr);




// let add = (a, b) => a + b;
// console.log(add(10, 40));




// function names(firstName) {
//     function hello() {
//         alert("Hello" + firstName)
//     }
//     return hello();
// }
// names(" Nayeem");


