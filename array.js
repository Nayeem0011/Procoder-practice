            //Javascript Array

// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// console.log(arr[1]);


// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// arr[4] = "nazim" //Information Change
// console.log(arr);



// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// console.log(arr.toString()); //Changing to string



// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// console.log(arr.length);



// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// console.log(arr[2]);



// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// console.log(arr[arr.length -1]); //Last item



// let arr = ["Nayeem", "Omor", "Adnan", "Nazmul", "Neloy"]
// console.log(arr[0], arr[1], arr[2]);




// Looping over an Array


// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// console.log(herose);


//Useing for loop
// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// for (let i = 0; i < herose.length; i++) {
//     console.log(herose[i]);
// }


// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// for (let i = 1; i <= herose.length; i++) {
//     console.log(herose[i-1]);
// }



//Useing for of loop
// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// for (let hero of herose) {
//     console.log(hero);
// }




// Practice Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`Avg marks of the class = ${avg}`);


// Practice Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]

// Useing for of loop

// let items = [250, 645, 300, 900, 50]
// let i = 0; 
// for (let val of items) {
//     console.log(`Value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }



// let items = [250, 645, 300, 900, 50]
// let i = 0; 
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }

// Useing for loop

// let items = [250, 645, 300, 900, 50]

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);



//Array Methods 


// push

// let foodItems = ["Potato", "Apple", "Litchi", "tomato",]

// foodItems.push("Chips", "burger")
// console.log(foodItems);



// pop

// let foodItems = ["Potato", "Apple", "Litchi", "tomato",];
// foodItems.pop()
// console.log(foodItems);



// let foodItems = ["Potato", "Apple", "Litchi", "tomato",];
// let deletedItem = foodItems.pop()
// foodItems.pop()
// console.log("deleted :", deletedItem);




// toString
// let foodItems = ["Potato", "Apple", "Litchi", "tomato",];

// console.log(foodItems);
// console.log(foodItems.toString());



// let marks = [54, 35, 63, 67, 73, 54];

// console.log(marks);
// console.log(marks.toString());



// concat

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];

// let herose = marvelHeroes.concat(dcHeroes);
// console.log(herose);


// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let myName = ["nayeem"]

// let herose = marvelHeroes.concat(dcHeroes,myName);
// console.log(herose);



// unshift

// let marvelHeroes = ["thor", "spiderman", "ironman"];

// marvelHeroes.unshift("antman")
// console.log(marvelHeroes);




// shift

// let marvelHeroes = ["thor", "spiderman", "ironman"];

// marvelHeroes.shift()
// console.log(marvelHeroes);


// let marvelHeroes = ["thor", "spiderman", "ironman"];

// let val = marvelHeroes.shift()
// console.log("deleted", val);
// console.log(marvelHeroes);



// slice

// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// console.log(herose.slice(1));


// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// console.log(herose.slice(1, 3));



// splace

// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// herose.splice(1, 1, "nayeem");

// console.log(herose);


// add element
// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// herose.splice(2, 0, "nayeem");

// console.log(herose);


// delete element
// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// herose.splice(2, 1);

// console.log(herose);

// replace element
// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// herose.splice(2, 1, "batman");

// console.log(herose);


// let herose = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];
// herose.splice(2);

// console.log(herose);





// let practice

// let companices = ["Boomberg", "Microsoft", "Uber", "Googlr", "IBM", "Netflix"]

// // companices.pop()
// companices.shift()
// console.log(companices);



// let companices = ["Boomberg", "Microsoft", "Uber", "Googlr", "IBM", "Netflix"]

// companices.splice(2, 1, "Ola")
// console.log(companices);



// let companices = ["Boomberg", "Microsoft", "Uber", "Googlr", "IBM", "Netflix"]

// companices.push("Amazon")
// console.log(companices);
















