// document.querySelector("h1").innerText = "Hello"

let box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.width = "100px";
box.style.height = "100px";
box.style.color = "red";


document.getElementById("box").style.
backgroundColor = "red";



let item = document.querySelectorAll("a");
// item[0].style.color = "red"
item.forEach(function(i){
    i.style.color = "red";
    i.style.fontSize = "25px"
})



let navLi = document.getElementsByClassName("menu");

let navClass = Array.from(navLi);
// for (let i = 0; i < navLi.length; i++){
//     console.log(navLi[i]);
// }
navClass.forEach(function(i){
    i.style.backgroundColor ="black";
    i.style.margin ="0 0 15px"
    i.style.padding ="10px 20px"
})


