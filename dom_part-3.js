           // JavaSript DOM Practice

// document.body.style.backgroundColor = "red"


// document.body.childNodes[1].innerText = "Hello Dom"




// Selecting with id

// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);




// Selecting with class

// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);




// Selecting with class

// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);




// Selecting with tagName

// let paragr = document.getElementsByTagName("p")
// console.log(paragr);
// console.dir(paragr);






// Selecting with Queary Selector


// Selecting with id

// let element = document.querySelector("#heading"); // First element
// console.log(element);



// Selecting with class

// let element = document.querySelector(".heading"); // First element
// console.log(element);



// Slelcting First element

// let element = document.querySelector("p"); // First element
// console.log(element);
// console.dir(element);




// Slelcting all element

// let element = document.querySelectorAll("p"); // First element
// console.log(element);
// console.dir(element);





// DOM manipulation  DOM Properties:

// Innertext
// let div = document.querySelector("div");
// console.dir(div.innerText);


// let div = document.querySelector("h1").innerText = "Hello Javascript"




//innerHTML
// let div = document.querySelector("div");
// console.dir(div.innerHTML);


// let div = document.querySelector("h1").innerHTML = "<i>New Heading</i>"



// Let's Preactie

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " Nayeem"; // Concatenate



// let div = document.querySelectorAll(".box");

// div[0].innerText = "First div"
// div[1].innerText = "Second div"
// div[2].innerText = "Third div"

// let idx = 1;
// for (divs of div) {
//     divs.innerText = `New value ${idx}`;
//     idx++;
// }












// getAttribute

// let element = document.querySelector("div");
// console.log(element);

// let val = element.getAttribute("id")
// console.log(val);


// let para = document.querySelector("p");
// console.log(para);

// let val = para.getAttribute("class")
// console.log(val);


// setAttribute

// let para = document.querySelector("p");
// console.log(para);

// let val = para.setAttribute("class", "name")
// console.log(val);



// style

// let val = document.querySelector("#id");
// val.style.backgroundColor = "red"




// DOM Manipulation Insert Elements


// let newBtn = document.createElement("button");//Create Element
// newBtn.innerText = "Submit";

// let div = document.querySelector("div");
// div.append(newBtn)//adds at the end of node (inside)

// let style = document.querySelector("button");// style
// style.style.backgroundColor = "red"
// style.style.border = "0"
// style.style.padding = "7px 19px"
// style.style.borderRadius = "5px"
// style.style.color = "white"




// let newBtn = document.createElement("button");//Create Element
// newBtn.innerText = "Submit";

// let div = document.querySelector("div");
// div.prepend(newBtn)//adds at the start of node (inside)

// let style = document.querySelector("button");// style
// style.style.backgroundColor = "red"
// style.style.border = "0"
// style.style.padding = "7px 19px"
// style.style.borderRadius = "5px"
// style.style.color = "white"
// style.style.margin = "5px"




// let newBtn = document.createElement("button");//Create Element
// newBtn.innerText = "Submit";

// let div = document.querySelector("div");
// div.before(newBtn)//adds before the node (outside)

// let style = document.querySelector("button");// style
// style.style.backgroundColor = "red"
// style.style.border = "0"
// style.style.padding = "7px 19px"
// style.style.borderRadius = "5px"
// style.style.color = "white"
// style.style.margin = "5px"




// let newBtn = document.createElement("button");//Create Element
// newBtn.innerText = "Submit";

// let div = document.querySelector("div");
// div.after(newBtn)///adds after the node (outside)

// let style = document.querySelector("button");// style
// style.style.backgroundColor = "red"
// style.style.border = "0"
// style.style.padding = "7px 19px"
// style.style.borderRadius = "5px"
// style.style.color = "white"
// style.style.margin = "5px"





let newBtn = document.createElement("button");//Create Element
newBtn.innerText = "Submit";

let div = document.querySelector("p");
div.after(newBtn)///adds after the node (outside)

let style = document.querySelector("button");// style
style.style.backgroundColor = "red"
style.style.border = "0"
style.style.padding = "7px 19px"
style.style.borderRadius = "5px"
style.style.color = "white"
style.style.margin = "5px"


// Added New Element
let newHeadig = document.createElement("h1");
newHeadig.innerHTML = "<i>Hello Javascript DOM</i>"

let h1 = document.querySelector("body");
h1.prepend(newHeadig)




// Delete Element


let para = document.querySelector("p");
para.remove()


let head = document.querySelector("h1");
head.remove()













