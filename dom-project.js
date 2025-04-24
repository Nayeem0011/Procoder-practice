let body = document.getElementById("body");
let button = document.querySelectorAll("li");


// let colorRed = document.querySelector(".red");
// colorRed.addEventListener("click", function (){
//     body.style.backgroundColor = "red"
// });
// let colorgreen = document.querySelector(".green");
// colorgreen.addEventListener("click", function (){
//     body.style.backgroundColor = "green"
// });
// let colorBlue = document.querySelector(".blue");
// colorBlue.addEventListener("click", function (){
//     body.style.backgroundColor = "blue"
// });
// let colorPink = document.querySelector(".pink");
// colorPink.addEventListener("click", function (){
//     body.style.backgroundColor = "pink"
// });



// button.forEach(function(value){
//     value.addEventListener("click", function (){
//         let className = this.classList.value;
//         body.style.backgroundColor = "className"
//     });
// });



// button.forEach(function(value){
//     value.addEventListener("click", function (){
//         let className = this.classList[0];
//         body.style.backgroundColor = className;
//     });
// });


button.forEach(function(value){
    value.addEventListener("click", function (){
        let className = this.classList[0];
        let color = ""
        if (className === "red")
            color = "red";
        if (className === "green")
            color = "green";
        if (className === "blue")
            color = "blue";
        if (className === "pink")
            color = "pink";
        body.style.backgroundColor = color;
    });
});










