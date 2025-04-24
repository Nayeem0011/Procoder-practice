// let main = document.querySelector("h1");
// // main.innerText ="Hello Nayeem"; //Change All Text
// main.innerText = main.innerText + " Nayeem"; // Add a text



// // Change Text
// let allBox = document.querySelectorAll(".box");
// // allBox[0].innerText = "New Text";
// allBox[1].innerText = "New Text";
// allBox[3].innerText = "New Text";


// let newBox = 1;
// for (box of allBox) {
//     box.innerText = `Box No ${newBox}`;
//     newBox++;
// }



//Create Element
let btn = document.createElement("button");
btn.innerText = "Submit";

let addBtn = document.querySelector(".hero");
addBtn.append(btn) //Select Last
// addBtn.prepend(btn) //Select First
// addBtn.before(btn) //Select Before
// addBtn.after(btn) //Select After



//Add Element
// function addName(names) {
//     let li = document.createElement("li")
//     li.innerHTML = `${names}`;
//     document.querySelector('ul').appendChild(li);
// }

// addName("Nayeem")
// addName("Nazmul")




//OPtimized
function addNameOp(names) {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(names))
    document.querySelector('ul').appendChild(li);
}

addNameOp("Nayeem")





//Text Change
// let nameChange = document.querySelector ("li:first-child");
// console.log(nameChange);
// nameChange.innerText = 'blueberry';
// nameChange.textContent = 'blueberrys';




// const newFruits = document.createElement('li');
// newFruits.textContent = 'Strawberry';
// nameChange.replaceWith(newFruits);

// Edit with Tag
// const editTag = document.querySelector('li:last-child');
// editTag.outerHTML = '<p>Lemon</p>';

// Remove
// editTag.remove();

















