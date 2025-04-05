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

 