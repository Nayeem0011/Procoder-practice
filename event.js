
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button Was Cliked");
}





// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button Was Cliked");
//     let val = 25;
//     val++
//     console.log(val);
// }





let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
    console.log("Button Was Cliked");
}




// let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("You are inside div");
// }






// Event Object

// let box = document.querySelector("div");

// box.onmouseover = (evn) => {
//     console.log(evn.type); 
//     console.log(evn.target); 
//     console.log(evn.clientX, evn.clientY); 
// }




const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  box.classList.toggle("blue");
});







