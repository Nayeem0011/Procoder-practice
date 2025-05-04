
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button Was Cliked");
// }





// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button Was Cliked");
//     let val = 25;
//     val++
//     console.log(val);
// }





// let btn2 = document.querySelector("#btn2");

// btn2.ondblclick = () => {
//     console.log("Button Was Cliked");
// }




// let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("You are inside div");
// }






// Event Object

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.preventDefault());
//   console.log(e.key);
//   console.log(e.clientX, e.clientY);
// }


// let btn2 = document.querySelector("#btn2");

// btn2.ondblclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.preventDefault());
//     console.log(e.key);
//     console.log(e.clientX, e.clientY);
// }




// let box = document.querySelector("div");

// box.onmouseover = (evn) => {
//     console.log(evn.type); 
//     console.log(evn.target); 
//     console.log(evn.clientX, evn.clientY); 
// }




// Event Lestener

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//   console.log("Button Was Cliked");
// });

// btn1.addEventListener("click", () => {
//   console.log("Button Was Cliked Handler2");
// });
 



// Event Lestener Object

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (e) => {
//   console.log("Button Was Cliked");
//   console.log(e);
//   console.log(e.type);
// });

// btn1.addEventListener("click", () => {
//   console.log("Button Was Cliked Handler2");
// });



// Event Lestener Remove
 
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  console.log("Button Was Cliked Hanhler1");
});

const Handler2 = () => {
  console.log("Button Was Cliked Handler2");
};
btn1.addEventListener("click", Handler2);
 
btn1.addEventListener("click", () => {
  console.log("Button Was Cliked Handler3");
});
 
btn1.addEventListener("click", () => {
  console.log("Button Was Cliked Handler4");
});

btn1.removeEventListener("click", Handler2);



// Let's Practice


// let modeBtn = document.querySelector("#mode");

// modeBtn.addEventListener("click")









