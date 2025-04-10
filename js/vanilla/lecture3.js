// console.log("Hi, Earth!");
// loops and strings
console.log("loops and strings");
// loops
// for loop, while loop, do while loop, for of loop, for in loop, forEach loop

// for loop
let ix=0
console.log("for loop");
for (let i = 0; i <= 11; i++) {
    console.log("kkk");
}
for (let i = 0; i <= 11; i++) {
    ix=ix+1;
    }
    console.log(ix);

//while loop
let a=1;
console.log("while loop");
while (a <= 5) {
    console.log(a);
    a++;
}

// do while loop    
console.log("do while loop");
let b=1;
do {
    console.log(b);
    b++;
}
while (b <= 5);

// for of loop
console.log("for of loop");
let arr = ["apple", "banana", "cherry"];
for (let fruit of arr) {
    console.log(fruit);
}

// for in loop
console.log("for in loop");
let obj = { name: "John", age: 30, city: "New York" };
for (let key in obj) {
    console.log(key , "key","obj", obj[key]);
}

// forEach loop
console.log("forEach loop");
let arr2 = ["apple", "banana", "cherry"];
arr2.forEach(function(fruit) {
    console.log(fruit);
});

// practice question
// 1. print all even numbers from 0 to 100
for (let num=0; num<=10; num++){
    if (num%2==0){
        console.log(num);
    }
    else{
        continue;
    }
}
// 2. create a game where you start with any random game number.Ask the user to keep guessing the game number until the user enters correct value.
let gnum = 25;
let unum = (prompt("Guess the number 0 to 100"));

while (unum != gnum) {
    if (unum < gnum) {
        console.log("Guess higher number");
    } else if (unum > gnum) {
        console.log("Guess lower number");
    }
    unum = (prompt("Guess the number"));
}

console.log("YAY!... you guessed the number"+ unum);


// strings
console.log("strings");
let str = "hahahah";
let str1 = 'hi! earth'; 
// str.length gives the length of the string
console.log(str[5]);
console.log(str1[6]);
// template literals
let sentence = `this is a templet literal`;
console.log(typeof sentence);
 let obj2 = { item:"pen", price: 10};
 console.log(`the price of ${obj2.item} is ${obj2.price}`);
 console.log("the price of ",obj2.item," is ",obj2.price); // $ is a placeholder for the value of obj2.item and obj2.price
 let output = `the price of ${obj2.item} is ${obj2.price}`;
 console.log(output);
// new line character
let str2 = "Hi\nEarth!"; // \n is a new line character
console.log(str2);
// tab character
let str3 = "Hi\t Earth!"; // \t is a tab character
console.log(str3);

// string methods
console.log("string methods");
let str4 = "Hi, earth!";
console.log(str4); // prints the string
console.log("length of above string is",str4.length); // length of the string
console.log("string in uppercase",str4.toUpperCase()); // converts the string to uppercase
console.log("string in lowercase",str4.toLowerCase()); // converts the string to lowercase  
console.log("string in titlecase",str4.charAt(0).toUpperCase() + str4.slice(1)); // converts the first character of the string to uppercase and the rest to lowercase
