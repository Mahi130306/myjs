// console.log("Hi, Earth!");
console.log("Hi, Earth!");
// Arrays
console.log("Arrays "); 
let arr = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr); // [1, 2, 3, 4, 5]
let marks = [10, 25, 36, 47, 58, 60]; // array of numbers
console.log(marks); // [10, 25, 36, 47, 58, 60]
console.log(marks.length); // 6
let heroes = ["ironman", "spiderman", "thor", "hulk"]; // array of strings
console.log(heroes); // ["ironman", "spiderman", "thor", "hulk"]
// array indices
console.log(heroes[0]); // "ironman"
console.log(heroes[1]); // "spiderman"
console.log(marks[2]); // 36
marks[4] = 100; // change the first element of the array
console.log(marks); // [10, 25, 36, 47, 100, 60]
// loop over an array
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
// for fo loop
for (let i  of heroes) {
    console.log(i);
}
let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"]; // array of strings
for (let city of cities){
    console.log(city);
    console.log(city.toUpperCase()); // convert to uppercase
}


//practice question 
console.log("Practice Questions");
// 1.fro a given arry with marks of student->[85,97,44,37,76,60] find the average marks of the entire class
let marks1 = [85, 97, 44, 37, 76, 60]; // array of numbers
let sum = 0; // variable to store the sum of marks
for (let i=0; i<marks1.length; i++){
    sum += marks1[i]; 
}
let cavg= sum/marks1.length; 
console.log(`avg marks of class = ${cavg}`); 

// 2.fro a given array with prices of 5 items -> [250,645,300,900,50] all items 
// have an offer of 10% OFF on them. Change the array to store final price after 
// applying offer
let prices = [250, 645, 300, 900, 50]; 
for (let i=0; i<prices.length; i++){
    offer=prices[i]*0.1; 
    prices[i] -= offer; 
}
console.log(`Final prices after offer = ${prices}`);

// array methods
// push(), pop(), shift(), unshift(), splice(), slice(), concat(), join(), indexOf(), lastIndexOf(), reverse(), sort()
// push() - add an element to the end of the array
console.log("Array Methods");
let arr1 = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr1); // [1, 2, 3, 4, 5]
